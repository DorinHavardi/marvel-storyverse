'use client';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  const cover = '/images/design/home_cover_2.jpg';

  return (
    <main className="">
      {/* <div className="relative w-full h-80 overflow-hidden mb-6">
        <Image src={cover} alt={'cover'} fill className="object-cover" />
      </div>
      <div className="content"></div> */}
      <section className="relative w-full h-[95vh] flex flex-col items-center justify-end text-center pb-36 px-4">
        <Image
          src={cover}
          alt="Hero Poster"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="relative z-10">
          <h1 className="text-5xl tracking-widest font-semibold text-white mb-2 drop-shadow-md">
            WORLDS
          </h1>
          <p className="text-sm text-purple-300 font-mono px-4 max-w-xs mx-auto leading-relaxed">
            ⍟ In a universe torn by time and space, legends rise from ashes. ⍟
          </p>
        </div>
      </section>
    </main>
  );
}
