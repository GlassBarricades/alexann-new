import { Image, Group, Spoiler, Text } from '@mantine/core'
import AdminPanelSettings from './AdminPanelSettings'
import { edited } from '../../store/editSlice'
import { useDispatch } from 'react-redux'
import { memo } from 'react'

const AdminRow = memo(({ element, deleteLink}) => {
	const dispatch = useDispatch()
	return (
		<tr>
			<td>{element.position}</td>
			<td>{element.name}</td>
			<td>
				<Image width={50} src={element.image} alt={element.name} />
			</td>
			<td>{`/${element.link}`}</td>
			<td>
				<AdminPanelSettings
					element={element}
					deleteLink={deleteLink}
					handleEdit={dispatch(edited)}
				/>
			</td>
		</tr>
	)
})
export default AdminRow
