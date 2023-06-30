import {useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
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
import DragScroll from './utilities/DragScroll';
import { ScrollSync, ScrollSyncNode } from 'scroll-sync-react';


const CARD_WIDTH = '30vw'

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

const backgroundStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
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


export default function Projects({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const {events} = useDraggable(ref);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});
  const selection = useSelector((state) => state.scrollLocation.value)

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Projects'))
  }, [isElementVisible])


  return (
    <Box sx={sectionLayout}>
      <Slide direction="right" triggerOnce>
        <Box sx={{backgroundColor: theme.palette.projects.background}}>
          <Box
            className={selection === "Projects" ? "animate__animated animate__pulse animate__infinite infinite" : ""}
            sx={{
              ...backgroundStyle,
              '--animate-duration': '5s',
              clipPath: 'polygon(40% 0, 90% 0, 30% 100%, -20% 100%)',
              backgroundColor: theme.palette.projects.background2
            }}
          />
          <Box
            className={selection === "Projects" ? "animate__animated animate__pulse animate__infinite infinite animate__delay-2s" : ""}
            sx={{
              ...backgroundStyle,
              '--animate-duration': '5s',
              clipPath: 'polygon(120% 0, 140% 0, 90% 100%, 70% 100%)',
              backgroundColor: theme.palette.projects.background3
            }}
          />
          <Box sx={{...arrowStyle, left: '2%'}}>
            <KeyboardArrowLeftIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <Box sx={{...arrowStyle, right: '2%'}}>
            <KeyboardArrowRightIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <ScrollSync>
            <ScrollSyncNode group="a">
            <Box ref={ref} {...events} sx={cardContainerStyle}>
              <Box sx={{minWidth: {xs: '10%', sm:`calc(50% - ${CARD_WIDTH}/2)`}}}/>
              <Stack direction='row' spacing={10}>
                {
                  data.map((item, index) => (
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
              <Box sx={{minWidth: {xs: '10%', sm:`calc(50% - ${CARD_WIDTH}/2)`}}}/>
            </Box>
            </ScrollSyncNode>
          </ScrollSync>
        </Box>
      </Slide>
    </Box>
  );
}