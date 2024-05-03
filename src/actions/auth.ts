'use server'
import * as schema from '@/util/schema';
import { initDb } from '@/util/db';
import { eq } from 'drizzle-orm';
import { Argon2id } from "oslo/password";
import { lucia } from '@/util/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ActionResult } from 'next/dist/server/app-render/types';

export async function signUp(email: string, password: string) : Promise<ActionResult> {
  console.log("Email: ", email)
  console.log("Password: ", password)
  const db = initDb();
  
  //Check if user already exists
  const user = await db.select().from(schema.userTable).where(eq(schema.userTable.email, email)).limit(1)
  if(user.length > 0) {
    return {
      error: "User already exists"
    }
  }

  //Create user
  const hashedPassword = await new Argon2id().hash(password);
  type NewUser = typeof schema.userTable.$inferInsert;

  const newUser: NewUser = {
    id: crypto.randomUUID(),
    email: email,
    hashed_password: hashedPassword,
  };

  await db.insert(schema.userTable).values(newUser)

  //Generate first session
  const session = await lucia.createSession(newUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect("/");
}

//TODO: Implement timeout on invalid attempts
export async function signIn(email: string, password: string) : Promise<ActionResult> {
  const db = initDb();

  //Grab user (if it exists)
  const user = await db.select({ id: schema.userTable.id, email: schema.userTable.email, hashed_password: schema.userTable.hashed_password }).from(schema.userTable).where(eq(schema.userTable.email, email)).limit(1)
  if(user.length === 0) {
    return {
      error: "The email or password you entered is incorrect. Please try again."
    }
  }

  //Else compare password
  const hashedPassword = await new Argon2id().verify(user[0].hashed_password, password);
  if(!hashedPassword) {
    return {
      error: "The email or password you entered is incorrect. Please try again."
    }
  }

  //Create session
  const session = await lucia.createSession(user[0].id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect("/");
}