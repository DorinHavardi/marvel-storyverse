'use client';

import Link from 'next/link';
import { MobileMenu } from './MobileMenu.cmp';
import { NAVIGATION_ROUTES } from '@/constants/navigationRoutes.const';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo.cmp';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const showLogo = pathname !== '/';
  return (
    <nav className="w-full backdrop-blur-none fixed top-0 z-50 flex items-center justify-between p-4">
      <div className="hidden md:flex gap-8">
        {NAVIGATION_ROUTES.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white hover:text-gray-200 transition"
          >
            {t(link.labelKey)}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      {showLogo && <Logo classNames="!text-lg" />}
    </nav>
  );
};
