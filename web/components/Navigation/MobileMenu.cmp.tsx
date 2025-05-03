'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAVIGATION_ROUTES } from '@/constants/navigationRoutes.const';
import { useTranslation } from 'react-i18next';

export const MobileMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="p-2 focus:outline-none z-50 relative"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
      <div
        className={`absolute top-0 right-0 w-1/2 bg-white/10 backdrop-blur-md rounded-l-lg z-40 p-4 flex flex-col gap-6 drop-shadow-lg transition-all duration-300 ease-in-out transform ${
          open
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="self-start p-2 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {NAVIGATION_ROUTES.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            {t(link.labelKey)}
          </Link>
        ))}
      </div>
    </>
  );
};
