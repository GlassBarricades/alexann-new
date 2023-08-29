import { useParams } from "react-router-dom";
import AdminCollectionForm from "./AdminCollectionForm";
import AdminModal from "./AdminModal";
import AdminHeaderBlock from "./AdminHeaderBlock";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminGridCards from "./AdminGridCards";
import { Text, Title } from "@mantine/core";
import useFetchDataOne from "../../hooks/useFetchDataOne";


const AdminCollection = () => {
    const {category, vendor} = useParams()
    const [vendors, loading] = useFetchSortedData(
		`/${category}/${vendor}/collections/`,
		'position'
	)
	const [vendorDetails, loadingVendor] = useFetchDataOne(
		`/${category}/${vendor}/`,
		'position'
	)
	console.log(vendorDetails)

    return (
        <>
			<AdminModal>
				<AdminCollectionForm />
			</AdminModal>
			<AdminHeaderBlock title={`Коллекции ${category} ${vendor}`}/>
            <AdminGridCards data={vendors} linkDelete={`/${category}/${vendor}/collections/`} imageFit="cover" />
			<Title>Описание производителя:</Title>
			<Text>{vendorDetails.descr}</Text>
		</>
    )
}
export default AdminCollection;