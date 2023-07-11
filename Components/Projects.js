import {useRef, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Box, Stack, useTheme} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Slide} from 'react-awesome-reveal';
import {useIsElementVisible} from "../Hooks/useIsElementVisible";
import {setScrollLocation} from "../redux/features/navigation/scroll-location";
import {sectionLayout} from "../pages/index";
import ProjectCard from './ProjectCard';
import { ScrollSync, ScrollSyncNode } from 'scroll-sync-react';
import DragScroll from './utilities/DragScroll';


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
  },
  '&:hover': {
    cursor: 'grab'
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

const EndMargin = () => (
  <Box sx={{minWidth: '50vw'}} />
)

export default function Projects({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const nearestCardRef = useRef(null);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Projects'))
  }, [isElementVisible])

  useEffect(() => {
    scrollToCard();
  }, [])

  const scrollToCard = () => setTimeout(() => {
    if (ref.current && nearestCardRef.current) {
      const centerCoord = nearestCardRef.current.offsetLeft + nearestCardRef.current.offsetWidth/2 - ref.current.clientWidth/2
      ref.current.scrollTo({top: 0, left: centerCoord, behavior: "smooth"});
    }
  }, 17)

  return (
    <Box sx={{...sectionLayout, background: 'linear-gradient(90deg, #cfcfcf 0%, #ebebeb 30%, #ebebeb 70%, #cfcfcf 100%)'}}>

        <Box>
          <Box sx={{...arrowStyle, left: '2%'}}>
            <KeyboardArrowLeftIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <Box sx={{...arrowStyle, right: '2%'}}>
            <KeyboardArrowRightIcon sx={{fontSize: {xs: '50px', sm: '70px'}}}/>
          </Box>
          <Slide direction="right" triggerOnce>
          <ScrollSync>
            <DragScroll speedScale={1.5} dragEndCallback={scrollToCard}>
              <ScrollSyncNode group="a">
                  <Box ref={ref} sx={cardContainerStyle}>
                    <Stack direction='row' spacing='2.5%' sx={{pt: '10px', pb: '10px', mt: '20px', mb: '20px'}}>
                      <EndMargin />
                      {
                        data.map((item, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              ref={nearestCardRef}
                              cardId={index}
                              title={item.title}
                              subtitle={item.subtitle}
                              description={item.description}
                              picUrl={item.picUrl}
                              gitHubUrl={item.gitHubUrl ?? null}
                              demoUrl={item.demoUrl ?? null}
                            />
                          )
                        })
                      }
                      <EndMargin />
                    </Stack>
                  </Box>
              </ScrollSyncNode>
            </DragScroll>
          </ScrollSync>
          </Slide>
        </Box>

    </Box>
  );
}