import { Card, Text, Image, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const CatalogCard = ({ element, variant }) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component={Link}
      to={element.link}
      style={{ maxHeight: 300 }}
    >
      <Card.Section>
        <Image
          src={element.image}
          height={180}
          alt={element.link}
          fit={variant === "colors" ? "cover" : "contain"}
        />
      </Card.Section>

      {variant === "colors" ? (
        <Group gap="xs" justify="flex-end">
          <Text>Цена:</Text>
          <Text size="xl" fw={700}>{element.price}</Text>
          <Text> руб/м<sup>2</sup></Text>
        </Group>
      ) : undefined}

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
