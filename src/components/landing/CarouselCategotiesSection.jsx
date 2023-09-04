import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  useMantineTheme,
  rem,
  Container,
  BackgroundImage,
  Center,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(240),
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    color: theme.white,
    fontSize: rem(32),
    textShadow: "4px 3px 2px #000",
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Card({ image, title, link }) {
  const { classes } = useStyles();

  return (
    <Paper
    component={Link}
    to={`/catalog/${link}`}
      shadow="md"
      radius="md"
      className={classes.card}
    >
      <BackgroundImage h={"100%"} src={image} radius="sm" className={classes.inner}>
        <Center p="md">
          <Text color="#fff" className={classes.title}>{title}</Text>
        </Center>
      </BackgroundImage>
    </Paper>
  );
}

const CarouselCategotiesSection = () => {
  const categories = useSelector((state) => state.categories.categories);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = categories.map((item) => (
    <Carousel.Slide key={item.uuid}>
      <Card image={item.image} title={item.name} link={item.link} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl" mt="md" mb="md">
      <Carousel
        slideSize="25%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        align="start"
        slideGap="md"
        loop
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default CarouselCategotiesSection;
