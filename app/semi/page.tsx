'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 30000);
  });

  return (
    <section className='container mx-auto p-2'>
      <div className='w-full flex justify-center items-center flex-col min-h-screen shadow-sm'>
        <div className='w-full p-2 border rounded-md self-start flex flex-col justify-center items-center shadow-lg'>
          <h1 className='text-2xl font-inter text-slate-100'>
            Ayang Aku Is Awesome !!😘
          </h1>
          <Image
            src={'/pic.jpg'}
            width={150}
            height={150}
            alt='sicantik'
            className='border-2 rounded-full hover:-rotate-45 transition-all hover:scale-95 duration-300 ease-in-out'
          />
          <div className='mt-4'>
            <small>
              Ayang Aku si paling jago masak 😘tapi susah kalo suruh makan🥴
              ayang aku si imut😘 tapi kalo ngambek malah diem🥲 ayang si paling
              tau kalo ada apa apa, kaya superhero 😋 tapi gabisa marah kalo
              lagi tersakiti 😭 ayang aku si pengertian 🥰 tapi paling kepo kalo
              soal urusan😂 ayang aku si paling cerewet 🥴 tapi takut kalo sama
              jurig mah 🤣 ayang aku si paling grecep 😤 tapi kalo ada apa apa
              harus di ingetin soalnya pelupa 😘😂
            </small>
          </div>
        </div>
        <div>
          <small className='text-slate-100'>
            ada banyak hal yangku mau tulis, tapi kyaknya ga akan cukup, karena
            apabila kutulis deskripsi tentang ayangku tidak akan cukup disini,
            karena ku yakin apabila di tulis, akan sebanyak butiran bintang
            dilangit🥰
          </small>
        </div>
      </div>
    </section>
  );
};

export default Home;
