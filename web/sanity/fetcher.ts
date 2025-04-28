import { client } from './client';

export const fetcher = async <T>(query: string) => {
  const data = await client.fetch<T>(query);
  return data;
};
