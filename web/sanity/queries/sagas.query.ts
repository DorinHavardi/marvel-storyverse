import { groq } from 'next-sanity';

export const getSagasQuery = groq`
  *[_type == "saga"]{
    _id,
    name,
    description,
    movies[]->{
      _id,
      title
    }
  }
`;
