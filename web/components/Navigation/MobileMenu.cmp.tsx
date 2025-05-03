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
      <button onClick={() => setOpen(!open)} className="p-2 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="#6C2B2A"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 right-0 w-2/3 bg-white shadow-md rounded-l-lg z-50 p-4 flex flex-col gap-4">
          {NAVIGATION_ROUTES.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 text-lg"
              onClick={() => setOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
