import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constans";
import useGameQueryStore from "../gameQuery/store";
import { FetchResponse } from '../services/api-client';
import gamesService, { Game } from "../services/gamesService";
interface PostQuery {
    pageSize: number;
}

const useGames = (query: PostQuery) => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        queryFn: ({ pageParam = 1 }) => gamesService.get({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize,
                page: pageParam
            }
        }),
    })
}

export default useGames;