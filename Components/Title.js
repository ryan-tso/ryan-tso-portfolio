import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {Box, Button, Stack, Typography, useTheme} from "@mui/material";
import ScrollIntoView from 'react-scroll-into-view';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useIsElementVisible } from "../Hooks/useIsElementVisible";
import { setScrollLocation } from "../redux/features/navigation/scroll-location";
import { sectionInnerLayout } from "../pages/index";
import TitleImage from "../public/TitleBackground.jpg";
import Image from "next/image";

export default function Title() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Title'))
  }, [isElementVisible])

  const titleImageStyle = {
    position: 'absolute',
    backgroundImage: `url(${TitleImage.src})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  }

  const bigLetterStyle = {
    fontWeight: "light",
    fontSize: "8rem",
    color: theme.palette.title.text
  }

  const smallLetterStyle = {
    position: 'relative',
    fontWeight: "light",
    fontSize: "2.5rem",
    bottom: '20px',
    color: theme.palette.title.text
  }

  const subtitleStyle = {
    position: 'relative',
    fontWeight: "light",
    fontSize: "1.5rem",
    bottom: '18px',
    color: theme.palette.title.text
  }

  const descriptionStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontWeight: 300,
    fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem'},
    color: theme.palette.title.text
  }

  const startButtonStyle = {
    width: '100%',
    borderRadius: '0px',
    color: theme.palette.title.text,
    borderColor: theme.palette.title.text,
    fontFamily: theme.typography.sectionHeader,
    transition: 'all 0.4s ease',
    "&:hover": {
      backgroundColor: theme.palette.title.text,
      borderColor: theme.palette.title.text,
      color: 'white',
      "& .arrowIcon": {
        transform: 'rotate(90deg)',
        transition: 'transform 0.3s ease'
      }
    }
  }


  return (
    <Box ref={ref} sx={{position: "relative", height: "100vh", minHeight: '500px', backgroundColor: 'white'}}>
      <Image
        src={TitleImage}
        fill
        priority
        placeholder="blur"
        alt="Title Background"
        style={{objectFit:'cover'}}
      />
      <Box sx={{...sectionInnerLayout, flexDirection: 'column'}}>
        <Stack direction="column" alignItems='flex-end' sx={{position: "relative", width: '250px', top: "11%", left: "10%"}}>
          <Stack direction="row" sx={{position: "relative", alignItems: "end"}}>
            <Typography variant="h1" sx={bigLetterStyle}> R </Typography>
            <Typography variant="h1" sx={{...smallLetterStyle, ml: '-0.5rem'}}> YAN </Typography>
            <Typography variant="h1" sx={bigLetterStyle}> T </Typography>
            <Typography variant="h1" sx={{...smallLetterStyle, ml: '-1.5rem'}}> SO </Typography>
          </Stack>
          <Typography variant="h2" sx={subtitleStyle}> Full-Stack Developer </Typography>
        </Stack>
        <Stack direction="column" sx={{position: 'relative', ml: 'auto', mr: 'auto', top: '25%', alignItems: 'center'}}>
          <Typography noWrap sx={descriptionStyle}> Welcome to everything about me </Typography>
          <Box sx={{width: '20%', mt: '20px',}}>
            <ScrollIntoView selector='#aboutme'>
              <Button
                variant="outlined"
                endIcon={<ArrowRightIcon className='arrowIcon' />}
                sx={startButtonStyle}
              >
                Start
              </Button>
            </ScrollIntoView>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
