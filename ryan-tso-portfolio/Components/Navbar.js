import {Box, Divider, Grow, Slide, Stack, Typography, useTheme, Zoom} from "@mui/material";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setScrollLocation } from '../redux/features/navigation/scroll-location';

const SECTIONS = ["About Me", "Skills", "Experience", "Projects", "Contact"]


export default function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const selection = useSelector((state) => state.scrollLocation.value)
  // const [selection, setSelection] = useState("");

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

  const select = (e) => {
    // setSelection(e.currentTarget.textContent);
    dispatch(setScrollLocation(e.currentTarget.textContent));
  }

  return (
    <Box sx={{position: "sticky", top: '0px', height: "60px", pt: '8px', pb: '8px', backgroundColor: 'white'}}>
      <Divider fullWidth sx={{backgroundColor: 'darkgrey'}} />
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          ml: 'auto',
          mr: 'auto',
          width: "60%",
          minWidth: '500px',
          maxWidth: '1000px',
          height: "100%",
        }}
      >
        {
          SECTIONS.map((item, index) => (
            <Stack key={index} flexDirection="column" alignItems="center">
              <Typography onClick={select} sx={{...buttonStyle, color: selection === item ? theme.palette.title.text : ''}}>{item}</Typography>
              {selection === item &&
                <Zoom in easing={{enter: "ease-in", exit: "linear"}}>
                  <Box sx={{height: '2px', width: '110%', mt: '-4px', borderRadius: '3px', backgroundColor: theme.palette.title.text}} />
                </Zoom>
              }
            </Stack>
          ))
        }
      </Stack>
      <Divider fullWidth sx={{backgroundColor: 'darkgrey'}} />
    </Box>
  )
  }