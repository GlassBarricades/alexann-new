import { AppShell, useMantineTheme } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { HeaderSimple } from './Header'
import NavBarApp from './NavBarApp'
import { memo, useState } from 'react'

const AdminLayout = memo(() => {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)

	const linksAdmin = [
		{
			link: '/',
			name: 'Главная',
		},

	]

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={<NavBarApp linksMain={linksAdmin} opened={opened} setOpened={setOpened} admin={true} />}
			header={<HeaderSimple linksMain={linksAdmin} opened={opened} setOpened={setOpened} admin={true} />}
		>
			<Outlet />
		</AppShell>
	)
})
export default AdminLayout
