import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformService from '../services/platformService';
import ms from 'ms';
import { CACHE_KEY_PLATFORMS } from '../constans';

const usePlatforms = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms