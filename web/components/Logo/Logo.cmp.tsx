import { anton } from '@/styles/fonts.style';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <h1
      className={`${anton.className} text-white text-6xl tracking-wider`}
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {t('common.title')}
    </h1>
  );
};

export default Logo;
