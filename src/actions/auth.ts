'use server'
import * as schema from '@/util/schema';
import { initDb } from '@/util/db';
import { eq } from 'drizzle-orm';

export async function signUp(email: string, password: string) {
  console.log("Email: ", email)
  console.log("Password: ", password)
  const db = initDb();
  
  //Check if user already exists
  const user = await db.select().from(schema.userTable).where(eq(schema.userTable.email, email)).limit(1)
  if(user.length > 0) {
    //TODO: Make Response object
    return "User already exists"
  }

  //Create user

  return"User created";
}