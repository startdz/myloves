import { Button } from '@/components/ui/button';
import Nav from '@/components/widgets/Nav';

export default function Home() {
  return (
    <main className='flex-col p-24 items-center justify-center'>
      <Nav />
      <section className='w-full max-w-4xl mx-auto shadow-lg rounded-md flex-col p-4'>
        <div className='w-full mt-8 p-6'>
          <h1 className='font-mono text-3xl text-center'>
            Ayang aku is Awesome!
          </h1>
          <p className='mt-2 text-lg text-center'>
            si crewet, tapi perhatian, si paling diem kalo marah, tapi imut, si
            lagi sakit kalo lagi haid, sumilang, tapi lucu, si paling susah
            makan, cuman 3 huap kenyang, tapi masakanya enak, gasuka kacang,
            takut belalang, tapi sukanya gigit ayangnya, & si ayang yang gabisa di
            tinggalin
          </p>
        </div>
        <div className='mt-4 w-full flex justify-center items-center gap-4 p-6'>
          <Button variant='secondary'>Cubit Aja ?</Button>
          <Button>atau Peyuk ?</Button>
        </div>
      </section>
    </main>
  );
}
