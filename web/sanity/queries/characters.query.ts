import { groq } from 'next-sanity';

export const getCharactersQuery = groq`
  *[_type == "character"]{
    _id,
    name,
    realName,
    description,
    image{
        asset->{
      _id,
      url
      }
    },
    movies[]->{
      _id,
      title
    }
  }
`;
