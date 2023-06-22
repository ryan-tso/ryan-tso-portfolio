import {Box, Divider, Stack, Typography, useTheme, Zoom} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import ScrollIntoView from 'react-scroll-into-view';




export default function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const selection = useSelector((state) => state.scrollLocation.value)

  const SECTIONS = ["About Me", "Skills", "Experience", "Projects", "Contact"]

  const buttonStyle = {
    fontFamily: theme.typography.navBar,
    fontWeight: 300,
    fontSize: {xs: '15pt', sm: '17pt', md: "20pt"},
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
      color: theme.palette.title.text,
      cursor: 'pointer',
    },
  }

  return (
    <Box sx={{position: "sticky", zIndex: 99, top: '0px', height: "60px", pt: '8px', pb: '1px', backgroundColor: 'white'}}>
      <Divider sx={{backgroundColor: 'darkgrey'}} />
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          ml: 'auto',
          mr: 'auto',
          width: "60%",
          minWidth: '375px',
          maxWidth: '1000px',
          height: "100%",
        }}
      >
        {
          SECTIONS.map((item, index) => (
            <Stack key={index} flexDirection="column" alignItems="center">
              <ScrollIntoView selector={'#' + item.toLowerCase().replace(/\s/g, '')}>
              <Typography sx={{...buttonStyle, color: selection === item ? theme.palette.title.text : 'black'}}>{item}</Typography>
                <Zoom in={selection === item} easing={{enter: "ease-in", exit: "linear"}}>
                  <Box sx={{height: '2px', width: '110%', mt: '-4px', borderRadius: '3px', backgroundColor: theme.palette.title.text}} />
                </Zoom>
              </ScrollIntoView>
            </Stack>
          ))
        }
      </Stack>
      <Divider sx={{backgroundColor: 'darkgrey'}} />
    </Box>
  )
  }