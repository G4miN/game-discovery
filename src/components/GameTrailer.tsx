import useMovie from "../hooks/useMovie";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: movie, isLoading, error } = useMovie(slug!);

  if (isLoading) return <p>Loading...</p>;
  if (error || !movie) throw error;

  return (
    <>
      {movie?.results.map((x, index) => (
        <video key={index} src={x.data[480]} poster={x.preview} controls />
      ))}
    </>
  );
};

export default GameTrailer;
