import { useState } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import { Outlet, useLocation } from 'react-router-dom'
import { HeaderSimple } from './Header'
import NavBarApp from './NavBarApp'

const App = () => {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	const {pathname} = useLocation()

	const linksMain = [
		{
			link: '/',
			name: 'Главная',
		},
		{
			link: '/catalog',
			name: 'Каталог',
		},
		{
			link: '/stock',
			name: 'Акции',
		},
		{
			link: '/contacts',
			name: 'Контакты',
		},
		{
			link: '/admin',
			name: 'Админка',
		},

	]

	return (
		<AppShell
		padding={pathname === "/" ? 0 : undefined}
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
				
			}}
			navbarOffsetBreakpoint={5000}
			asideOffsetBreakpoint='sm'
			navbar={<NavBarApp opened={opened} setOpened={setOpened} linksMain={linksMain} admin={false}/>}
			header={<HeaderSimple opened={opened} setOpened={setOpened} linksMain={linksMain} admin={false}/>}
		>
			<Outlet />
		</AppShell>
	)
}
export default App
