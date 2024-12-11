import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import Link from 'next/link';
import styles from '../../styles/blogs/blogs.module.css'



const UsCard = ({ blogIndex, cardDetail, title, cardImage, desc, wrapHeight }) => {

    let newDesc;
    if (wrapHeight) {
        const newD = desc.split(' ').slice(0, 13).join(' ')
        newDesc = newD + '...'

    }

    return (
        <>
            <Link href={`/blogs/${cardDetail.folderName}` }>

                <Card className={styles.blogCard} elevation={0}>
                    <CardActionArea elevation={0}>
                        <CardMedia
                            className={styles.blogCard_media}
                            sx={{
                                height: 200, 
                                objectFit: 'cover',
                            }}
                            component="img"

                            image={`https://bntblogs.s3.ap-south-1.amazonaws.com/contents/${cardDetail.folderName}/${cardImage}.jpg`}
                            alt=" "  
                        />


                        <CardContent className={styles.blogCard_CardContent} elevation={0}>
                            <Box className={styles.blogCard_CardContent_Box} sx={{ ...(wrapHeight ? { height: 'fit-content' } : { minHeight: { xs: 'auto', sm: '270px' } }), position: { sm: 'relative', xs: 'static' } }}>
                                <Typography className={styles.blogCard_title} gutterBottom variant="h6" component="div">
                                    {title}
                                </Typography>
                                <Typography className={styles.blogCard_desc} variant="body2" color="text.secondary" >
                                    {wrapHeight ? newDesc : desc}
                                </Typography>
                                <Box className={styles.blogCard_readMoreBox} sx={{ marginTop: wrapHeight ? '15px' : '30px', position: { sm: wrapHeight ? 'static' : 'absolute', xs: 'static' } }}>
                                    <Typography className={styles.blogCard_readMoreTitle} >
                                        <p>Read More</p>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>

    );
}

export default UsCard;