import { SimpleGrid } from "@mantine/core";
import CatalogCard from "./CatalogCard";

const CatalogGrid = ({data}) => {

  return (
    <SimpleGrid
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {data.map((item) => {
        return <CatalogCard key={item.uuid} element={item} />;
      })}
    </SimpleGrid>
  );
};
export default CatalogGrid;
