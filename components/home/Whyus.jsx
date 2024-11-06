import React from 'react'
import UsCard from './UsCard'
import { Stack, Box } from '@mui/material';
import stylesWhyus from '../../styles/home/whyus.module.css';

// import Lineanm from './lineanm'


const desc = ['Our customers are our priority! We thoroughly evaluate and offer the best suitable business solutions for our customers.',
'Our flexibility allows easy adaptability and a seamless approach to any tech development.',
'Utilizing advanced technology, we ensure to apply the best tech practices.',
'Our experts have absolute domain know-how and in-depth knowledge offering the most relevant and suitable business solutions.'
]


const Whyus = () => {
    return (
        <>
            <Box sx={{ padding: {sm:'0 80px 0 80px',xs:'0 10px 0 10px'}, height: {sm:'500px',xs:'auto'},position:'relative' }} >
            <img className={stylesWhyus.circles2} src="/home/images/svgani/circle2.svg" style={{ width: '250px',position:'absolute',right:'100px',top:'-50px'  }} />
                <Stack direction={{sm:'row',xs:'column'}} spacing={6}>
                    <Box data-aos="flip-down" data-aos-once="false"  >
                        <UsCard  title={'Customer Centric'} cardImage={'customerMinNew'} desc={desc[0]} />
                    </Box>
                    <Box data-aos="flip-down" data-aos-delay="150" data-aos-once="false" sx={{ marginTop: {sm:'50px!important',xs:'50px!important'} }}>
                        <UsCard title={'Flexible Development'} cardImage={'developmentMinNew'} desc={desc[1]} />
                    </Box>
                    <Box data-aos="flip-down" data-aos-delay="300" data-aos-once="false" sx={{ marginTop: {sm:'100px!important',xs:'50px!important'} }}>
                        <UsCard title={'Optimizing Technology'} cardImage={'technologyMin'} desc={desc[2]} />
                    </Box>
                    <Box  data-aos="flip-down" data-aos-delay="450" data-aos-once="false" sx={{ marginTop: {sm:'150px!important',xs:'50px!important'} }}>
                        <UsCard title={'Domain Expert'} cardImage={'expertWhyUsMinNew'} desc={desc[3]} />
                    </Box>
                </Stack>
                <img className={stylesWhyus.circles3} src="/home/images/svgani/circle3.svg" style={{ width: '250px',position:'absolute',bottom:'0px'  }} />
            </Box>
        </>
    )
}

export default Whyus