import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem title="Platforms">
          {game.parent_platforms.map((p) => (
            <Text key={p.platform.id}>{p.platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem title="Genres">
          {game.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem title="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem title="Publisher">
          {game.publishers.map((p, index) => (
            <Text key={index}>{p.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
