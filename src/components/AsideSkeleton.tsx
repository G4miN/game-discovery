import { SkeletonText } from "@chakra-ui/react";

const AsideSkeleton = () => {
  return (
    <SkeletonText
      borderRadius={15}
      skeletonHeight="5"
      mt="4"
      noOfLines={1}
      spacing="2"
    />
  );
};

export default AsideSkeleton;
