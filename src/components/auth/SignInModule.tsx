'use client'
import { Card, CardContent, CardHeader } from '../ui/card';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default function SignInModule() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
  }

  return (
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
            <button type="submit" className={`bg-blue-500 hover:bg-blue-500/90 text-white rounded-md p-2 w-full`}>Sign In</button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}