import {Box, IconButton, Stack, Typography, useTheme} from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import { sectionInnerLayout, sectionLayout } from "../styles/index";
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from "next/image";


export default function AboutMe() {
  const theme = useTheme();

  return (
    <Box sx={{...sectionLayout, backgroundColor: theme.palette.aboutColor.background}}>
      <Box sx={sectionInnerLayout}>
        <Box sx={{position: 'relative', width: '30%', minWidth: '150px'}}>
          <Box sx={{
            position: 'relative',
            top: '20px',
            display: 'flex',
            zIndex: 3,
            height: 0,
            width: '95%',
            paddingBottom: '95%',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 5
          }}>
            <Image
              layout="fill"
              objectFit='cover'
              priority={true}
              quality={100}
              src="/../public/RyanPic.jpg"
              alt="Ryan's Picture"/>
          </Box>
          <Slide direction="left" triggerOnce>
            <Box sx={{position: 'relative', display: 'flex', zIndex: 2, mt: "-75px", height: '200px', width: '100vw', float: 'right',  backgroundColor: theme.palette.aboutColor.backing}}>
              <Stack direction='column' sx={{position: 'relative', ml: 'auto', mt: 'auto', p: '5px', alignItems: 'flex-end'}}>
                <Slide cascade damping={0.1} direction="left" triggerOnce>
                  <IconButton sx={{borderRadius: '0px', p: '0'}}>
                   <DescriptionIcon sx={{color: 'white', fontSize: '60px', '&:hover': {color: '#f1c6d1'}}}/>
                  </IconButton>
                  <Typography sx={{fontSize: {xs: '0.6rem', sm: '0.80rem', md: '1rem'}, color: 'white'}}>
                    View and print my resume here!
                  </Typography>
                </Slide>
              </Stack>
            </Box>
          </Slide>
        </Box>

        <Box sx={{position: 'relative', display: 'flex', flexDirection: "column", width: '70%', p: '20px'}}>
          <Fade fraction={0.5} triggerOnce>
          <Typography align='justify' sx={{
            fontSize: {md: '1.1rem', lg: '1.2rem', xl: '1.3rem'},
            fontWeight: 300,
            color: theme.palette.aboutColor.text,
          }}>
            I'm a recent graduate who is passionate about creating interactive, easy-to-use, and effective
            full-stack web applications. <br/> <br/>I specialize in JavaScript, React, Next.js, and RESTful APIs along with a myriad of
            backend technology; though if there is tech that I'm not familiar with, it won't take long for me to pick it up! <br/> <br/>
            Being a freelance artist on the side, I am highly critical of my own work, which is why I give it my all when it
            comes to the appearance and functionality of what I produce and the effectiveness of translating requirements to
            solutions.
          </Typography>
          </Fade>
        </Box>
      </Box>

      <Box sx={{position:'relative', width: '100%', height: '100px', backgroundColor: theme.palette.aboutColor.background}}>
        <Slide direction="right">
          <Box sx={{position: 'relative', width: {xs: "100%", sm: '80%', md: '60%'}, ml: 'auto', backgroundColor: theme.palette.aboutColor.educationBacking}}>
            <Stack direction="row" spacing={2} sx={{ml: '10px', alignItems: 'center'}}>
              <SchoolIcon sx={{color: 'white', fontSize: '75px'}}/>
              <Stack direction="column">
                <Fade>
                  <Slide cascade damping={0.2} direction="right">
                    <Typography sx={{fontSize: {sm: '1rem', md: '1.5rem'}, fontWeight: 400, lineHeight: '20px', color: 'white'}}>Bachelor of Computer Science</Typography>
                    <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>2019 - 2023</Typography>
                    <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>University of British Columbia</Typography>
                  </Slide>
                </Fade>
              </Stack>
            </Stack>
          </Box>
        </Slide>
      </Box>

    </Box>
  )
}