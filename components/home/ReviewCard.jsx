import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardActionArea } from '@mui/material';



const ReviewCard = ({imgUrl,name,desg,comment}) => {
    return (
        <Card sx={{ maxWidth: 300, borderRadius: 0, height: '400px', borderRadius: '20px' }} elevation={0}>
            <CardActionArea elevation={0} >

                <CardContent sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#bbdefb', borderRadius: '20px', borderBottomRightRadius: 0 }} elevation={0}>
                    <Box sx={{ backgroundColor: '#fff', width: 96, height: 96, padding: '3px', borderRadius: '50%' }}>
                        <Avatar
                            alt="O"
                            src={`/home/images/clients/${imgUrl}`}
                            sx={{ width: 90, height: 90, border: '3px solid #29b6f6' }}
                        />
                    </Box>
                </CardContent>
                <Box sx={{ backgroundColor: '#bbdefb' }} elevation={0}>
                    <CardContent sx={{ backgroundColor: '#fff', borderTopRightRadius: '20px' }} elevation={0}>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Alexandria', fontWeight: '500', textAlign: 'center' }}>
                           {name}
                        </Typography>
                        <Typography gutterBottom sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#757575', fontSize: '13px', textAlign: 'center' }}>
                            {desg}
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: '10px', fontFamily: 'Alexandria', fontWeight: '300', color: '#212121', fontSize: '15px', textAlign: 'center', borderTop: '2px solid £29b6f6' }}>
                           {comment}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default ReviewCard;





