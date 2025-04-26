'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllMoviesQuery } from '../sanity/queries/movies.query';
import MovieCard from '../components/MovieCard';
import { client } from '@/sanity/client';

async function fetchMovies() {
  const movies = await client.fetch(getAllMoviesQuery);
  return movies;
}

export default function HomePage() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  if (isLoading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-500">Error loading movies.</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Marvel Storyverse</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies?.map((movie: any) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
