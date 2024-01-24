import { useQuery } from '@tanstack/react-query';
import { GET_ITEM_FROM_API } from '@/common/config/api'
import { Article } from '@/common/types/articles';

const useArticleQuery = (id: number) => {
  const result = useQuery({
    queryKey: ['article'],
    queryFn: async () => {
      const response = await fetch(GET_ITEM_FROM_API(id));

      if (!response.ok) {
        throw new Error('something is wrong, try again later');
      }

      const articleData = (await response.json()) as Article;

      return articleData;
    },
  });
  return result;
};

export default useArticleQuery;