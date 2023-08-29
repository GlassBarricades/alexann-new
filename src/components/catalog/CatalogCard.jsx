import { Card, Text, Image } from "@mantine/core";
import { Link } from "react-router-dom";

const CatalogCard = ({element}) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component={Link}
      to={element.link}
      style={{maxHeight: 300}}
    >
      <Card.Section>
        <Image
          src={element.image}
          height={180}
          alt={element.link}
        />
      </Card.Section>

      <Text weight={600} size="xl" mt="md">
        {element.name}
      </Text>

      {/* <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a
        fraud, trust us
      </Text> */}
    </Card>
  );
};
export default CatalogCard;
