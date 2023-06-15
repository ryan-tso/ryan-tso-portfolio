import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import {useState} from "react";

const SECTIONS = ["About Me", "Skills", "Experience", "Projects", "Contact"]


export default function Navbar() {
  const theme = useTheme();
  const [selection, setSelection] = useState("");

  const buttonStyle = {
    fontFamily: theme.typography.navBar,
    fontWeight: 300,
    fontSize: {xs: '15pt', sm: '17pt', md: "20pt"},
    // transition: 'background 0.5s, color 0.5s',
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
      color: theme.palette.title.text,
      cursor: 'pointer',
    },
  }

  const select = (e) => {
    setSelection(e.currentTarget.textContent);
  }

  return (
    <Box sx={{position: "relative", height: "70px", pt: '12px', pb: '12px'}}>
      <Divider fullWidth sx={{backgroundColor: 'darkgrey'}} />
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          ml: 'auto',
          mr: 'auto',
          width: "60%",
          minWidth: 500,
          height: "100%",
        }}
      >
        {
          SECTIONS.map((item) => (
            <Typography onClick={select} sx={{...buttonStyle, color: item === selection ? 'white' : '', backgroundColor: item === selection ? 'black' : ''}}>{item}</Typography>
          ))
        }
      </Stack>
      <Divider fullWidth sx={{backgroundColor: 'darkgrey'}} />
    </Box>
  )
  }