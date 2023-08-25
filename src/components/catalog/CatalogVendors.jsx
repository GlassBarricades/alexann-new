import { useParams } from "react-router-dom";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import CatalogGrid from "./CatalogGrid";

const CatalogVendors = () => {
    const { category } = useParams();
    const [vendors, loading] = useFetchSortedData(`/${category}/`, "position");
    return (
        <CatalogGrid data={vendors} />
    )
}
export default CatalogVendors;