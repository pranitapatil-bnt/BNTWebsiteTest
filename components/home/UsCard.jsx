import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UsCard = ({ title, cardImage, desc }) => {
  return (
    <Card sx={{ maxWidth: {sm:270,xs:'100vw'}, borderRadius: 0 }} elevation={0}>
      <CardActionArea elevation={0}>
        <CardMedia

          sx={{
            webkitTransition: '0.4s ease',
            transition: '0.4s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.cssText = `-webkit-transform: scale(1.10);
  transform: scale(1.10);`}}
          onMouseOut={(e) => {
            e.target.style.cssText = `-webkit-transform: scale(1);
  transform: scale(1);`}}
          component="img"
          height="160"
          image={`/home/images/whyus/${cardImage}.webp`}
          alt=" "
        />
        <CardContent elevation={0}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Alexandria', fontWeight: '500' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: 'black', fontSize: '16px' }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UsCard;