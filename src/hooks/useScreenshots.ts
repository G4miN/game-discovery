import { useQuery } from "@tanstack/react-query"
import { CACHE_KEY_SCREENSHOT } from "../constans";
import screenshotsService from "../services/screenshotsService";

const useScreenshots = (id: number) => {
    return useQuery({
        queryKey: [CACHE_KEY_SCREENSHOT, id],
        queryFn: () => screenshotsService.getAllBy(id),
    })
}

export default useScreenshots;