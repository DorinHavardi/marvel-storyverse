'use client';
import PageLayout from '@/components/Layout/PageLayouts.cmp';
import Logo from '@/components/Logo/Logo.cmp';

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center text-center h-full">
        <Logo />
      </div>
    </PageLayout>
  );
}
