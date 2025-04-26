import { groq } from 'next-sanity';

export const getWorldsQuery = groq`
  *[_type == "world"]{
    _id,
    name,
    description,
    movies[]->{
      _id,
      title
    }
  }
`;
