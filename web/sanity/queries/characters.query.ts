import { groq } from 'next-sanity';

export const getCharactersQuery = groq`
  *[_type == "character"]{
    _id,
    name,
    description,
    photo,
    movies[]->{
      _id,
      title
    }
  }
`;
