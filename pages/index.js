import Head from 'next/head'
import { Box, Typography, useTheme } from "@mui/material";
import { Slide, Fade } from "react-awesome-reveal";
import { Title, AboutMe, Navbar, Skills, Experience, Projects, Contact } from "../Components/index";
import { ABOUT_ME, SKILLS, EXPERIENCE, PROJECTS } from "../data";

export const getStaticProps = async () => {
  return {
    props: {
      aboutMeData: ABOUT_ME,
      skillsData: SKILLS,
      experienceData: EXPERIENCE,
      projectsData: PROJECTS
    }
  }
}


export const sectionLayout = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow:'hidden',
  background: 'linear-gradient(90deg, #e7e7e7 0%, #f4f4f4 25%, #f4f4f4 75%, #e7e7e7 100%)'
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


export default function Home(props) {
  const theme = useTheme();

  const headerContainerStyle = {
    width: '100%',
    display: 'flex',
    background: 'linear-gradient(90deg, #e7e7e7 0%, #f4f4f4 25%, #f4f4f4 75%, #e7e7e7 100%)',
    pt: '60px',
  }

  const sectionHeaderStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontWeight: 300,
    fontSize: {xs:'2.5rem', sm:'3rem', md: '3.5rem'},
    color: '#3d3d3d',
    ml: 'auto',
    mr: 'auto',
  }

  const spacerStyle = {
    width: '100%',
    height: '25vh',
    pt: '2vh',
    background: 'linear-gradient(90deg, #e7e7e7 0%, #f4f4f4 25%, #f4f4f4 75%, #e7e7e7 100%)'
  }
  const triangleStyle = {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(10% 0, 50% 50%, 90% 0)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  }

  const endCapStyle = {
    width: '100%',
    height: '50vh',
    backgroundColor: theme.palette.endCap.background
  }

  const Spacer = ({color}) => (
    <Box sx={spacerStyle}>
      <Box sx={{...triangleStyle, ...(color && {backgroundColor: color})}} />
    </Box>
  )

  return (
    <Box sx={{width: '100vw', height: '100vh', overflow: 'auto'}}>
      <Head>
        <title>Ryan Tso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/RyanTsoLogo.ico" />
      </Head>

      <Title />
      <Navbar />

      <Spacer />

      <Box id="aboutme" sx={headerContainerStyle}>
        <Fade duration={1500} triggerOnce style={{display: 'flex', width: '100%'}}>
          <Typography sx={sectionHeaderStyle}>
            About Me
          </Typography>
        </Fade>
      </Box>
      <AboutMe data={props.aboutMeData}/>

      <Spacer color='rgba(154,167,176,0.2)'/>

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
      <Skills data={props.skillsData}/>

      <Spacer />

      <Box id="experience" sx={headerContainerStyle}>
        <Fade duration={1500} triggerOnce style={{display: 'flex', width: '100%'}}>
          <Typography sx={sectionHeaderStyle}>
            Experience
          </Typography>
        </Fade>
      </Box>
      <Experience data={props.experienceData}/>

      <Spacer color='rgba(154,167,176,0.2)'/>

      <Box id="projects" sx={headerContainerStyle}>
        <Fade duration={1500} triggerOnce style={{display: 'flex', width: '100%'}}>
          <Typography sx={sectionHeaderStyle}>
            Projects
          </Typography>
        </Fade>
      </Box>
      <Projects data={props.projectsData}/>

      <Spacer />

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
