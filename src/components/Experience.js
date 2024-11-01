import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../styles/style.css';
import '../styles/Experience.css';

const isHorizontal = window.innerWidth < 600;

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    if (isHorizontal) {
      return (  // Added return here
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
      );
    } else {
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
      );
    }
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Experience() {
    const [value, setValue] = React.useState(0);

    const experiences = {
        'UTSA': {
            company: "The University of Texas at San Antonio",
            role: "Computer Science Tutor @",
            duration: "AUG 2024 - PRESENT",
            desc: [
                "Tutored to over 300 students, leading to a 30% increase in average student grades in programming courses.",
                "Led 50+ individualized and group sessions to clarify complex topics such as coding, debugging, and computational thinking, consistently receiving 90% positive feedback on teaching effectiveness.",
                "Collaborated with faculty to align tutoring strategies with course objectives, resulting in a 15% improvement in course success rates and positive feedback for patience and effective teaching methods."
            ]
        },
        'PMCHEF': {
            company: "Planetary Model Characterization Facility, University of Texas at San Antonio",
            role:"Research Engineer @",
            duration: "OCT 2024 - PRESENT",
            desc: [
              "Researched and implemented the Poseidon Python library to streamline astronomical data analysis, enhancing data processing capabilities for complex datasets.",
              "Developed scripts with Poseidon for specific use cases, enabling efficient analysis of astronomical phenomena and improving data accuracy.",
              "Led training sessions on Poseidon, instructing team members on library functionalities and best practices to ensure effective utilization across the research group."
            ]
        },
        'GSSOC': {
            company: "GirlScript Summer of Code",
            role:"Open Source Developer @",
            duration: "APR 2024 - OCT 2024",
            desc: [
                "Contributed to 5+ open-source projects, enhancing functionality and optimizing performance to improve user experience and project reliability, leading to a 25% increase in user satisfaction rating",
                "Worked collaboratively within a team of 10+ developers to implement 20+ bug fixes and feature enhancements using Git and agile methodologies, reducing project completion time by 15%.",
                "Partnered with senior developers to streamline code integration and refine development processes, supporting continuous improvement that resulted in a 40% reduction in integration issues across repositories.",
                "Integrated third-party APIs, adding 5+ new features to web applications and facilitating effective collaboration with global teams to meet project objectives."
            ]
        },
        'GTX': {
            company: "Global Tech Experience x Publicis Sapient",
            role: "Web Development Apprentice @",
            duration: "JAN 2024 - APR 2024",
            desc: [
                "Developed dynamic and responsive websites using HTML, CSS, Bootstrap, and JavaScript, leading to a 20% increase in user engagement and a 35% reduction in bounce rates.",
                "Collaborated with a team of 4 to optimize and debug an existing codebase, resulting in a 50% improvement in page load times and a 30% increase in overall application stability.",
                "Integrated third-party APIs, adding 5+ new features to web applications and facilitating effective collaboration with global teams to meet project objectives."
            ]
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <>
      <div id="experience">
      <h2 className = "header">./experience</h2>
      <Box sx={{ width: '100%' }}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      textColor="inherit" // Ensures text color can be customized
      TabIndicatorProps={{
        style: { backgroundColor: '#64ffda' }, // Custom indicator color
      }}
      sx={{
        '.MuiTab-root': {
          color: '#ccd6f6', // Default tab color
          fontFamily: 'NTR'
        },
        '.Mui-selected': {
          color: '#64ffda', // Active tab color
          fontWeight: 'bold', // Optional: Bold text for active tab
        },
      }}
    >
      {Object.keys(experiences).map((key, i) => (
        <Tab key={key} label={key} {...a11yProps(i)} className="tab-title" />
      ))}
    </Tabs>
  </Box >
  {Object.keys(experiences).map((key, i) => (
    <CustomTabPanel key={key} value={value} index={i}>
      <span className="joblist-job-title">{experiences[key]["role"] + " "}</span>
      <span className="joblist-job-company">{experiences[key]["company"]}</span>
      <div className="joblist-duration">{experiences[key]["duration"]}</div>
      <ul className="job-description">
        {experiences[key]["desc"].map((descItem, i) => (
          <li key={i}>{descItem}</li>
        ))}
      </ul>
    </CustomTabPanel>
  ))}
</Box>

        </div>
        </>
      );
}

export default Experience;
