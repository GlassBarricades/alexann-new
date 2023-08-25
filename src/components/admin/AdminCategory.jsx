import useFetchSortedData from '../../hooks/useFetchSortedData'
import AdminTable from './AdminTable'
import AdminCategoryForm from './AdminCategoryForm'
import AdminModal from './AdminModal'
import AdminHeaderBlock from './AdminHeaderBlock'
import AdminRow from './AdminRow'
import { useParams } from 'react-router-dom'

const AdminCategory = () => {
	const [categories, loading] = useFetchSortedData(
		`/category/`,
		'position'
	)
		const rows = categories.map(element => (
			<AdminRow
				key={element.uuid}
				element={element}
				deleteLink={`/category/${element.link}`}
			/>
		))

	return (
		<>
			<AdminModal>
				<AdminCategoryForm />
			</AdminModal>
			<AdminHeaderBlock title='Категории каталога'/>
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
		</>
	)
}
export default AdminCategory