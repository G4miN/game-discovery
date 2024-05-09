import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
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
      <Box padding={5}>
        <Heading mb={5}>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
        <GameTrailer slug={game.id!} />
        <GameScreenShot id={game.id!} />
      </Box>
    </>
  );
};

export default GameDetailPage;
