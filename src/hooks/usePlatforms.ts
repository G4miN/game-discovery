import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformService from '../services/platformService';
import { CACHE_KEY_PLATFORMS } from '../constans';

const usePlatforms = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: platforms
})

export default usePlatforms