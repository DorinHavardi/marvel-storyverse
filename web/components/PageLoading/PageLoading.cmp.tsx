'use client';

import { Skeleton } from './Skeleton.cmp';

export const PageLoading = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-xl overflow-hidden shadow-md p-4 bg-white"
        >
          <Skeleton className="w-full h-48 mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};
