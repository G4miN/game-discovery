import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../gameQuery/store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const headings = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headings}
    </Heading>
  );
};

export default GameHeading;
