import { Movie } from '@/types/movies.types';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-4 bg-white">
      {movie?.poster && (
        <Image
          src={movie?.poster?.asset?.url || '/placeholder.jpg'}
          alt={movie?.title?.en}
          width={300}
          height={450}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{movie?.title?.en}</h2>
        <p className="text-gray-600 text-sm">{movie?.synopsis?.en}</p>
        <div className="text-xs text-gray-400 mt-2">
          Release: {new Date(movie?.releaseDate).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};
