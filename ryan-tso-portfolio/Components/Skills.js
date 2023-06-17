import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import { sectionInnerLayout, sectionLayout } from "../styles/index";
import {Slide} from "react-awesome-reveal";
import {useState} from "react";


export default function Skills() {
  const theme = useTheme();

  const [expertise, setExpertise] = useState(0);

  const headerStyle = {
    fontWeight: 700,
    color: theme.palette.skills.text,
    fontSize: '1.75rem'
  }

  const textStyle = {
    fontSize: '1.4rem',
    fontFamily: theme.typography.navBar,
    fontWeight: 300,
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
      color:'white',
      cursor: 'default',
    }
  }

  const iconStyle = {
    color: theme.palette.skills.text, fontSize: '70px', mt: '15px', mb: '30px'
  }

  const meterStyle = {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '30%',
    height: '100%',
    pr: '5px',
    backgroundColor: theme.palette.skills.highlight,
    transition: 'all 0.5s ease'
  }

  const SKILLS = [
    {
      name: "Front End",
      icon: <ScreenshotMonitorIcon sx={iconStyle}/>,
      skills: [
        {name: "HTML", value: 0.9},
        {name: "CSS", value: 0.7},
        {name: "JavaScript", value: 0.95},
        {name: "TypeScript", value: 0.5},
        {name: "React.js", value: 0.95},
        {name: "Next.js", value: 0.75},
        {name: "Redux", value: 0.7},
        {name: "Material UI", value: 0.7}
      ]
    },
    {
      name: "Back End",
      icon:  <AccountTreeIcon sx={iconStyle}/>,
      skills: [
        {name: "Java", value: 0.7},
        {name: "Python", value: 0.6},
        {name: "Django", value: 0.65},
        {name: "Node.js", value: 0.7},
        {name: "RESTful APIs", value: 0.95},
        {name: "MySQL", value: 0.6},
        {name: "NoSQL", value: 0.4},
        {name: "Serverless", value: 0.6},
        {name: "Cloud", value: 0.5},
      ]
    },
    {
      name: "Dev Ops",
      icon: <GroupsIcon sx={iconStyle}/>,
      skills: [
        {name: "GitHub", value: 0.7},
        {name: "Agile", value: 0.8},
        {name: "Jira", value: 0.7},
        {name: "Confluence", value: 0.7}
      ]
    }
  ]

  return (
    <Slide direction="right">
      <Box sx={{...sectionLayout, backgroundColor: theme.palette.skills.background}}>
        <Slide direction="up">
          <Stack sx={{...sectionInnerLayout, flexDirection: 'column', backgroundColor: theme.palette.skills.backgroundAlt}}>
            <Stack direction="row" justifyContent="center" divider={<Divider orientation="vertical" flexItem/>} sx={{pb: '20px', pt: '20px'}}>
              {
                SKILLS.map((item, index) => (
                  <Stack direction="column" justifyContent="flex-start" alignItems='center' sx={{width: `${100 / SKILLS.length}%`, overflow: 'hidden'}}>
                    <Typography sx={headerStyle}> {item.name} </Typography>
                    <>{item.icon}</>
                    {
                      item.skills.map((skill, index) => (
                          <Box skillValue={skill.value} onMouseOver={() => setExpertise(skill.value)} onMouseLeave={() => setExpertise(0)} sx={selectionStyle}>
                            <Slide cascade direction="right">
                            <Typography  sx={{...textStyle, fontSize: `${0.8 + skill.value/1.3}rem`}}>{skill.name}</Typography>
                            </Slide>
                          </Box>
                      ))
                    }
                  </Stack>
                ))
              }
            </Stack>

            <Box sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              height: '30px',
              backgroundColor: theme.palette.skills.meterBackground
            }}>
              <Box sx={{display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center', width: '80px', backgroundColor: theme.palette.skills.meterHeader}}>
                <Typography sx={{color: 'white'}}>
                  Expertise
                </Typography>
              </Box>
              <Box sx={{...meterStyle, width: `calc(${100 * expertise}% - 80px)`}}>
                <Typography sx={{ml: 'auto', color: theme.palette.skills.text}}>
                  {100 * expertise}%
                </Typography>
              </Box>
            </Box>

          </Stack>
        </Slide>
      </Box>
    </Slide>
  )
}