import Image from "next/image";
import {Box, Button, Stack, Typography, useTheme} from "@mui/material";
import ScrollIntoView from 'react-scroll-into-view';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";

export default function Title() {
  const theme = useTheme();

  const [hovering, setHovering] = useState(false);

  return (
      <Box sx={{position: "relative", height: "100vh", minHeight: '500px'}}>
        <Image
          layout="fill"
          objectFit='cover'
          priority={true}
          quality={100}
          src="/../public/TitleBackground.jpg"
          alt="TitleBackground"/>
        <Box sx={{position: "relative", display:'flex', flexDirection: "column", ml: 'auto', mr: 'auto', width: "60%", minWidth: 375, height: "100%"}}>
          <Stack direction="column" alignItems='flex-end' sx={{position: "relative", width: '250px', top: "11%", left: "10%"}}>
            <Stack direction="row" sx={{position: "relative", alignItems: "end"}}>
              <Typography variant="h1" sx={{fontWeight: "light", fontSize: "8rem", color: theme.palette.title.text}}> R </Typography>
              <Typography variant="h1" sx={{position: 'relative', fontWeight: "light", fontSize: "2.5rem", bottom: '20px', color: theme.palette.title.text}}> YAN </Typography>
              <Typography variant="h1" sx={{fontWeight: "light", fontSize: "8rem", color: theme.palette.title.text}}> T </Typography>
              <Typography variant="h1" sx={{position: 'relative', fontWeight: "light", fontSize: "2.5rem", bottom: '20px', color: theme.palette.title.text}}> SO </Typography>
            </Stack>
              <Typography variant="h2" sx={{position: 'relative', fontWeight: "light", fontSize: "1.5rem", bottom: '18px', color: theme.palette.title.text}}> Full-Stack Developer </Typography>
          </Stack>
          <Stack direction="column" sx={{position: 'relative', ml: 'auto', mr: 'auto', top:'25%', alignItems: 'center'}}>
            <Typography noWrap sx={{
              fontFamily: theme.typography.sectionHeader,
              fontWeight: 300,
              fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem'},
              color: theme.palette.title.text}}
            >
              Welcome to everything about me
            </Typography>
            <Box sx={{width: '20%', mt: '20px',}}>
              <ScrollIntoView selector='#aboutme'>
                <Button
                  variant="outlined"
                  endIcon={<ArrowRightIcon className='arrowIcon' sx={{transition: 'transform 0.3s ease'}} />}
                  sx={{
                    width: '100%',
                    borderRadius: '0px',
                    color: theme.palette.title.text,
                    borderColor: theme.palette.title.text,
                    fontFamily: theme.typography.sectionHeader,
                    transition: 'all 0.4s ease',
                    "&:hover": {
                      backgroundColor: theme.palette.title.text,
                      borderColor: theme.palette.title.text,
                      color: 'white',
                      "& .arrowIcon": {
                        transform: 'rotate(90deg)',
                        transition: 'transform 0.3s ease'
                      }
                    }
                }}
                >
                  Start
                </Button>
              </ScrollIntoView>
            </Box>
          </Stack>
        </Box>
      </Box>
  )

}