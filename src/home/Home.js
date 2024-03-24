import React from 'react';
import { useHistory } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { REGISTER, PLAN_DETAILS } from '../constants';
import './home.css';

function Home() {
   const history = useHistory();
    const options = [
        {
            label: 'New user',
            icon: '',
            route: REGISTER
        },
        {
            label: 'Registered user',
            icon: '',
            route: PLAN_DETAILS
        }
    ];

    const handleOption =(opt) => {
       history.push(opt.route);
    }

    return (
        <Box className='home-template'>
           {
            options.map((option)=>(
                <Card key={option.label} sx={{ padding:'4vw', cursor:'pointer' }} onClick={()=> handleOption(option)}>
                    <Box className="vertical-align-center">
                       <Typography>
                        {option.label}
                        </Typography>
                    </Box>
                </Card>
            ))
           }
        </Box>
    );
}

export default Home;