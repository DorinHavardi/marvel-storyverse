export const getAllMoviesQuery = `
  *[_type == "movie"]{
    _id,
    title,
    poster,
    whereToWatch
  }
`;
