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
