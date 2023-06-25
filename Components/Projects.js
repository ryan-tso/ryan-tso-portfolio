import {useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Box, IconButton, Stack, useTheme} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Slide, Fade} from 'react-awesome-reveal';
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
    gitHubUrl: 'https://github.com/ryan-tso/AWExpress',
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
    description: "This portfolio was planned and designed in Adobe Photoshop with a mobile-first approach, and is built " +
      "with React, Next.js and Redux with Material UI for styling.  Nav bar logic and smooth page navigation was created " +
      "using Redux along with a custom IntersectionObserver hook. Next.js was used to future-proof this site if ever it " +
      "needed to be expanded with greater functionality."
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

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  overflowX: 'scroll',
  overFlowY: 'hidden',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}

const arrowStyle = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  transform: 'translate(0, -50%)',
  alignItems: 'center',
  justifyContent: 'center',
  width: {xs:'20px', sm: '40px'},
  height: '60px',
  zIndex: 1,
  pointerEvents: 'none',
  color: 'rgba(255,255,255,0.7)',
  backgroundColor: 'rgba(0,0,0,0.3)',
  borderRadius: '3px'
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
          <Box sx={{...arrowStyle, left: '2%'}}>
            <KeyboardArrowLeftIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <Box sx={{...arrowStyle, right: '2%'}}>
            <KeyboardArrowRightIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <Box ref={ref} {...events} sx={cardContainerStyle}>
            <Box sx={{minWidth: {xs: '10%', sm:`calc(50% - ${CARD_WIDTH}/2)`}}}/>
            <Stack direction='row' spacing={8} sx={{pt: '2%', pb: '2%'}}>
              {
                PROJECTS.map((item, index) => (
                  <Fade key={index}>
                    <ProjectCard
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      picUrl={item.picUrl}
                      gitHubUrl={item.gitHubUrl ?? null}
                    />
                  </Fade>
                ))
              }
            </Stack>
            <Box sx={{minWidth: {xs: '10%', sm:`calc(50% - ${CARD_WIDTH}/2)`}}}/>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}