import {Box, IconButton, Stack, Typography, useTheme} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from "next/image";


export default function AboutMe() {
  const theme = useTheme();

  return (
    <Box sx={{position: 'relative', display: 'flex', width: '100%', height: '650px', backgroundColor: theme.palette.aboutColor.background}}>
      <Box
        sx={{
        position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        ml: 'auto',
        mr: 'auto',
        width: "60%",
        minWidth: '500px',
        maxWidth: '1000px',
        height: "100%",
      }}>

        <Box sx={{position: 'relative', width: '30%', minWidth: '200px'}}>
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
            boxShadow: 5}}
          >
            <Image
              layout="fill"
              objectFit='cover'
              priority={true}
              quality={100}
              src="/../public/RyanPic.jpg"
              alt="Ryan's Picture"/>
          </Box>
          <Box sx={{position: 'relative', display: 'flex', zIndex: 2, height: '250px', width: '100vw', float: 'right', top: 'calc(0% - 125px)',  backgroundColor: theme.palette.aboutColor.backing}}>
            <Stack direction='column' sx={{position: 'relative', ml: 'auto', mt: 'auto', p: '5px', alignItems: 'flex-end'}}>
              <IconButton sx={{borderRadius: '0px', p: '0'}}>
               <DescriptionIcon sx={{color: 'white', fontSize: '60px', '&:hover': {color: '#f1c6d1'}}}/>
              </IconButton>
              <Typography sx={{fontSize: {xs: '0.8rem', md: '1rem'}, color: 'white'}}>
                View and print my resume here!
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box sx={{position: 'relative', display: 'flex', flexDirection: "column", width: '70%', p: '20px'}}>
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
        </Box>
      </Box>

      <Box sx={{position: 'absolute', width: '60%', right: 0, bottom: '20px', height: '75px', mt: 'auto', mb: '20px', backgroundColor: theme.palette.aboutColor.educationBacking}}>
        <Stack direction="row" spacing={2} sx={{ml: '10px', alignItems: 'center'}}>
          <SchoolIcon sx={{color: 'white', fontSize: '75px'}}/>
          <Stack direction="column">
            <Typography sx={{fontSize: {sm: '1rem', md: '1.5rem'}, fontWeight: 400, lineHeight: '20px', color: 'white'}}>Bachelor of Computer Science</Typography>
            <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>2019 - 2023</Typography>
            <Typography sx={{fontSize: {xs: '0.8rem', sm: '0.8rem', md: '1rem'}, fontWeight: 300, lineHeight: '20px', color: 'white'}}>University of British Columbia</Typography>
          </Stack>
        </Stack>
      </Box>

    </Box>
  )
}