import useGenres from "../hooks/useGenres";
import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import getCroppeedImageUrl from "../services/image-url";
const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppeedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
