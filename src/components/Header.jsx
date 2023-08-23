import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	MediaQuery,
	useMantineTheme,
	Title,
	Anchor
} from '@mantine/core'
import { ThemeChange } from './Theme-change'
import { NavLink } from 'react-router-dom'

const useStyles = createStyles(theme => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({
				variant: 'light',
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
		},
	},
}))

export function HeaderSimple({ opened, setOpened, linksMain}) {
	const theme = useMantineTheme()
	const { classes, cx } = useStyles()

	const items = linksMain.map((link, indx) => {
		return (
			<Anchor
				component={NavLink}
				to={link.link}
				key={indx}
				className={classes.link}
			>
				{link.name}
			</Anchor>
		)
	})

	return (
		<Header height={{ base: 50, md: 70 }} p='md'>
			<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
				<MediaQuery largerThan='md' styles={{ display: 'none' }}>
					<Burger
					opened={opened}
					onClick={() => setOpened((o) => !o)}
						size='sm'
						color={theme.colors.gray[6]}
						mr='xl'
					/>
				</MediaQuery>

				<Container className={classes.header}>
					<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
						<Title order={2}>AlexAnn</Title>
					</MediaQuery>
					<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
						<Group>{items}</Group>
					</MediaQuery>
					<Group spacing='md' align='center'>
						<ThemeChange />
					</Group>
				</Container>
			</div>
		</Header>
	)
}
