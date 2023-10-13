'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

import Image from 'next/image';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallax({ id }: { id: number | string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className=''>
      <div ref={ref}>
        <Image
          src={`/${id}.jpg`}
          alt='Cantik Aku'
          width={250}
          height={300}
          className='rounded-md border-[8px]'
        />
      </div>
      <motion.h1
        className='h2-motion-parallax'
        style={{ y }}>{`#00${id}`}</motion.h1>
    </section>
  );
}

const page = ({ id }: { id: number[] }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className='container container-parallax mx-auto p-4 flex flex-col justify-center items-center'>
      <div>
        <h1 className='font-mono text-slate-100 '>
          Selamat Ulang Tahun ke 20 Ayang Aku 😘😘😘
        </h1>
      </div>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101,
      ].map((image) => (
        <ImageParallax id={image} />
      ))}
      <motion.div className='progress' style={{ scaleX }} />
    </section>
  );
};

export default page;
