import { groq } from 'next-sanity';

export const getMoviesQuery = groq`
  *[_type == "movie"]{
    _id,
    title,
    type,
    releaseDate,
    timelineDate,
    synopsis,
    poster,
    whereToWatch,
    saga->{ _id, name },
    phase->{ _id, name },
    characters[]->{ _id, name, image }
  }
`;

export const getMovieByIdQuery = (id: string) => groq`
  *[_type == "movie" && _id == "${id}"][0]{
    _id,
    title,
    type,
    releaseDate,
    timelineDate,
    synopsis,
    poster,
    whereToWatch,
    saga->{ _id, name },
    phase->{ _id, name },
    characters[]->{ _id, name, image }
  }
`;
