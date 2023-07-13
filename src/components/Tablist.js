import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Content from "./content";


const ExampleTabs = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Healthcare" value="1" />
                    <Tab label="Automobile" value="2" />
                    <Tab label="Agriculture" value="3" />
                    <Tab label="Certificate" value="4" />
                    <Tab label="Education" value="5" />
                </TabList>
            </Box>
            <TabPanel value="1"><span><Content/></span>

            </TabPanel>
            <TabPanel value="2">Content Two</TabPanel>
            <TabPanel value="3">Content Three</TabPanel>
            <TabPanel value="4">Content Four</TabPanel>
            <TabPanel value="5">Content Five</TabPanel>
        </TabContext>
    );
};

export default ExampleTabs;
