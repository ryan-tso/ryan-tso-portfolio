import Head from 'next/head'
import {Box, Typography, useTheme} from "@mui/material";
import { Title, Navbar, Skills, AboutMe, Experience, Projects, Contact } from "../Components/index";
import {useDispatch} from "react-redux";



export default function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();


  const sectionHeaderStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontWeight: 300,
    fontSize: '3rem',
    ml: 'auto',
    mr: 'auto',
  }


  return (
    <div>
      <Head>
        <title>Ryan Tso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <Navbar />
      <Box sx={{width: '100%', height: '200px', backgroundColor: 'white'}} />
      <Box sx={{width: '100%', display: 'flex', backgroundColor: 'white'}}>
        <Typography sx={sectionHeaderStyle}>
          About Me
        </Typography>
      </Box>
      <AboutMe />



    </div>
  )
}
