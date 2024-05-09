import { useQuery } from "@tanstack/react-query"
import moviesService from "../services/moviesService"
import { CACHE_KEY_MOVIES } from "../constans"

const useMovie = (slug: string) => useQuery({
    queryKey: [CACHE_KEY_MOVIES, slug],
    queryFn: () => moviesService.getAllBy(slug),
    staleTime: 1000 * 60 * 5
})

export default useMovie;