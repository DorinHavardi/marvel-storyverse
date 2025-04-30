import { groq } from 'next-sanity';

export const getSagasQuery = groq`
  *[_type == "saga"]{
    _id,
    name,
    description,
    
    movies[]{
      order,
      movie->{
        _id,
        title,
        releaseDate,
        poster
      }
    },

    phases[]->{
      _id,
      name,
      description,
      movies[]->{
        _id,
        title,
        releaseDate,
        poster
      }
    }
  }
`;
