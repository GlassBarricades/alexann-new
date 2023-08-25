import { useParams } from "react-router-dom";
import AdminCollectionForm from "./AdminCollectionForm";
import AdminModal from "./AdminModal";
import AdminHeaderBlock from "./AdminHeaderBlock";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminGridCards from "./AdminGridCards";


const AdminCollection = () => {
    const {category, vendor} = useParams()
    const [vendors, loading] = useFetchSortedData(
		`/${category}/${vendor}/collections/`,
		'position'
	)

    return (
        <>
			<AdminModal>
				<AdminCollectionForm />
			</AdminModal>
			<AdminHeaderBlock title={`Коллекции ${category} ${vendor}`}/>
            <AdminGridCards data={vendors} linkDelete={`/${category}/${vendor}/collections/`} imageFit="cover" />
		</>
    )
}
export default AdminCollection;