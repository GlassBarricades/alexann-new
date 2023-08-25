import { Group, Image, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import useFetchDataOne from "../../hooks/useFetchDataOne";

const CatalogColor = () => {
  const { category, vendor, collection, color } = useParams();
  const [colorData, loading] = useFetchDataOne(
    `/${category}/${vendor}/collections/${collection}/colors/${color}`,
    "position"
  );
  console.log(colorData);
  return (
    <>
      <Title mb="md">{colorData.name}</Title>
      <Group>
        <Image height={500} width={650} src={colorData.image} alt={colorData.name} />
        <Image height={500} width={650} src={colorData.image2} alt={colorData.name} />
        <Image height={500} width={650} src={colorData.image3} alt={colorData.name} />
      </Group>
    </>
  );
};
export default CatalogColor;
