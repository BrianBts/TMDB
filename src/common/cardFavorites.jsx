import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const cardFavorites = ({ image, title, description, films }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default cardFavorites;
