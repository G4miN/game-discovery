import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

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
  if (error || !game) return <p>Error: {error.message}</p>;

  return (
    <>
      <Box padding={5}>
        <Heading mb={5}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailPage;
