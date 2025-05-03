'use client';
import Logo from '@/components/Logo/Logo.cmp';
import Image from 'next/image';

export default function HomePage() {
  const cover = '/images/design/space/red_galaxy_bg.jpg';

  return (
    <main>
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4">
        <div className="relative z-20">
          <Logo />
        </div>

        <Image
          src={cover}
          alt="Hero Poster"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-purple-900/25 z-10" />
      </section>
    </main>
  );
}
