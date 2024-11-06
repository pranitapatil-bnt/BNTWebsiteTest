import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';


const Privacypolicy = () => {
    const [privacypolicyDetails, setprivacypolicyDetails] = useState('');

    const fetchprivacypolicyDetails = async () => {
        try {
            const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/privacypolicy/privacypolicy.txt');
            const data = await response.text();
            setprivacypolicyDetails(data);
        } catch (error) {
            console.error('Error fetching privacy policy details:', error);
        }
    };

    useEffect(() => {
        fetchprivacypolicyDetails();
    }, []);

    useEffect(() => {
        if (privacypolicyDetails) {
            const privacypolicyContainer = document.querySelector('.privacypolicyDetails_left_container');
            privacypolicyContainer.innerHTML = privacypolicyDetails;
        }
    }, [privacypolicyDetails]);

    return (
        <>
            <Box className={'privacypolicyDetails_outer_container'}>
                
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ height: { xs: 'auto', sm: 'auto' } }}
                >
                    <Box display='flex' className={'privacypolicyDetails_inner_container'}>
                        <Box className={'privacypolicyDetails_left_container'}></Box>
                    </Box>
                </Stack>
                
            </Box>

            <style jsx>
                {`
                    p {
                        color: #5e5e5e;
                        font-size: 16px;
                        font-weight: 300;
                    }
                `}
            </style>
        </>
    );
};

export default Privacypolicy;
