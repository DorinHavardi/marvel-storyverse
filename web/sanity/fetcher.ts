import { client } from './client';

export const fetcher = async <T>(query: string) => {
  return await client.fetch<T>(query);
};
