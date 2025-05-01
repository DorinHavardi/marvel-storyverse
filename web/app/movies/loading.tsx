'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PageLoading = () => {
  return (
    <div className="relative px-4 py-12">
      <div className="flex flex-col gap-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center md:items-start md:flex-row"
          >
            <div
              className={`
                mt-6 md:mt-2 md:w-1/2
                ${
                  index % 2 === 0
                    ? 'md:pl-[calc(1rem+8px)] md:pr-4 md:self-start'
                    : 'md:pl-4 md:pr-[calc(1rem+8px)] md:self-end'
                }
              `}
            >
              <div className="flex flex-col items-center">
                {/* תאריך בטייםליין */}
                <Skeleton
                  height={24}
                  width={40}
                  className="px-3 py-1 mb-4 rounded-md"
                />

                {/* כרטיס פוסטר */}
                <div className="relative w-[250px] h-[370px] rounded-xl overflow-hidden shadow-md bg-gray-800">
                  <Skeleton height={370} width={250} />
                  <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                    <Skeleton height={32} width="75%" className="mb-3" />
                    <Skeleton height={16} width="50%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageLoading;
