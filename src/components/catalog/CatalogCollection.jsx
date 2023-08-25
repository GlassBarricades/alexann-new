import { useParams } from "react-router-dom";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import CatalogGrid from "./CatalogGrid";

const CatalogCollection = () => {
    const {category, vendor} = useParams()
    const [collection, loading] = useFetchSortedData(`/${category}/${vendor}/collections/`, "position");
    console.log(collection)
    return (
        <CatalogGrid data={collection} />
    )
}
export default CatalogCollection;