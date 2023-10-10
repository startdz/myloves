import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '../ui/toggle-mode';

const Nav = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto h-24'>
        <ul className='w-full flex justify-between items-center'>
          <li>
            <Link
              className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className='dark:invert'
                width={100}
                height={24}
                priority
              />
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
