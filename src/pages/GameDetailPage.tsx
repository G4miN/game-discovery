import { Box, Heading, SimpleGrid, Spinner, GridItem } from "@chakra-ui/react";
import { useParams, Outlet } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <Spinner alignContent="center" />
      </Box>
    );
  if (error || !game) return <p>Error: {error?.message}</p>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
        <GridItem>
          <Heading mb={5}>{game?.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer slug={game.id!} />
          <GameScreenShot id={game.id!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
