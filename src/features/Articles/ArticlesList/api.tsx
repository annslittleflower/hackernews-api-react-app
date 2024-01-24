import { useQuery } from '@tanstack/react-query';
import {BEST_STORIES_API, GET_ITEM_FROM_API} from '@/common/config/api'

export type Articles = number[]

export type Article = {
  by: string
  descendants: number,
  id: number,
  time: number,
  title: string,
  url: string
}

const useArticlesQuery = () => {
  const result = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const response = await fetch(BEST_STORIES_API);

      if (!response.ok) {
        throw new Error('something is wrong, try again later');
      }

      const articlesData = (await response.json()) as Articles;

      const topArticlesIds = articlesData.slice(0, 9)

      // TODO find out how to do this code better, now has potential errors, but still works cool in parallel 
      const topArticlesRequests = await Promise.all(topArticlesIds.map(async id => await fetch(GET_ITEM_FROM_API(id))))
      
      const topArticlesData = await Promise.all(topArticlesRequests.map(async r => await r.json()))

      return topArticlesData;
    },
  });
  return result;
};

export default useArticlesQuery;