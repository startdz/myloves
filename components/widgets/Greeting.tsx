'use client';

import React from 'react';

import * as z from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';

const UsernameGreeting = z.object({
  username: z.string().min(2, {
    message: 'Minimal 2 Karakter',
  }),
});

const Greeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UsernameGreeting>>({
    resolver: zodResolver(UsernameGreeting),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof UsernameGreeting>) {
    const valid: [string, string, string] = ['ayangku', 'cintaku', 'mylove'];
    if (valid.includes(values.username)) {
      localStorage.setItem('username', values.username);
      Swal.fire({
        title: 'I Love You Cintaku',
        titleText: 'Selamat Ulang Tahun Ayang Aku yang ke 20 Tahun',
        color: '#716add',
        icon: 'success',
        backdrop: `
        rgba(0,0,0,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
        `,
      }).then(() => {
        router.push('/love');
      });
    } else {
      Swal.fire({
        title: 'Kamu Siapa ?',
        icon: 'error',
        titleText: 'Orang Tak diundang, gaboleh masuk...',
        text: 'Kamu Bukan Siapa2 Aku, Huss Pergi Sana...!',
        backdrop: true,
        allowOutsideClick: false,
      }).then(() => {
        router.push('/semi');
      });
    }
  }

  return (
    <motion.div
      layout
      data-isopen={isOpen}
      initial={{ borderRadius: 50 }}
      className='parent'>
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'child_inOpen' : 'child'}`}
      />
      {isOpen && (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Kamu Siapa....'
                        {...field}
                        className='text-slate-100 placeholder:text-slate-300 dark:text-slate-900 dark:placeholder:text-slate-600'
                      />
                    </FormControl>
                    <FormDescription>
                      <span className='text-slate-300 dark:text-slate-800'>
                        Kamu siapa ?🥴 mau apa kesini ? 🙄
                      </span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Masuk</Button>
            </form>
          </Form>
        </>
      )}
    </motion.div>
  );
};

export default Greeting;
