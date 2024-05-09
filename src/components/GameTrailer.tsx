import { SimpleGrid } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import getCroppeedImageUrl from "../services/image-url";

interface Props {
  slug: string | number;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: movie, isLoading, error } = useMovie(slug!);

  if (isLoading) return <p>Loading...</p>;
  if (error || !movie) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {movie?.results.map((x, index) => (
          <video
            key={index}
            src={x.data[480]}
            poster={getCroppeedImageUrl(x.preview)}
            controls
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameTrailer;
