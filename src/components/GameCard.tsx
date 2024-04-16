import { Game, Platform } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppeedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card width="230px" borderRadius={15} overflow="hidden">
        <Image src={getCroppeedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="1xl" size="md">
            {game.name}
          </Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
