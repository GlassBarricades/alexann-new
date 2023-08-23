import { Anchor, createStyles, Navbar, ScrollArea } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const NavBarApp = ({ linksMain, opened, setOpened, admin }) => {
  const { classes } = useStyles();
  const categories = useSelector(state => state.categories.categories)
  console.log(categories)

  const items = linksMain.map((link, indx) => {
    return (
      <Anchor
        component={NavLink}
        to={link.link}
        key={indx}
        className={classes.link}
        onClick={() => setOpened(false)}
      >
        {link.name}
      </Anchor>
    );
  });

  const itemsAdmin = categories.map((item) => {
    return (
      <Anchor
        component={NavLink}
        to={item.link}
        key={item.uuid}
        className={classes.link}
        onClick={() => setOpened(false)}
      >
        {item.name}
      </Anchor>
    );
  });

  return (
    <Navbar
      p="md"
      hiddenBreakpoint={admin ? "sm" : 5000}
      hidden={!opened}
      width={{ md: 220 }}
    >
      <ScrollArea>
        {admin ? (
          <>
          <Anchor
            component={NavLink}
            to={"/admin"}
            className={classes.link}
            onClick={() => setOpened(false)}
          >
            Категории
          </Anchor>
          {itemsAdmin}
          </>
        ) : (
          items
        )}
      </ScrollArea>
    </Navbar>
  );
};
export default NavBarApp;
