import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "main" "aside"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bgColor="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bgColor="dodgerblue">
          main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
