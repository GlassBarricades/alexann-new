import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminColorsForm from "./AdminColorsForm";
import AdminGridCards from "./AdminGridCards";
import AdminHeaderBlock from "./AdminHeaderBlock";
import AdminModal from "./AdminModal";
import { useParams } from "react-router-dom";
import AdminRow from "./AdminRow";
import AdminTable from "./AdminTable";


const AdminColors = () => {
    const {category, vendor, collection} = useParams()
    const [colors, loading] = useFetchSortedData(
		`/${category}/${vendor}/collections/${collection}/colors`,
		'position'
	)

	const rows = colors.map(element => (
		<AdminRow
			key={element.uuid}
			element={element}
			deleteLink={`/${category}/${vendor}/collections/${collection}/colors/${element.link}`}
			variant='colors'
		/>
	))

    return (
			<>
				<AdminModal>
					<AdminColorsForm />
				</AdminModal>
				<AdminHeaderBlock title={`Цвета ${vendor} ${collection}`} />
				<AdminTable
					rows={rows}
					columnArray={[
						'Сортировка',
						'Название',
						'Картинки',
						'Ссылка',
						'Настройки',
					]}
					loading={loading}
				/>
				<AdminGridCards
					data={colors}
					linkDelete={`/${category}/${vendor}/collections/${collection}/colors/`}
					imageFit='cover'
				/>
			</>
		)
}
export default AdminColors;