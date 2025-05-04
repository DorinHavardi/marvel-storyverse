export const STALE_TIME = 1000 * 60 * 5; // 5 min

export const queryConfig = {
  staleTime: STALE_TIME,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
};
