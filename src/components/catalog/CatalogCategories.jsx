import { SimpleGrid } from "@mantine/core";
import { useSelector } from "react-redux";
import CatalogCard from "./CatalogCard";

const CatalogCategories = () => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
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
        {categories.map(item => {
            return <CatalogCard key={item.uuid} element={item} />
        })}
    </SimpleGrid>
  );
};
export default CatalogCategories;
