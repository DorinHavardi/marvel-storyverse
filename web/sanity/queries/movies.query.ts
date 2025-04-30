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
    whereToWatch
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
    poster
  }
`;
