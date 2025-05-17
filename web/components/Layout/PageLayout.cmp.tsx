'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { MAIN_LAYOUT_BG_IMAGE } from '@/constants/images.const';

interface PageLayoutProps {
  children: ReactNode;
  bgImage?: string;
  overlayColorClass?: string;
  className?: string;
}

const PageLayout = ({
  children,
  bgImage = MAIN_LAYOUT_BG_IMAGE,
  overlayColorClass = 'bg-purple-900/25',
  className = '',
}: PageLayoutProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover z-0 transition-opacity duration-500"
        priority
      />
      <div className={`absolute inset-0 ${overlayColorClass} z-10`} />
      <div
        className={clsx(
          'relative z-20 h-full overflow-y-auto pt-16 px-2',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
export default PageLayout;
