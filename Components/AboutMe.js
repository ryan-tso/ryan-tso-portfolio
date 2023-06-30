import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import { Fade, Slide } from "react-awesome-reveal";
import { useIsElementVisible } from "../Hooks/useIsElementVisible";
import { setScrollLocation } from '../redux/features/navigation/scroll-location';
import { sectionInnerLayout, sectionLayout } from "../pages/index";
import RyanPic from "../public/RyanPic.jpg";


const EducationStrip = ({title, year, school, color, offset}) => (
    <Box sx={{
      position: 'relative',
      width: {xs: "100%", sm: `${80 - (offset ?? 0)}%`, md: `${60 - (offset ?? 0)}%`, lg: `${50 - (offset ?? 0)}%`},
      ml: 'auto',
      mb: '20px',
      backgroundColor: color
    }}>
      <Stack direction="row" spacing={2} sx={{ml: '10px', alignItems: 'center'}}>
        <SchoolIcon sx={{color: 'white', fontSize: '75px'}}/>
        <Stack direction="column">
          <Fade>
            <Slide cascade damping={0.2} direction="right">
              <Typography sx={{fontSize: {sm: '1rem', md: '1.5rem'}, fontWeight: 400, lineHeight: '20px', color: 'white'}}>{title}</Typography>
              <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>{year}</Typography>
              <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>{school}</Typography>
            </Slide>
          </Fade>
        </Stack>
      </Stack>
    </Box>
)


export default function AboutMe({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('About Me'))
  },[isElementVisible])

  const photoStyle = {
    position: 'relative',
    top: '20px',
    display: 'flex',
    zIndex: 3,
    height: 0,
    width: '95%',
    paddingBottom: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 5,
  }

  const photoBackingStyle = {
    position: 'relative',
    display: 'flex',
    zIndex: 2,
    mt: "-75px",
    height: '200px',
    width: '100vw',
    float: 'right',
    background: `linear-gradient(32deg, #df4069 60%, #f07a47 100%)`
  }

  const descriptionStyle = {
    fontSize: {md: '1.1rem', lg: '1.2rem', xl: '1.3rem'},
    fontWeight: 300,
    color: theme.palette.aboutColor.text,
  }


  return (
    <Box ref={ref} sx={{...sectionLayout, background: '', backgroundColor: theme.palette.aboutColor.background}}>
      <Box sx={{...sectionInnerLayout, flexDirection: {xs: 'column', sm: 'row'}, alignItems: {xs: 'center', sm: 'flex-start'}}}>
        <Box sx={{position: 'relative', width: {xs: '65%', sm: '30%'}, minWidth: '150px'}}>
          <Box sx={photoStyle}>
            <Image
              src={RyanPic}
              fill
              priority
              quality={100}
              alt="Title Background"
              style={{objectFit: 'cover'}}
            />
          </Box>
          <Slide direction="left" triggerOnce>
            <Box sx={photoBackingStyle}>
              <Stack direction='column' sx={{position: 'relative', ml: 'auto', mt: 'auto', p: '5px', alignItems: 'flex-end'}}>
                <Slide cascade damping={0.1} direction="left" triggerOnce>
                  <Link href="/files/RyanResume.pdf" locale={false} rel="noopener noreferrer" target="_blank">
                    <IconButton sx={{borderRadius: '0px', p: '0'}}>
                     <DescriptionIcon sx={{color: 'white', fontSize: '60px', '&:hover': {color: '#f1c6d1'}}}/>
                    </IconButton>
                  </Link>
                  <Typography sx={{fontSize: {xs: '0.9rem', sm: '0.80rem', md: '1rem'}, color: 'white'}}>
                    View and print my resume here!
                  </Typography>
                </Slide>
              </Stack>
            </Box>
          </Slide>
        </Box>
        <Box sx={{position: 'relative', display: 'flex', flexDirection: "column", width: {xs: '100%', sm: '70%'}, p: '20px'}}>
          <Fade duration={1000} triggerOnce>
            {
              data.map((paragraph, index) => (
                <Typography key={index} align='justify' paragraph sx={descriptionStyle}>
                  {paragraph}
                </Typography>
              ))
            }
          </Fade>
        </Box>
      </Box>
      <Box sx={{position:'relative', width: '100%', backgroundColor: theme.palette.aboutColor.background}}>
        <Slide direction="right" cascade damping={0.25}>
          <EducationStrip title="Bachelor of Computer Science" year="2019 - 2023" school="University of British Columbia" color={theme.palette.aboutColor.educationBacking1} />
          <EducationStrip title="Bachelor of Food and Nutritional Science" year="2005 - 2012" school="University of British Columbia" color={theme.palette.aboutColor.educationBacking2} offset={5}/>
        </Slide>
      </Box>
    </Box>
  )
}
