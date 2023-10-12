import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAppContext } from '@/context/use-context';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface ContactProps {}

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, { message: 'Name must be less than 50 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  message: z
    .string()
    .min(10, { message: 'Message must contain more than 10 characters.' })
    .max(500, { message: 'Message must be less than 500 characters long.' }),
});

const Contact: React.FC<ContactProps> = () => {
  const { headerHeight } = useAppContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <div className="flex-1 max-w-3xl px-6 bg-foreground/10 rounded-lg py-8">
        <h1 className="text-4xl font-dela">Contact Me</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Nathan Cuevas" {...field} />
                  </FormControl>
                  <FormDescription>This is the name I can refer to you by.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>The Email you'd like me to respond to you with.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={10} placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormDescription>What is the Reason for contacting me?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="lg" type="submit">
              Email Me
            </Button>
          </form>
        </Form>
        {/* <div className="w-full">
          <h1 className="text-4xl py-5 font-dela text-center"> - OR -</h1>
          <div className="flex justify-evenly gap-3">
            <a
              href="https://github.com/NateAyye"
              className="text-2xl flex-1 text-center rounded-md text-white font-bold font-dela tracking-widest py-3 hover:bg-gray-700 focus:bg-gray-700 bg-gray-500"
            >
              Github
            </a>
            <a
              href=""
              className="text-2xl flex-1 text-center rounded-md text-white font-bold font-dela tracking-widest py-3 hover:bg-red-700 focus:bg-red-700 bg-red-500"
            >
              Youtube
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-cuevas/"
              className="text-2xl flex-1 text-center rounded-md text-white font-bold font-dela tracking-widest py-3 hover:bg-blue-700 focus:bg-blue-700 bg-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
