'use client';

import { urlFor } from '@/sanity/client';

interface MovieCardProps {
  movie: {
    _id: string;
    title: string;
    poster?: any;
    whereToWatch?: string[];
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="border rounded-md overflow-hidden shadow">
      {movie?.poster && (
        <img
          src={urlFor(movie.poster).width(300).url()}
          alt={movie?.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-2 text-center">
        <h2 className="text-lg font-semibold">{movie?.title}</h2>
        {movie?.whereToWatch && movie?.whereToWatch?.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            Available on: {movie?.whereToWatch?.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
