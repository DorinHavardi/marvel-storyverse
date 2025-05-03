import { anton } from '@/styles/fonts.style';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  classNames?: string;
}

const Logo = ({ classNames }: LogoProps) => {
  const { t } = useTranslation();
  return (
    <p
      className={`${anton.className} text-white text-6xl tracking-wider ${classNames}`}
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {t('common.title')}
    </p>
  );
};

export default Logo;
