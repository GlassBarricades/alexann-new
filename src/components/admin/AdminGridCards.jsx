import {
  SimpleGrid,
  Card,
  Text,
  Image,
  Badge,
  Group,
  Stack,
} from "@mantine/core";
import { Link } from "react-router-dom";
import AdminPanelSettings from "./AdminPanelSettings";

const AdminGridCards = ({ data, linkDelete }) => {
  return (
    <SimpleGrid
      cols={5}
      mt="md"
      spacing="xl"
      breakpoints={[
        { maxWidth: "xl", cols: 5, spacing: "lg" },
        { maxWidth: "lg", cols: 4, spacing: "lg" },
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 3, spacing: "sm" },
        { maxWidth: "xs", cols: 2, spacing: "sm" },
      ]}
    >
      {data.map((item) => {
        return (
            <Stack spacing={0}  key={item.uuid}>
            <Card shadow="sm" padding="xs" component={Link} to={item.link}>
              <Card.Section>
                <Image fit="contain" src={item.image} height={160} alt={item.name} />
              </Card.Section>

              <Group position="apart" align="end">
                <Text weight={500} size="md" mt="md">
                  {item.name}
                </Text>
                <Badge
                  variant="outline"
                  align="center"
                >
                  {item.position}
                </Badge>
              </Group>
            </Card>
            <AdminPanelSettings 
            element={item}
            deleteLink={`${linkDelete}${item.link}`}
        />
        </Stack>
        );
      })}
    </SimpleGrid>
  );
};
export default AdminGridCards;
