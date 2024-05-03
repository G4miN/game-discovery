import { GameQuery } from '../App';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import gamesService, { Game } from "../services/gamesService";
import { CACHE_KEY_GAMES } from "../constans";
import { FetchResponse } from '../services/api-client';
interface PostQuery {
    pageSize: number;
}
const useGames = (gameQuery: GameQuery, query: PostQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        staleTime: 1 * 60 * 1000,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        queryFn: ({ pageParam = 1 }) => gamesService.get({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize,
                page: pageParam
            }
        }),
    })

export default useGames;