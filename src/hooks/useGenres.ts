import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genresService from "../services/genresService";
import { CACHE_KEY_GENRES } from "../constans";

const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genresService.get,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, results: genres },
})
export default useGenres