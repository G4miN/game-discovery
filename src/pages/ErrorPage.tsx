import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops ...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
