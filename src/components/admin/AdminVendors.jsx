import { Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import AdminHeaderBlock from "./AdminHeaderBlock";
import AdminVendorsForm from "./AdminVendorsForm";
import AdminModal from "./AdminModal";
import AdminGridCards from "./AdminGridCards";
import useFetchSortedData from "../../hooks/useFetchSortedData";

const AdminVendors = () => {
    const { category } = useParams();
    const [vendors, loading] = useFetchSortedData(
		`/${category}/`,
		'position'
	)
    console.log(vendors)

  return (
    <>
      <AdminModal>
        <AdminVendorsForm />
      </AdminModal>
      <AdminHeaderBlock title="Производители" />
      <AdminGridCards data={vendors} category={category}/>
    </>
  );
};
export default AdminVendors;
