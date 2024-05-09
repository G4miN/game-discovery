import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppeedImageUrl from "../services/image-url";
interface Props {
  id: number;
}
const GameScreenShot = ({ id }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(id);
  if (isLoading) return <p>Loading...</p>;
  if (error || !screenshots) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {screenshots.results.map((sc) => (
          <Image key={sc.id} src={getCroppeedImageUrl(sc.image)} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShot;
