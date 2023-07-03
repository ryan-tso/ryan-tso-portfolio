import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import {Box, Divider, IconButton, Stack, Typography, useTheme, Zoom, Fade, Tooltip} from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ScrollIntoView from 'react-scroll-into-view';


const SECTIONS = ["About Me", "Skills", "Experience", "Projects", "Contact"]


export default function Navbar({height}) {
  const theme = useTheme();
  const selection = useSelector((state) => state.scrollLocation.value)

  const [nextSection, setNextSection] = useState(0)

  useEffect(() => {
    if (selection === SECTIONS[SECTIONS.length-1] || !SECTIONS.includes(selection)) {
      setNextSection(0);
    } else {
      setNextSection(SECTIONS.indexOf(selection) + 1)
    }
  }, [selection])

  const navbarStyle = {
    position: "sticky",
    zIndex: 99,
    top: '0px',
    height: height ?? "60px",
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.1)'
  }

  const contentContainerStyle = {
    ml: 'auto',
    mr: 'auto',
    width: {xs: '100%', sm: '80%', md:'60%'},
    minWidth: '360px',
    maxWidth: '1000px',
    height: "100%",
  }

  const buttonStyle = {
    fontFamily: theme.typography.navBar,
    fontWeight: 300,
    fontSize: {xs: '14pt', sm: '17pt', md: "20pt"},
    userSelect: 'none',
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
      color: theme.palette.title.text,
      cursor: 'pointer',
    },
  }

  const underlineStyle = {
    height: '2px',
    width: '100%',
    mt: '-4px',
    borderRadius: '3px',
    backgroundColor: theme.palette.title.text
  }

  const nextButtonContainerStyle = {
    position: "sticky",
    zIndex: 99,
    top: '80%',
    float: 'right',
    mr: '5%',
  }

  const nextButtonStyle = {
    height: "60px",
    width: '60px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    transition: 'all 0.5s ease',
    '&:hover': {
      color: 'black'
    },
    '& .icon': {
      transform: selection === SECTIONS[SECTIONS.length - 1] ? 'rotate(180deg)' : '',
      transition: 'transform 0.5s ease'
    }
  }

  return <>
    <Box sx={navbarStyle}>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-evenly" sx={contentContainerStyle}>
        {
          SECTIONS.map((item, index) => (
            <Stack key={index} flexDirection="column" alignItems="center">
              <ScrollIntoView selector={'#' + item.toLowerCase().replace(/\s/g, '')}>
                <Typography sx={{...buttonStyle, color: selection === item ? theme.palette.title.text : 'black'}}>
                  {item}
                </Typography>
                <Fade in={selection === item} timeout={250} easing={{enter: "ease-in", exit: "linear"}}>
                  <Box sx={underlineStyle}/>
                </Fade>
              </ScrollIntoView>
            </Stack>
          ))
        }
      </Stack>
    </Box>
    <Fade in={SECTIONS.includes(selection)} timeout={500}>
      <Box sx={nextButtonContainerStyle}>
          <ScrollIntoView selector={'#' + SECTIONS[nextSection].toLowerCase().replace(/\s/g, '')}>
            <Tooltip followCursor placement="top-start" title={selection === SECTIONS[SECTIONS.length - 1] ? "Go back to top" : `Go to ${SECTIONS[nextSection]}`}>
              <IconButton sx={nextButtonStyle}>
                <KeyboardDoubleArrowDownIcon className="icon" fontSize='large' />
              </IconButton>
            </Tooltip>
          </ScrollIntoView>
      </Box>
    </Fade>
  </>;
}