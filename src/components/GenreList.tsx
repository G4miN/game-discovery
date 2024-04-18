import useGenres, { Genre } from "../hooks/useGenres";
import { List, ListItem, HStack, Image, Text, Button } from "@chakra-ui/react";
import getCroppeedImageUrl from "../services/image-url";
import AsideSkeleton from "./AsideSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <List>
      {error && skeletons.map((skeleton) => <AsideSkeleton key={skeleton} />)}
      {isLoading &&
        skeletons.map((skeleton) => <AsideSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppeedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
