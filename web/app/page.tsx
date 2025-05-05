'use client';

import { PageLayout, Logo } from '@/components';

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center text-center h-full">
        <Logo />
      </div>
    </PageLayout>
  );
}
