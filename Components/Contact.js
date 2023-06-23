import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, Icon, Typography, useTheme } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Slide, Fade } from "react-awesome-reveal";
import { useIsElementVisible } from "../Hooks/useIsElementVisible";
import { setScrollLocation } from "../redux/features/navigation/scroll-location";
import { sectionInnerLayout, sectionLayout } from "../pages/index";


const INFO = [
  {
    title: 'Location',
    description: "Richmond, BC, Canada",
    icon: <LocationOnIcon fontSize="inherit"/>
  },
  {
    title: 'Email',
    description: "ryan_tso@hotmail.com",
    url: 'mailto:ryan_tso@hotmail.com',
    icon: <MailOutlineIcon fontSize="inherit" />
  },
  {
    title: 'Phone',
    description: "778-558-3889",
    icon: <LocalPhoneIcon />
  },
  {
    title: 'LinkedIn',
    description: 'linkedin.com/in/r-tso',
    url: 'https://www.linkedin.com/in/r-tso/',
    icon: <LinkedInIcon fontSize="inherit" />

  },
  {
    title: 'GitHub',
    description: "github.com/ryan-tso",
    url: 'https://github.com/ryan-tso/',
    icon: <GitHubIcon fontSize="inherit" />
  }
]

const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '250px',
  alignItems: 'center',
  color: 'white',
}

const textStyle = {
  fontSize: '1.3rem',
  fontWeight: 200,
}

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  mr: '8px',
  fontSize:'2rem',
}

const ConditionalLink = ({link, condition, children}) => (
  condition ? <Link href={link} rel="noopener noreferrer" target="_blank">{children}</Link> : children
)

export default function Contact() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Contact'))
  },[isElementVisible])

  return (
    <Box ref={ref} sx={{...sectionLayout, backgroundColor: theme.palette.contact.background}}>
      <Box sx={{...sectionInnerLayout, color: 'white', mt: '30px', mb: '20vh', pl: {xs: '10%', sm: 0}}}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={3}
          columnSpacing={5}
          columns={{xs: 1, md: 2, lg: 3}}
        >
          {
            INFO.map((item, index) => (
              <Grid key={index} item>
                <Slide direcction="left" cascade>
                  <Fade>
                    <ConditionalLink link={item.url} condition={item.url}>
                      <Box sx={buttonStyle}>
                        <Icon sx={iconStyle}> {item.icon} </Icon>
                        <Typography sx={textStyle}> {item.description} </Typography>
                      </Box>
                    </ConditionalLink>
                  </Fade>
                </Slide>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}
