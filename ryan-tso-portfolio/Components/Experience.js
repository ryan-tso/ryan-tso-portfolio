import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  MobileStepper,
  useTheme,
  Button,
  IconButton,
  Slide as MuiSlide,
  Fade,
} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sectionInnerLayout, sectionLayout } from "../styles/index";
import {Slide} from "react-awesome-reveal";
import {useEffect, useRef, useState} from "react";
import bg from "../public/FarmPlot.jpg";
import {useIsElementVisible} from "./useIsElementVisible";
import {useDispatch} from "react-redux";
import {setScrollLocation} from "../redux/features/navigation/scroll-location";

const EXPERIENCE = [
  {
    company: "Ensemble Scientific",
    role: "Full-Stack-Developer",
    period: "2021 - 2022",
    description: "Ensemble Scientific is a company that produces IoT sensors and devices used primarily in the " +
      "measurement of agricultural environments, enabling farms to become 'smart' and allowing farmers to effectively " +
      "monitor and manage their farms to reduce waste and to optimize yield.",
    responsibilities: [
      "Implemented the back-end RESTful API server using Python, Django Rest Framework, and MySQL which provided extensive " +
      "models to company IOT devices and end-points to manage users, devices, data, telemetry, and organization information " +
      "from the front-end cloud app or from the IOT devices themselves",
      "Developed the front-end using JavaScript, React, Next.js, and Redux which allowed users to creat or join organizations, " +
      "as well claim, manage, or view the data from the IOT devices for their organization in real time",
      "Created and maintained comprehensive test suites for back-end API using Pytest and Postman API",
      "Helped to develop QMS modules for in-house IoT device production that adheres to the requirements of ISO 9001",
      "Constructed an intuitive roadmap for the company to become ISO 9001 certified",
    ],
    skills: [
      "Python",
      "Django Rest Framework",
      "JavaScript",
      "React",
      "Redux",
      "Next.js",
      "Material UI",
      "MySQL",
    ]
  },
  {
    company: "Organika Health Products Inc.",
    role: "Quality Control Supervisor",
    period: "2005 - 2013",
    description: "Organika is a natural health supplements company specializing in manufacturing and distribution, " +
      "providing the latest effective products that meet their customers daily needs.",
    responsibilities: [
      "Supervised the Quality team and laboratory and guided them on proper quality procedures and operations",
      "Improved intra-department and inter-department effectiveness by designing and implementing SOPs integrating newer technologies",
      "Responsible for transitioning the office to paperless which improved department efficiency by 50%",
      "Participated in ISO 9001 and HACCP audits as the main point-man and acquired HACCP certification for the company",
      "Practiced rigorous acceptance testing on a product to product basis that reduced non-compliance to 2%"
    ],
    skills: [
      "Quality Control",
      "Quality Assurance",
      "Acceptance Testing",
      "Auditing",
      "GMP",
      "ISO 9001",
      "HACCP",
      "Manufacturing",
    ]
  }
]

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

export default function Experience() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const isElementVisible = useIsElementVisible(containerRef.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Experience'))
  },[isElementVisible])

  const [stepperVisibility, setStepperVisibility] = useState(false);
  const [page, setPage] = useState(0);
  const [elementIn, setElementIn] = useState(true);

  const duration = 600;

  const companyNameStyle = {
    fontSize: '1.6rem',
    fontWeight: 100,
    color: 'white'
  }

  const roleStyle = {
    fontSize: '2rem',
    lineHeight: "1.9rem",
    color: 'white'
  }

  const descriptionStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontSize: {xs: '0.9rem', sm: '1rem', md:'1.2rem'},
    fontWeight: 300,
    lineHeight: '1.4rem',
    color: 'white',
  }

  const headingStyle = {
    fontSize: '1.3rem',
    fontWeight: 300,
    color: 'white',
    mt: '-0.5rem',
  }

  const listResponsibilityStyle = {
    fontSize: {xs:'0.8rem', sm: '0.9rem', md: '1.1rem'},
    fontWeight: 300,
    color: 'white',
  }

  const listSkillStyle = {
    fontSize: {xs:'1rem', sm: '1.1rem', md:'1.2rem'},
    fontWeight: 100,
    color: 'white'
  }

  const NavArrow = (props) => {
    return (
      <IconButton onClick={props.onClick} disabled={props.disabled} sx={{
        position: {xs: 'none', sm:'absolute'},
        ...(props.direction === 'right' ? {right: '10px'} : {left: '10px'}),
        top: '50%',
        width: {sm: '50px', md: '75px'},
        height: {sm: '50px', md: '75px'},
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)'}}>
        {
          props.direction === 'right' && !props.disabled &&
            <KeyboardArrowRightIcon sx={{fontSize: {sm: '4rem', md: '7rem'}}}/>
        }
        { props.direction !== 'right' && !props.disabled &&
          <KeyboardArrowLeftIcon onClick={handleBack} disabled={page === 0} sx={{fontSize:{sm: '4rem', md: '7rem'}}}/>
        }
      </IconButton>
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
      <Box sx={{position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}/>
      <Box ref={containerRef} sx={{...sectionLayout, backgroundColor: "transparent"}}>
        <NavArrow direction="left" onClick={handleBack} disabled={page === 0} />
        <NavArrow direction="right" onClick={handleNext} disabled={page === EXPERIENCE.length-1} />
        <Stack spacing="1rem" sx={{...sectionInnerLayout, flexDirection: "column", pt: '30px', pb: '30px'}}>
          <Slider direction="right" in={elementIn} container={containerRef.current}>
          <Box sx={{width: '100%', height: '125px'}}>
            <Slide damping={0.1} direction="left" triggerOnce>
              <Box sx={{position: 'absolute', height: '125px', width: '100vw', right: 0,  backgroundColor: theme.palette.experience.background[page]}}/>
            </Slide>
            <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%', pt: '5px', pb: '5px', pl: '20px', pr: '20px'}}>
              <Slide cascade damping={0.1} direction="left" triggerOnce>
                  <Typography sx={companyNameStyle}> {EXPERIENCE[page].company} </Typography>
                  <Typography sx={roleStyle}> {EXPERIENCE[page].role} </Typography>
                  <Typography sx={companyNameStyle}> {EXPERIENCE[page].period} </Typography>
              </Slide>
            </Box>
          </Box>
          </Slider>
          <Slider direction="left" in={elementIn} container={containerRef.current}>
            <Box>
              <Slide direction='right' triggerOnce>
                <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', width: '100%', p: '20px', backgroundColor: theme.palette.experience.background[page]}}>
                  <Typography align="justify" sx={descriptionStyle}> {EXPERIENCE[page].description}</Typography>
                </Box>
              </Slide>
            </Box>
          </Slider>

          <Stack direction="row" spacing="1rem" sx={{position: 'relative', width: '100%'}}>
            <Slider in={elementIn} container={containerRef.current}>
              <Box sx={{position: 'relative', width: '70%', height: '100%'}}>
                <Slide direction="left" triggerOnce>
                  <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background[page]}}>
                    <Typography sx={headingStyle}> Responsibilities and Accomplishments: </Typography>
                    <Box sx={{pl: '18px'}}>
                      <List style={{listStyleType: 'disc'}}>
                        {EXPERIENCE[page].responsibilities.map((item, index) => (<ListItemText key={index} primaryTypographyProps={listResponsibilityStyle} sx={{display: 'list-item', color: 'white'}}>{item}</ListItemText>))}
                      </List>
                    </Box>
                  </Box>
                </Slide>
              </Box>
            </Slider>
            <Slider direction="up" in={elementIn} container={containerRef.current}>
              <Box sx={{position: 'relative', width: '30%', height: '100%'}}>
                <Slide direction="up" triggerOnce>
                  <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background[page]}}>
                    <Typography sx={headingStyle}> Skills Developed: </Typography>
                    <Box sx={{pl: '18px'}}>
                      <List style={{listStyleType: 'disc'}}>
                        {EXPERIENCE[page].skills.map((item, index) => (<ListItemText key={index} primaryTypographyProps={listSkillStyle} sx={{display: 'list-item', color: 'white'}} primary={item}/>))}
                      </List>
                    </Box>
                  </Box>
                </Slide>
              </Box>
            </Slider>
          </Stack>

        </Stack>
      </Box>
        <Fade in={isElementVisible} timeout={500}>
          <Box sx={{position: 'fixed', zIndex: 2, bottom: 0, display: 'flex', height: '60px', width: '100%', boxShadow: '0px -10px 25px 0px rgba(0,0,0,0.25)', backgroundColor: 'white', transition: 'all 1s ease'}}>
            <MobileStepper
              position='static'
              variant="dots"
              steps={EXPERIENCE.length}
              activeStep={page}
              sx={{m: 'auto'}}
              nextButton={
              <IconButton size="small" onClick={handleNext} disabled={page === EXPERIENCE.length-1}>
                <KeyboardArrowRightIcon />
              </IconButton>
              }
              backButton={
              <IconButton size="small" onClick={handleBack} disabled={page === 0}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              }
            />
          </Box>
        </Fade>
    </>

  )
}