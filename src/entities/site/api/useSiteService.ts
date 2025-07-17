import { useQuery } from '@tanstack/react-query';
import queryOptions from '@Src/entities/site/api/queries';

/**
 * Find Gnb
 * @param lazy
 * @returns {UseQueryResult<GnbGetRes, DefaultError>}
 */
export const useFindGnbQuery = (lazy?: boolean) =>
  useQuery({
    ...queryOptions.findGnb(),
    enabled: !lazy,
  });
