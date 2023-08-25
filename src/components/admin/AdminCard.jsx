import { Card, Group, Text, Badge, Image } from "@mantine/core"
import { Link } from "react-router-dom"

const AdminCard = ({item, imageFit}) => {
  return (
		<Card shadow='sm' padding='xs' component={Link} to={item.link}>
			<Card.Section>
				<Image fit={imageFit} src={item.image} height={160} alt={item.name} />
			</Card.Section>

			<Group position='apart' align='end'>
				<Text weight={500} size='md' mt='md'>
					{item.name}
				</Text>
				<Badge variant='outline' align='center'>
					{item.position}
				</Badge>
			</Group>
		</Card>
	)
}

export default AdminCard