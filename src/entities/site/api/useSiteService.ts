import { useQuery } from '@tanstack/react-query';
import queryOptions from '@Src/entities/site/api/queries';

/**
 * Find Gnb
 * @param lazy
 */
export const useFindGnbQuery = (lazy?: boolean) =>
  useQuery({
    ...queryOptions.findGnb(),
    enabled: !lazy,
  });
