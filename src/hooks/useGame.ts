import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constans";
import gamesService, { Game } from "../services/gamesService";

const useGame = (slug: string) => useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => gamesService.getBy(slug),
    staleTime: 1000 * 60 * 5
})

export default useGame;