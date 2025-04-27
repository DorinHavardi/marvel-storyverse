'use client';

import Link from 'next/link';
import { MobileMenu } from './MobileMenu.cmp';
import { NAVIGATION_ROUTES } from '@/constants/navigationRoutes.const';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 flex items-center justify-between p-4">
      <div className="text-xl font-bold text-gray-800">Marvel Storyverse</div>

      <div className="hidden md:flex gap-8">
        {NAVIGATION_ROUTES.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-black"
          >
            {t(link.labelKey)}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};
