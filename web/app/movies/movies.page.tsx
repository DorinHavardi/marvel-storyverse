'use client';

import { useMovies } from '@/hooks/useMovies.hook';

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies?.map(movie => (
        <div key={movie?._id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{movie?.title?.en}</h2>
          <p className="text-sm">{movie?.synopsis?.en}</p>
          <p className="text-xs mt-2">
            Release Date: {new Date(movie?.releaseDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
