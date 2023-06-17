import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import { sectionInnerLayout, sectionLayout } from "../styles/index";

const SKILLS = {
  frontend: [
    {name: "HTML", value: 0.9},
    {name: "CSS", value: 0.8},
    {name: "JavaScript", value: 0.95},
    {name: "TypeScript", value: 0.5},
    {name: "React.js", value: 0.95},
    {name: "Next.js", value: 0.75},
    {name: "Redux", value: 0.7},
    {name: "Material UI", value: 0.7}
  ],
  backend: [
    {name: "Java", value: 0.7},
    {name: "Python", value: 0.6},
    {name: "Django", value: 0.65},
    {name: "Node.js", value: 0.7},
    {name: "RESTful APIs", value: 0.95},
    {name: "MySQL", value: 0.6},
    {name: "NoSQL", value: 0.4},
    {name: "Serverless", value: 0.6},
    {name: "Cloud", value: 0.5},
  ],
  devops: [
    {name: "GitHub", value: 0.7},
    {name: "Agile", value: 0.8},
    {name: "Jira", value: 0.7},
    {name: "Confluence", value: 0.7}
  ]
}


export default function Skills() {
  const theme = useTheme();

  const headerStyle = {
    fontWeight: 700,
    color: theme.palette.skills.text,
    fontSize: '1.75rem'
  }

  const textStyle = {
    fontSize: '1rem'
  }

  const iconStyle = {
    color: theme.palette.skills.text, fontSize: '80px'
  }

  return (
    <Box sx={{...sectionLayout, backgroundColor: theme.palette.skills.background}}>
      <Stack sx={{...sectionInnerLayout, flexDirection: 'column', backgroundColor: theme.palette.skills.backgroundAlt}}>
        <Stack direction="row" justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem/>}>
          <Stack direction="column" alignItems='center' sx={{p: '10px'}}>
            <Typography sx={headerStyle}> Front End </Typography>
            <ScreenshotMonitorIcon sx={iconStyle}/>
          </Stack>
          <Stack direction="column" alignItems='center' sx={{p: '10px'}}>
            <Typography sx={headerStyle}> Back End </Typography>
            <AccountTreeIcon sx={iconStyle}/>
          </Stack>
          <Stack direction="column" alignItems='center' sx={{p: '10px'}}>
            <Typography sx={headerStyle}> Dev Ops </Typography>
            <GroupsIcon sx={iconStyle}/>
          </Stack>
        </Stack>

        <Box sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          height: '30px',
          backgroundColor: theme.palette.skills.meterBackground
        }}>
          <Box sx={{display: 'flex', position: 'relative',  alignItems: 'center', pl: '10px', pr: '10px', backgroundColor: theme.palette.skills.meterHeader}}>
            <Typography sx={{color: 'white'}}>
              Expertise
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}