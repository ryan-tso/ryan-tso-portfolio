import {useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Box, Stack, useTheme} from "@mui/material";
import {Slide} from 'react-awesome-reveal';
import {useDraggable} from 'react-use-draggable-scroll';
import {useIsElementVisible} from "../Hooks/useIsElementVisible";
import {setScrollLocation} from "../redux/features/navigation/scroll-location";
import AWExpressPic from "../public/AWExpressPic.jpg";
import PortfolioPic from "../public/PortfolioPic.jpg";
import ProgrammingPic from "../public/ProgrammingPic.jpg";
import {sectionLayout} from "../pages/index";
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'AWExpress',
    subtitle: 'A full-stack AWS-based marketplace',
    picUrl: `url(${AWExpressPic.src})`,
    description: "AWExpress is a full-stack academic project developed for Amazon as an internal marketplace for employees. " +
      "The frontend is built with React, Next.js, Redux, and Material UI, while the backend RESTful API server was " +
      "constructed using serverless cloud technology such as AWS Lambda and AWS API Gateway.  Users are able to login " +
      "using Google authentication with a Lambda Authorizer to browse, add to cart, and purchase products, as well as " +
      "list their own items for sale."
  },
  {
    title: 'Portfolio',
    subtitle: 'A website about me',
    picUrl: `url(${PortfolioPic.src})`,
    gitHubUrl: 'https://github.com/ryan-tso/ryan-tso-portfolio',
    description: "This portfolio was planned and designed in Adobe Photoshop, and is built with React, Next.js and Redux " +
      "with Material UI for styling.  Nav bar logic and smooth page navigation was created using Redux along with a custom " +
      "IntersectionObserver hook. Next.js was used to future-proof this site if ever it needed to be expanded with " +
      "greater functionality.",
  },
  {
    title: "More to Come!",
    subtitle: "Striving for growth",
    picUrl: `url(${ProgrammingPic.src})`,
    description: "I hope to work with you to develop great products and effective solutions for you or your customers' " +
      "needs.  Let us collaborate together and make the world a little bit easier!"
  }
]

const CARD_WIDTH = '50vh'
const CARD_GUTTERS = '50px'

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}


export default function Projects() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const {events} = useDraggable(ref);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Projects'))
  }, [isElementVisible])


  return (
    <Box sx={sectionLayout}>
      <Slide direction="right" triggerOnce>
        <Box sx={{background: 'linear-gradient(175deg, #151626 40%, #252c4e 100%)'}}>
          <Box ref={ref} {...events} sx={cardContainerStyle}>
            <Box sx={{minWidth: `calc(50% - ${CARD_WIDTH}/2 - ${CARD_GUTTERS})`}}/>
            <Stack direction='row' sx={{pt: '2%', pb: '2%'}}>
              {
                PROJECTS.map((item, index) => (
                  <ProjectCard
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    picUrl={item.picUrl}
                    gitHubUrl={item.gitHubUrl ?? null}
                  />
                ))
              }
            </Stack>
            <Box sx={{minWidth: `calc(50% - ${CARD_WIDTH}/2 - ${CARD_GUTTERS})`}}/>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}