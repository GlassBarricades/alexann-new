import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminColorsForm from "./AdminColorsForm";
import AdminHeaderBlock from "./AdminHeaderBlock";
import AdminModal from "./AdminModal";
import { useParams } from "react-router-dom";
import AdminRow from "./AdminRow";
import AdminTable from "./AdminTable";
import useFetchDataOne from "../../hooks/useFetchDataOne";
import { SimpleGrid } from "@mantine/core";
import AdminDetailsCollection from "./AdminDetailsCollection";

const AdminColors = () => {
  const { category, vendor, collection } = useParams();
  const [colors, loading] = useFetchSortedData(
    `/${category}/${vendor}/collections/${collection}/colors`,
    "position"
  );
  const [collectionDetails, loadingCollection] = useFetchDataOne(
    `/${category}/${vendor}/collections/${collection}/`,
    "position"
  );
  console.log(collectionDetails);

  const rows = colors.map((element) => (
    <AdminRow
      key={element.uuid}
      element={element}
      deleteLink={`/${category}/${vendor}/collections/${collection}/colors/${element.link}`}
      variant="colors"
    />
  ));

  return (
    <>
      <AdminModal>
        <AdminColorsForm />
      </AdminModal>
      <AdminHeaderBlock title={`Цвета ${vendor} ${collection}`} />
      <SimpleGrid cols={2} breakpoints={[
        { maxWidth: 'md', cols: 1, spacing: 'md' },
      ]}>
        <AdminDetailsCollection collectionDetails={collectionDetails} />
        <AdminTable
          rows={rows}
          columnArray={[
            "Сортировка",
            "Название",
            "Картинки",
            "Ссылка",
            "Настройки",
          ]}
          loading={loading}
        />
      </SimpleGrid>
    </>
  );
};
export default AdminColors;
