import Image from "next/image";
import Head from 'next/head';
import {Box, Stack, Typography, useTheme} from "@mui/material";
import { styled } from '@mui/material';

export default function Title() {
  const theme = useTheme();

  return (
      <Box sx={{position: "relative", height: "100vh"}}>
        <Image
          layout="fill"
          objectFit='cover'
          priority={true}
          quality={100}
          src="/../public/TitleBackground.jpg"
          alt="TitleBackground"/>
        <Box sx={{position: "relative", ml: 'auto', mr: 'auto', width: "60%", minWidth: 500, height: "100%", backgroundColor: "white"}}>
          <Stack direction="row" sx={{position: "relative", top: "20%", left: "10%"}}>
            <Typography variant="h1" sx={{fontWeight: "light", fontSize: "6rem", color: theme.palette.title.text}}> Ryan Tso </Typography>
            <Typography variant="h1" sx={{fontWeight: "regular", fontSize: "6rem"}}> Ryan Tso </Typography>
            <Typography variant="h1" sx={{fontWeight: "medium", fontSize: "6rem"}}> Ryan Tso </Typography>
            <Typography variant="h1" sx={{fontFamily: theme.typography.altText,  fontWeight: "300", fontSize: "6rem"}}> Ryan Tso </Typography>

          </Stack>
        </Box>
      </Box>
  )

}