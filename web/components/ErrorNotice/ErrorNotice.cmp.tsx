import React from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorNotice = () => {
  const { t } = useTranslation();
  return (
    <div className="p-10 text-center text-red-500">
      {t('errors.something_went_wrong')}
    </div>
  );
};
