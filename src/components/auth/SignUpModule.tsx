'use client'
import { Card, CardContent, CardHeader } from '../ui/card';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default function SignUpModule() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values)
  }

  return (
    <>
      <Card className={`w-1/3`}>
        <CardHeader>
          <h1 className={`text-3xl font-bold text-center`}>Sign In</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-8`}>
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )} />
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )} />
              <button type="submit" className={`bg-blue-500 hover:bg-blue-500/90 text-white rounded-md p-2 w-full`}>Sign Up</button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className={`mt-4 space-x-2`}>
        <span>{`Already have an account?`}</span>
        <a href="/" className={`text-blue-500 hover:underline`}>{`Sign In`}</a>
      </div>
    </>
    
  )
}