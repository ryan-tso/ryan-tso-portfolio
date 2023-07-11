import {Box, List, ListItemText, Stack, Typography, MobileStepper, useTheme, IconButton, Slide as MuiSlide, Fade} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {sectionInnerLayout, sectionLayout} from "../pages/index";
import {Slide} from "react-awesome-reveal";
import {useEffect, useRef, useState} from "react";
import {useIsElementVisible} from "../Hooks/useIsElementVisible";
import {useDispatch, useSelector} from "react-redux";
import {setScrollLocation} from "../redux/features/navigation/scroll-location";
import ScrollIntoView from "react-scroll-into-view";
import 'animate.css';


const Slider = props => {
  return (
    <MuiSlide
      direction={props.direction ?? 'right'}
      in={props.in ?? false}
      container={props.container ?? null}
      easing={{enter: 'cubic-bezier(.11, .3, .29, 1.15)', exit: 'cubic-bezier(.45, .07, .65, .37)'}}
      timeout={props.timeout ?? 600}>
      {props.children}
    </MuiSlide>
  )
}

export default function Experience({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const isElementVisible = useIsElementVisible(containerRef.current, {rootMargin: theme.rootMargins.scrollInViewSection});
  const selection = useSelector((state) => state.scrollLocation.value)

  useEffect(() => {
    if (isElementVisible) {
      dispatch(setScrollLocation('Experience'))
      if (!seen) setSeen(true);
    }
  }, [isElementVisible])

  const [seen, setSeen] = useState(false);
  const [page, setPage] = useState(0);
  const [elementIn, setElementIn] = useState(true);

  const duration = 600;

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundImage: `url(${data[page].picture})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    transition: 'background-image 0.8s ease'
  }

  const titleContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    pt: '5px',
    pb: '5px',
    pl: '20px',
    pr: '20px'
  }

  const descriptionContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    p: '20px',
    borderRadius: '3px',
    backgroundColor: theme.palette.experience.background[page]
  }

  const companyNameStyle = {
    fontSize: {xs: '1.4rem', sm:'1.6rem'},
    fontWeight: 100,
    color: 'white'
  }

  const roleStyle = {
    fontSize: {xs: '1.5rem', sm: '2rem'},
    fontWeight: 400,
    lineHeight: "1.9rem",
    color: 'white'
  }

  const descriptionStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontSize: {xs: '0.9rem', sm: '1rem', md: '1.2rem'},
    fontWeight: 300,
    lineHeight: '1.4rem',
    color: 'white',
  }

  const headingStyle = {
    fontSize: '1.3rem',
    fontWeight: 400,
    color: 'white',
    mt: '-0.5rem',
  }

  const listResponsibilityStyle = {
    fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1.1rem'},
    fontWeight: 300,
    color: 'white',
  }

  const listSkillStyle = {
    fontSize: {xs: '1rem', sm: '1.1rem', md: '1.2rem'},
    fontWeight: 100,
    color: 'white'
  }

  const stepperContainerStyle = {
    position: 'fixed',
    zIndex: 2,
    bottom: 0,
    display: seen ? 'flex' : 'none',
    height: '5vw',
    minHeight: '50px',
    maxHeight: '60px',
    width: '100%',
    boxShadow: '0px -10px 25px 0px rgba(0,0,0,0.25)',
    backgroundColor: 'white',
    transition: 'all 1s ease'
  }

  const navArrowIconProps = {
    className: "animate__animated animate__headShake animate__slow animate__infinite infinite",
    sx: {fontSize: {sm: '4rem', md: '7rem'}}
  }

  const NavArrow = (props) => {
    return (
      <ScrollIntoView selector='#experience'>
          <IconButton
            className={isElementVisible && elementIn ? "animate__animated animate__fadeIn animate__faster" : "animate__animated animate__fadeOut animate__faster"}
            onClick={props.onClick}
            disabled={props.disabled}
            sx={{
              position: 'relative',
              display: {xs: 'none', sm: 'flex'},
              ...(props.direction === 'right' ? {ml: '20px'} : {mr: '20px'}),
              width: {sm: '50px', md: '70px'},
              height: '100%',
              borderRadius: '0px',
              zIndex: 1,
              backgroundColor: 'rgba(255,255,255,0.3)'
          }}>
            {
              props.direction === 'right' && !props.disabled &&
              <KeyboardArrowRightIcon {...navArrowIconProps} />
            }
            {
              props.direction !== 'right' && !props.disabled &&
              <KeyboardArrowLeftIcon disabled={page === 0} {...navArrowIconProps} />
            }
          </IconButton>
      </ScrollIntoView>
    )
  }

  const handleNext = () => {
    setElementIn(false);
    setTimeout(() => {
      setPage(page + 1);
      setElementIn(true);
    }, duration)
  }

  const handleBack = () => {
    setElementIn(false);
    setTimeout(() => {
      setPage(page - 1);
      setElementIn(true);
    }, duration)
  }

  return (
    <>
      <Box className={selection === "Experience" ? "breathing" : ""} sx={backgroundStyle} />
      <Box ref={containerRef} sx={{...sectionLayout, justifyContent: 'center', flexDirection: 'row', background: '', backgroundColor: "transparent"}}>
        <NavArrow direction="left" onClick={handleBack} disabled={page === 0}/>
        <Stack spacing="1rem" sx={{...sectionInnerLayout, ml: 0, mr: 0, flexDirection: "column", pt: '30px', pb: '30px'}}>
          <Slider direction="right" in={elementIn} container={containerRef.current}>
            <Box sx={{width: '100%', height: '125px'}}>
              <Slide damping={0.1} direction="left" triggerOnce>
                <Box sx={{
                  position: 'absolute',
                  height: '125px',
                  width: '100vw',
                  right: 0,
                  backgroundColor: theme.palette.experience.background[page],
                  borderRadius: '3px'
                }}/>
              </Slide>
              <Box sx={titleContainerStyle}>
                <Slide cascade damping={0.1} direction="left" triggerOnce>
                  <Typography sx={companyNameStyle}> {data[page].company} </Typography>
                  <Typography sx={roleStyle}> {data[page].role} </Typography>
                  <Typography sx={companyNameStyle}> {data[page].period} </Typography>
                </Slide>
              </Box>
            </Box>
          </Slider>
          <Slider direction="left" in={elementIn} container={containerRef.current}>
            <Box>
              <Slide direction='right' triggerOnce>
                <Box sx={descriptionContainerStyle}>
                  <Typography align="justify" sx={descriptionStyle}> {data[page].description}</Typography>
                </Box>
              </Slide>
            </Box>
          </Slider>
          <Stack direction={{xs: "column", sm:"row"}} spacing="1rem" sx={{position: 'relative', width: '100%'}}>
            <Slider in={elementIn} container={containerRef.current}>
              <Box sx={{position: 'relative', width: {xs: '100%', sm:'70%'}, height: '100%'}}>
                <Slide direction="left" triggerOnce>
                  <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background[page], borderRadius: '3px'}}>
                    <Typography sx={headingStyle}> Responsibilities and Accomplishments: </Typography>
                    <Box sx={{pl: '18px'}}>
                      <List style={{listStyleType: 'disc'}}>
                        {
                          data[page].responsibilities.map((item, index) => (
                            <ListItemText
                              key={index}
                              primaryTypographyProps={listResponsibilityStyle}
                              sx={{display: 'list-item', color: 'white'}}
                            >
                              {item}
                            </ListItemText>
                          ))
                        }
                      </List>
                    </Box>
                  </Box>
                </Slide>
              </Box>
            </Slider>
            <Slider direction="up" in={elementIn} container={containerRef.current}>
              <Box sx={{position: 'relative', width: {xs: '100%', sm: '30%'}, height: '100%'}}>
                <Slide direction="up" triggerOnce>
                  <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background[page], borderRadius: '3px'}}>
                    <Typography sx={headingStyle}> Skills Developed: </Typography>
                    <Box sx={{pl: '18px'}}>
                      <List style={{listStyleType: 'disc'}}>
                        {
                          data[page].skills.map((item, index) => (
                            <ListItemText
                              key={index}
                              primaryTypographyProps={listSkillStyle}
                              sx={{display: 'list-item', color: 'white'}}
                              primary={item}
                            />
                          ))
                        }
                      </List>
                    </Box>
                  </Box>
                </Slide>
              </Box>
            </Slider>
          </Stack>
        </Stack>
        <NavArrow direction="right" onClick={handleNext} disabled={page === data.length - 1}/>
      </Box>
        <Box className={isElementVisible ? "animate__animated animate__bounceInUp" : "animate__animated animate__fadeOutDown"} sx={stepperContainerStyle}>
          <MobileStepper
            position='static'
            variant="dots"
            steps={data.length}
            activeStep={page}
            sx={{m: 'auto'}}
            nextButton={
              <ScrollIntoView selector='#experience'>
                <IconButton size="small" onClick={handleNext} disabled={page === data.length - 1}>
                  <KeyboardArrowRightIcon/>
                </IconButton>
              </ScrollIntoView>
            }
            backButton={
              <ScrollIntoView selector='#experience'>
                <IconButton size="small" onClick={handleBack} disabled={page === 0}>
                  <KeyboardArrowLeftIcon/>
                </IconButton>
              </ScrollIntoView>
            }
          />
        </Box>
    </>
  )
}
