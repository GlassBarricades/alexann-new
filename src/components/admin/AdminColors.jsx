import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminColorsForm from "./AdminColorsForm";
import AdminGridCards from "./AdminGridCards";
import AdminHeaderBlock from "./AdminHeaderBlock";
import AdminModal from "./AdminModal";
import { useParams } from "react-router-dom";


const AdminColors = () => {
    const {category, vendor, collection} = useParams()
    const [colors, loading] = useFetchSortedData(
		`/${category}/${vendor}/collections/${collection}/colors`,
		'position'
	)
    return (
        <>
			<AdminModal>
				<AdminColorsForm />
			</AdminModal>
			<AdminHeaderBlock title={`Цвета ${vendor} ${collection}`}/>
            <AdminGridCards data={colors} linkDelete={`/${category}/${vendor}/collections/${collection}/colors/`}/>
		</>
    )
}
export default AdminColors;