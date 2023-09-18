import { SimpleGrid } from "@mantine/core";
import CatalogCard from "./CatalogCard";

const CatalogGrid = ({data, variant}) => {

  return (
    <SimpleGrid
      cols={variant === "colors" ? 3 : 5}
      spacing="lg"
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 2, spacing: "sm" },
      ]}
    >
      {data.map((item) => {
        return <CatalogCard key={item.uuid} element={item} variant={variant}/>;
      })}
    </SimpleGrid>
  );
};
export default CatalogGrid;
