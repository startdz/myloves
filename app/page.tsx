import { Button } from '@/components/ui/button';
import Greeting from '@/components/widgets/Greeting';
import Nav from '@/components/widgets/Nav';

export default function Home() {
  return (
    <main className='w-full max-w-7xl mx-auto'>
      <section className='w-full min-h-screen flex justify-center items-center'>
        <Greeting />
      </section>
    </main>
  );
}
