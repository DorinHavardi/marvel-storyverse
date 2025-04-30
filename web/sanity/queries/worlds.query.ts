import { groq } from 'next-sanity';

export const getWorldsQuery = groq`
*[_type == "world"]{
  _id,
  name,
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

export const getWorldByIdQuery = (id: string) => `
  *[_type == "world" && _id == "${id}"][0]{
    _id,
    name,
    description,
    longDescription,
    image,
    movies[]->{
      _id,
      title,
      synopsis,
      poster
    }
  }
`;
