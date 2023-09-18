import { SimpleGrid, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import useFetchDataOne from "../../hooks/useFetchDataOne";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import CatalogGrid from "./CatalogGrid";
import AdminDetailsCollection from "../admin/AdminDetailsCollection";

const CatalogColors = () => {
  const { category, vendor, collection } = useParams();
  const [collectionData, loading] = useFetchDataOne(
    `/${category}/${vendor}/collections/${collection}`,
    "position"
  );
  const [colors, loadingColors] = useFetchSortedData(
    `/${category}/${vendor}/collections/${collection}/colors`,
    "position"
  );
  console.log(colors);
  console.log(collectionData);
  return (
    <>
      <Title mb="md">{collectionData.name}</Title>
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: "md", cols: 1, spacing: "md" }]}
      >
        <CatalogGrid data={colors} variant="colors"/>
        <AdminDetailsCollection collectionDetails={collectionData} />
      </SimpleGrid>
    </>
  );
};
export default CatalogColors;
