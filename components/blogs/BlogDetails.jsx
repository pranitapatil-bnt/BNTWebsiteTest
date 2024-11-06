import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Box, Typography } from '@mui/material'
import { FaArrowLeft } from "react-icons/fa";
import BlogCard from './BlogCard'


const BlogDetails = ({ blogDetail }) => {

    const [allBlogs, setAllBlogs] = useState(null)

    const getBlogsJsonData = async () => {
        console.log("Inside getBlogsJsonData")
        const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/allblogs/all_blogs_json.txt')
        const data = await response.json();
        console.log("Inside getBlogsJsonData  data : ", data)


        data.allblogs.sort((a, b) => a.priority - b.priority)
        setAllBlogs(data.allblogs)

    }

    const [blogDetailsFromS3, setBlogDetailsFromS3] = useState('')
    // let allBlogs = []
    if ((window !== 'undefined') && (allBlogs === null)) {
        const allBlogsFromLocatStrorage = JSON.parse(localStorage.getItem('allBlogs'))
        if (allBlogsFromLocatStrorage) {
            setAllBlogs(allBlogsFromLocatStrorage)
        }
        else {
            getBlogsJsonData()
        }
    }
    const { blogIndex, folderName } = blogDetail;


    const getRandomIndex = (blogIndex, arrayLength) => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * arrayLength);
        } while (randomIndex === blogIndex);
        return randomIndex;
    };

    let randomIndex1, randomIndex2;

    if (allBlogs) {
        do {
            randomIndex1 = getRandomIndex(blogIndex, allBlogs.length);
            randomIndex2 = getRandomIndex(blogIndex, allBlogs.length);
        } while (randomIndex1 === randomIndex2);
    }

    const getBlogDetails = async () => {
        const response = await fetch(`https://bntblogs.s3.ap-south-1.amazonaws.com/contents/${folderName}/${folderName}.txt`)
        const data = await response.text()
        setBlogDetailsFromS3(data)
    }


    useEffect(() => {
        getBlogDetails()
    }, [folderName])

    useEffect(() => {
        if (blogDetailsFromS3 && allBlogs) {
            const blogDetails_left_container = document.querySelector('.blogDetails_left_container')

            while (blogDetails_left_container.firstChild) {
                blogDetails_left_container.removeChild(blogDetails_left_container.firstChild);
            }

            blogDetails_left_container.innerHTML = blogDetailsFromS3;
        }
    }, [blogDetailsFromS3, allBlogs])


    return (
        <>
            {
                allBlogs && (
                    <Box className={'blogDetails_outer_container'} >
                        <Link href={'/blogs'}>
                            <Typography className={'blogDetails_BackToAllBlogs'} >
                                <FaArrowLeft />  Back to All Blogs
                            </Typography>
                        </Link>
                        <Box className={'blogDetails_inner_container'} >
                            <Box className={'blogDetails_left_container'} ></Box>
                            <Box sx={{ width: { sm: '30%', xs: '100%' }, display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: { sm: '35px', xs: '0' } }}>
                                <BlogCard cardDetail={allBlogs[randomIndex1]} blogIndex={randomIndex1} wrapHeight={true} title={allBlogs[randomIndex1].heading} cardImage={allBlogs[randomIndex1].image} desc={allBlogs[randomIndex1].desc} />
                                <BlogCard cardDetail={allBlogs[randomIndex2]} blogIndex={randomIndex2} wrapHeight={true} title={allBlogs[randomIndex2].heading} cardImage={allBlogs[randomIndex2].image} desc={allBlogs[randomIndex2].desc} />
                            </Box>

                        </Box>
                        <Link href={'/blogs'}>
                            <Typography sx={{ marginTop: '10px', color: '#347ae3', cursor: 'pointer', fontSize: '17px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaArrowLeft />  Back to All Blogs
                            </Typography>
                        </Link>
                        <Link href={'/blogs'}>
                            <div style={{ cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '7px', justifyContent: 'center', position: 'fixed', zIndex: 100, top: '50%', right: 0, width: '90px', height: '30px', backgroundColor: 'rgb(212, 214, 212,0.4)' }}>
                                <FaArrowLeft />  All blogs
                            </div>
                        </Link>
                    </Box>

                )
            }


            <style jsx>
                {
                    `p{
                    color:#5e5e5e;
                    font-size:16px;
                    font-weight:300;
                }`
                }

            </style>
        </>
    )
}

export default BlogDetails