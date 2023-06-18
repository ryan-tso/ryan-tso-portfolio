import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import { sectionInnerLayout, sectionLayout } from "../styles/index";
import {Bounce, Slide} from "react-awesome-reveal";
import {useState} from "react";
import bg from "../public/FarmPlot.jpg";

const EXPERIENCE = [
  {
    company: "Ensemble Scientific",
    role: "Full-Stack-Developer",
    period: "2021 - 2022",
    description: "Ensemble Scientific is a company that produces IoT sensors and devices used primarily in the " +
      "measurement of agricultural environments, enabling farms to become 'smart' and allowing farmers to effectively " +
      "monitor and manage their farms to reduce waste and to optimize yield.",
    responsibilities: [

    ],
    skills: [

    ]
  }
]


export default function Experience() {
  const theme = useTheme();

  const [page, setPage] = useState(0);

  const companyNameStyle = {
    fontSize: '1.6rem',
    fontWeight: 100,
    color: 'white'
  }

  const roleStyle = {
    fontSize: '2rem',
    lineHeight: "1.9rem",
    color: 'white'
  }

  const descriptionStyle = {
    fontFamily: theme.typography.sectionHeader,
    fontSize: '1.2rem',
    fontWeight: 300,
    lineHeight: '1.4rem',
    color: 'white',
  }

  const headingStyle = {
    fontSize: '1.3rem',
    fontWeight: 300,
    color: 'white',
    mt: '-0.5rem',
  }

  return (
    <>
      <Box sx={{position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}/>
      <Box sx={{...sectionLayout, backgroundColor: "transparent"}}>
        <Stack spacing="1rem" sx={{...sectionInnerLayout, flexDirection: "column"}}>
          <Box sx={{width: '100%', height: '125px', mt: '30px'}}>
            <Slide cascade damping={0.1} direction="left">
              <Box sx={{position: 'absolute', height: '125px', width: '100vw', right: 0,  backgroundColor: theme.palette.experience.background1}}/>
            </Slide>
            <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%', pt: '5px', pb: '5px', pl: '20px', pr: '20px'}}>
              <Slide cascade damping={0.1} direction="left">
                  <Typography sx={companyNameStyle}> {EXPERIENCE[page].company} </Typography>
                  <Typography sx={roleStyle}> {EXPERIENCE[page].role} </Typography>
                  <Typography sx={companyNameStyle}> {EXPERIENCE[page].period} </Typography>
              </Slide>
            </Box>
          </Box>
          <Slide direction='right'>
            <Box sx={{position: 'relative', width: '100%', p: '20px', backgroundColor: theme.palette.experience.background1}}>
              <Typography align="justify" sx={descriptionStyle}> {EXPERIENCE[page].description}</Typography>
            </Box>
          </Slide>

          <Stack direction="row" spacing="1rem" sx={{position: 'relative', width: '100%', minHeight: '300px'}}>
            <Box sx={{position: 'relative', width: '70%', height: '100%'}}>
              <Slide direction="left">
                <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background1}}>
                  <Typography sx={headingStyle}> Responsibilities and Accomplishments: </Typography>
                </Box>
              </Slide>
            </Box>
            <Box sx={{position: 'relative', width: '30%', height: '100%'}}>
              <Slide direction="up">
                <Box sx={{p: '20px', backgroundColor: theme.palette.experience.background1}}>
                  <Typography sx={headingStyle}> Skills Developed: </Typography>
                </Box>
              </Slide>
            </Box>
          </Stack>

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