import Link from "next/link";
import {useRef, useState} from "react";
import {Box, Button, Typography, useTheme, Fade, Slide, IconButton} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import GitHubIcon from '@mui/icons-material/GitHub';


const CARD_WIDTH = '23vw'
const CARD_GUTTERS = {xs: '15px', sm: '30px', md: '40px', lg: '50px'}
const EASING = 'cubic-bezier(.5, .1, .5, .9)'
const SLIDE_DURATION = 500


export default function ProjectCard({title, subtitle, description, picUrl, gitHubUrl}) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
    display: 'flex',
    position: 'relative',
    height: `calc(${CARD_WIDTH} * 1.4)`,
    minHeight: '420px',
    maxHeight: '560px',
    width: CARD_WIDTH,
    minWidth: '300px',
    maxWidth: '400px',
    borderRadius: '7px',
    backgroundColor: 'white',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'default',
    }
  }

  const cardPictureStyle = {
    width: '100%',
    height: '100%',
    transform: hovering || isFlipped ? 'scale(1.1,1.1)' : '',
    backgroundImage: picUrl,
    backgroundSize: 'cover',
    filter: hovering || isFlipped ? 'blur(4px)' : '',
    transition: 'all 0.4s ease'
  }

  const contentContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: hovering || isFlipped ? 'rgba(255,255,255,0.40)' : '',
    transition: 'all 0.4s ease'
  }

  const titleTextStyle = {
    fontFamily: 'Roboto Condensed',
    fontWeight: 700,
    fontSize: '3rem',
    color: 'white',
    textShadow: '0px 0px 5px rgba(255,255,255,0.3)',
    zIndex: 1,
  }

  const hoverContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }

  const subtitleTextStyle = {
    fontSize: '1.5rem',
    color: 'black',
    zIndex: 1,
    textShadow: '0px 0px 5px rgba(255,255,255,1)'
  }

  const descriptionContainerStyle = {
    backgroundColor: 'rgba(255,255,255,0.4)',
    p: '12px',
  }

  const descriptionTextStyle = {
    fontWeight: '400',
    fontSize: {xs: '0.9rem', md: '1rem', xl: '1.1rem'},
    color: 'black',
  }

  const buttonStyle = {
    width: '30%',
    borderRadius: '0px',
    mt: '10%',
    color: 'white',
    backgroundColor: 'black',
    borderColor: 'black',
    fontFamily: 'Roboto Condensed',
    transition: 'all 0.4s ease',
    "&:hover": {
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'black',
      color: 'black',
    }
  }

  const handleHover = () => {
    setHovering(true);
  }

  const handleHoverOff = () => {
    setHovering(false);
  }

  const handleFlip = () => {
    setIsFlipped(true);
  }

  const handleUnflip = () => {
    setIsFlipped(false);
  }


  return (
    <Box ref={containerRef} sx={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverOff}>
      <Box sx={{position: 'absolute', width: '100%', height: '100%', overflow: 'hidden'}}>
        <Box className="background" sx={cardPictureStyle}/>
      </Box>
      <Box sx={contentContainerStyle}>
        <Slide
          in={!isFlipped}
          direction="down"
          container={containerRef.current}
          timeout={SLIDE_DURATION}
          easing={{enter: EASING, exit: EASING}}
          sx={{position: 'absolute', width: '100%', height: '100%'}}
        >
          <Box>
            <Box sx={{width: '100%', backgroundColor: 'black', mt: '15%', mb: '10%'}}>
              <Typography align="center" sx={titleTextStyle}> {title} </Typography>
            </Box>
            <Fade in={hovering} timeout={400}>
              <Box sx={hoverContentStyle}>
                <Typography align="center" sx={subtitleTextStyle}> {subtitle} </Typography>
                <Button variant="outlined" endIcon={<ArrowRightIcon/>} onClick={handleFlip} sx={buttonStyle}>
                  Details
                </Button>
              </Box>
            </Fade>
          </Box>
        </Slide>
        <Slide
          in={isFlipped}
          direction="up"
          container={containerRef.current}
          timeout={SLIDE_DURATION}
          easing={{enter: EASING, exit: EASING}}
          sx={{width: '100%', height: '100%'}}
        >
          <Box>
            <Box sx={descriptionContainerStyle}>
              <Typography align='justify' sx={descriptionTextStyle}> {description} </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<ArrowLeftIcon/>}
              onClick={handleUnflip}
              sx={{...buttonStyle, position: 'absolute', left: '5%', bottom: '5%',}}>
              Back
            </Button>
            {
              gitHubUrl &&
              <Box sx={{position: 'absolute', width: '40%', right: '5%', bottom: '5%'}}>
                <Typography sx={{fontSize: {xs: '0.8rem', md: '0.8rem', xl: '1rem'}, color: 'black'}}> Check out the code!</Typography>
                <Link href={gitHubUrl} rel="noopener noreferrer" target="_blank">
                  <IconButton variant="outlined" sx={{...buttonStyle, width: '100%', mt: '5%'}}>
                    <GitHubIcon/>
                  </IconButton>
                </Link>
              </Box>
            }
          </Box>
        </Slide>
      </Box>
    </Box>
  )
}