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
import AdminCard from "./AdminCard";

const AdminGridCards = ({ data, linkDelete, imageFit }) => {
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
              <AdminCard key={item.uuid} item={item} imageFit={imageFit} />
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
