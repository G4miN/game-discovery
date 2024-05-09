import { ReactNode, useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(true);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const shortedText = !expand
    ? children?.toString().slice(0, 100) + "..."
    : children;

  return (
    <>
      <Text>
        {shortedText}
        <Button
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
