import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import { sectionInnerLayout, sectionLayout } from "../styles/index";
import {Slide} from "react-awesome-reveal";
import {useState} from "react";
import bg from "../public/FarmPlot.jpg";
// import Image from "next/image";


export default function Experience() {

  return (
    <>
      <Box sx={{position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}/>

      <Box sx={{...sectionLayout, height: '800px', backgroundColor: "transparent"}}>
        <Stack direction="column" sx={{...sectionInnerLayout}}>

        </Stack>
      </Box>
      <Box sx={{display: 'flex', width: '100%', backgroundColor: 'white'}}>
        <Box sx={{m: 'auto'}}>
          oo
        </Box>
      </Box>
    </>

  )
}