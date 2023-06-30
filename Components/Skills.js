import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import {sectionInnerLayout, sectionLayout} from "../pages/index";
import {Slide} from "react-awesome-reveal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useIsElementVisible} from "../Hooks/useIsElementVisible";
import {setScrollLocation} from "../redux/features/navigation/scroll-location";
import GearsIcon from '../public/Gears.png';
import GearIcon from '../public/GearIcon.png';


export default function Skills({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isElementVisible = useIsElementVisible(ref.current, {rootMargin: theme.rootMargins.scrollInViewSection});
  const selection = useSelector((state) => state.scrollLocation.value)

  useEffect(() => {
    if (isElementVisible) dispatch(setScrollLocation('Skills'))
  }, [isElementVisible])

  const [expertise, setExpertise] = useState(0);

  const headerStyle = {
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: theme.palette.skills.text,
    fontSize: {xs:'1.5rem', sm:'1.75rem', md: '2rem'}
  }

  const textStyle = {
    fontSize: '1.4rem',
    fontFamily: theme.typography.navBar,
    fontWeight: 300,
    userSelect: 'none',
  }

  const selectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    color: theme.palette.skills.text,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.skills.highlight,
      color: 'white',
      cursor: 'default',
    }
  }

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: '10px',
    mb: '10px',
    width: {xs: '80px', sm: '100px'},
    height: {xs: '96px', sm: '120px'},
    backgroundColor: theme.palette.skills.meterHeader,
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)'
  }

  const iconStyle = {
    color: theme.palette.skills.backgroundAlt,
    fontSize: {xs: '50px', sm: '70px'}
  }

  const meterContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '30px',
    backgroundColor: theme.palette.skills.meterBackground
  }

  const meterHeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    backgroundColor: theme.palette.skills.meterHeader
  }

  const meterLevelStyle = {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: `calc(${100 * expertise}% - 80px)`,
    height: '100%',
    alignItems: 'center',
    pr: '5px',
    backgroundColor: theme.palette.skills.highlight,
    transition: 'all 0.5s cubic-bezier(.55, .15, .45, .85)'
  }

  const backgroundIcon1ContainerStyle = {
    position: 'absolute',
    height: '35vw',
    minHeight: '400px',
    width: '35vw',
    minWidth: '400px',
    right: 0,
    bottom: 0,
    transform: 'translate(50%, 50%)',
  }

  const backgroundIcon1Style = {
    width: '100%',
    height: '100%',
    opacity: 0.3,
    backgroundImage: `url(${GearIcon.src})`,
    backgroundSize: 'cover',
  }

  const backgroundIcon2Style = {
    position: 'absolute',
    height: '30vw',
    minHeight: '400px',
    width: '30vw',
    minWidth: '400px',
    left: 0,
    top: 0,
    transform: 'translate(-30%, -40%) rotate(180deg)',
    opacity: 0.3,
    backgroundImage: `url(${GearsIcon.src})`,
    backgroundSize: 'cover',
  }


  const SKILLS_ICONS = [
    <ScreenshotMonitorIcon sx={iconStyle}/>,
    <AccountTreeIcon sx={iconStyle}/>,
    <GroupsIcon sx={iconStyle}/>,
  ]

  return (
    <Box ref={ref} sx={sectionLayout}>
      <Slide direction="right">
        <Box sx={{...sectionLayout, background: '', backgroundColor: theme.palette.skills.background}}>
          <Box sx={backgroundIcon1ContainerStyle}>
            <Box className={selection === "Skills" ? "spinning" : ""} sx={backgroundIcon1Style} />
          </Box>
          <Box sx={backgroundIcon2Style} />
          <Stack sx={{...sectionInnerLayout, flexDirection: 'column', backgroundColor: theme.palette.skills.backgroundAlt}}>
            <Stack
              direction="row"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem/>}
              sx={{pb: '20px', pt: '20px'}}
            >
              {
                data.map((item, index) => (
                  <Stack
                    key={index}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems='center'
                    sx={{width: `${100 / data.length}%`, overflow: 'hidden'}}
                  >
                    <Typography align="center" sx={headerStyle}> {item.name} </Typography>

                    <Box sx={iconContainerStyle}>
                      {SKILLS_ICONS[index]}
                    </Box>
                    {
                      item.skills.map((skill, index) => (
                        <Box
                          key={index}
                          onMouseOver={() => setExpertise(skill.value)}
                          onMouseLeave={() => setExpertise(0)}
                          sx={selectionStyle}
                        >
                          <Slide cascade direction="up">
                            <Typography
                              align="center"
                              sx={{
                                ...textStyle,
                                fontSize: {xs: `${0.3 + skill.value * 1.5}rem`, sm: `${0.5 + skill.value * 1.5}rem`}
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Slide>
                        </Box>
                      ))
                    }
                  </Stack>
                ))
              }
            </Stack>

            <Box sx={meterContainerStyle}>
              <Box sx={meterHeaderStyle}>
                <Typography sx={{color: 'white'}}>
                  Expertise
                </Typography>
              </Box>
              <Box sx={meterLevelStyle}>
                {
                  expertise > 0 &&
                  <Typography sx={{ml: 'auto', color: 'white'}}>
                    {100 * expertise}%
                  </Typography>
                }
              </Box>
            </Box>
          </Stack>
        </Box>
      </Slide>
    </Box>
  )
}
