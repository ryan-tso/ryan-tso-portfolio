import Head from 'next/head'
import { Box, Typography, useTheme } from "@mui/material";
import { Slide, Fade } from "react-awesome-reveal";
import { Title, AboutMe, Navbar, Skills, Experience, Projects, Contact } from "../Components/index";


export const sectionLayout = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow:'hidden',
  backgroundColor: 'white'
}

export const sectionInnerLayout = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  ml: 'auto',
  mr: 'auto',
  width: {xs: "100%", sm: "80%", md: "60%"},
  minWidth: '360px',
  maxWidth: '1000px',
  height: "100%",
}


export default function Home() {
  const theme = useTheme();

  const headerContainerStyle = {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    pt: '60px',
  }

  const sectionHeaderStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontWeight: 300,
    fontSize: {xs:'2.5rem', sm:'2.75rem', md: '3rem'},
    color: 'black',
    ml: 'auto',
    mr: 'auto',
  }

  const spacerStyle = {
    width: '100%',
    height: '15vh',
    backgroundColor: 'white'
  }

  const endCapStyle = {
    width: '100%',
    height: '50vh',
    backgroundColor: theme.palette.endCap.background
  }

  return (
    <Box sx={{width: '100vw', height: '100vh', overflow: 'auto'}}>
      <Head>
        <title>Ryan Tso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/RyanTsoLogo.ico" />
      </Head>

      <Title />
      <Navbar />

      <Box sx={spacerStyle} />

      <Box id="aboutme" sx={headerContainerStyle}>
        <Typography sx={sectionHeaderStyle}>
          About Me
        </Typography>
      </Box>
      <AboutMe />

      <Box sx={spacerStyle} />

      <Box id="skills" />
      <Box sx={headerContainerStyle}>
        <Box sx={{width: '100%'}}>
          <Slide direction="left">
            <Box sx={{display: 'flex', backgroundColor: theme.palette.skills.header}}>
              <Typography sx={{...sectionHeaderStyle, color: 'white'}}>
                Skills
              </Typography>
            </Box>
          </Slide>
        </Box>
      </Box>
      <Skills />

      <Box sx={spacerStyle} />

      <Box id="experience" sx={headerContainerStyle}>
        <Typography sx={sectionHeaderStyle}>
          Experience
        </Typography>
      </Box>
      <Experience />

      <Box sx={spacerStyle} />

      <Box id="projects" sx={headerContainerStyle}>
        <Typography sx={sectionHeaderStyle}>
          Projects
        </Typography>
      </Box>
      <Projects />

      <Box sx={spacerStyle} />

      <Box id="contact" sx={{...headerContainerStyle}}>
        <Box sx={{width: '100%', backgroundColor: theme.palette.contact.background, overflow: 'hidden'}}>
          <Slide direction="right" triggerOnce>
            <Fade triggerOnce>
              <Box sx={{...sectionInnerLayout, }}>
                <Typography sx={{...sectionHeaderStyle, ml: {xs: '10%', sm: 0}, color: 'white'}}>
                  Contact
                </Typography>
              </Box>
            </Fade>
          </Slide>
        </Box>
      </Box>
      <Contact />

      <Box sx={endCapStyle}/>

    </Box>
  )
}
