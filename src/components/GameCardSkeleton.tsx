import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={15} overflow="hidden">
      <Skeleton height="180px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
