import React, { useEffect, useState } from 'react';
import { Box, Stack, styled, Typography, Grid } from '@mui/material';
import styles from '../../styles/blogs/blogs.module.css'
import BlogCard from './BlogCard'
import stylesServices from '../../styles/home/services.module.css'

// const cardDetails = [
//     {
//         heading: 'Top Payment Trends 2023',
//         desc: 'The digital payment industry is witnessing rapid growth. In 2021, it was estimated that the worldwide digital payments market generated around $88.1 billion in revenue.',
//         image: 'topPayments23',
//         folderName: 'Top_Payment_Trends_2023',
//         priority: 1,
//         category: 'Digital payments'

//     },
//     {
//         heading: 'Story of Usha Waghmare',
//         desc: 'This Mother’s Day we thought of bringing to you an aspiring story of a woman and a mother who has had challenges and yet kept going to become someone for herself and her children.',
//         image: 'mothersdayBlog-min',
//         folderName: 'Mothers_Day',
//         priority: 2,
//         category: ''

//     },
//     {
//         heading: '5 Areas AI is affecting',
//         desc: 'The evolution of technology has made our life much easier and fast.',
//         image: 'aiBlog-min',
//         folderName: '5_areas_AI_is_affecting_Fintech',
//         priority: 3,
//         category: 'Mobile payment'
//     },
//     {
//         heading: 'How Fintech Is Rattling',
//         desc: 'For a time being, consumers have accepted the lack of technology found at traditional banks. But with fintech on the ridge, banks are toiling to keep up and offer customers the innovation they crave.',
//         image: 'fintechBankingBlog-min',
//         folderName: 'How_Fintech_Is_Rattling',
//         priority: 4,
//         category: 'Mobile payment'
//     },
//     {
//         heading: 'Womens Day',
//         desc: 'More Power and Strength to the Courageous Women- Happy Women’s Day.Being a woman there are many roles and responsibilities to fulfill.',
//         image: 'womensDayBlog-min',
//         folderName: 'Womens_day',
//         priority: 5,
//         category: ''
//     },
//     {
//         heading: '5 reasons why e-Wallets are safe for your customers',
//         desc: 'The traditional methods of payment have witnessed a huge transformation.',
//         image: 'ewalletBlog-min',
//         folderName: '5_reasons_why_e_wallets_are_safe',
//         priority: 6,
//         category: 'Cryptocurrency'
//     },
//     {
//         heading: 'Top Payment Trends 2021',
//         desc: 'The traditional methods of payment have witnessed a huge transformation.',
//         image: 'topPaymentsBlog-min',
//         folderName: 'Top_Payment_Trends_2021',
//         priority: 7,
//         category: 'Cryptocurrency'
//     },
//     {
//         heading: 'Blockchain Revolution or Evolution?',
//         desc: 'Blockchain technology seems to be a complicated concept associated with cryptocurrency Bitcoin.',
//         image: 'blockchainBlog-min',
//         folderName: 'Blockchain_Revolution_or_Evolution',
//         priority: 8,
//         category: 'Fintech'
//     },
//     {
//         heading: 'Fostering Innovation and Competition',
//         desc: 'With recent digital transformations, even banks are moving towards digitizing and innovation.',
//         image: 'openBanksBlog-min',
//         folderName: 'Fostering_Innovation_and_Competition',
//         priority: 9,
//         category: 'Fintech'
//     },
//     {
//         heading: 'How AI is transforming the Fintech industry',
//         desc: 'When we talk about finance, the first thing that pops into our head is ‘information’. More so, it relates to essential and subtle information.',
//         image: 'fintechBlog-min',
//         folderName: 'How_is_AI_transforming_Fintech',
//         priority: 10,
//         category: 'Wallets'
//     },
//     {
//         heading: 'Does the evolving payment system still require a human touch?',
//         desc: 'As times have transcended the core payment process to online, digital transformation has amalgamated payment systems to be digitally flexible.',
//         image: 'humanTouchBlog-min',
//         folderName: 'Contactless_Payment',
//         priority: 11,
//         category: 'Wallets'
//     },
//     {
//         heading: 'The New Social Payment Phenomena',
//         desc: 'As social distancing is the new wave, A global study suggests that, “79% of respondents are now tapping into contactless payments”.',
//         image: 'contactlessPyamentBlog-min',
//         folderName: 'Contactless_Payment ',
//         priority: 12,
//         category: 'BaaS'
//     }
// ]



const Blogs = () => {

    const [allBlogs, setAllBlogs] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [currentBlogCategory, setCurrentBlogCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const [blogsPerPage, setBlogsPerPage] = useState(1)
    const [pagesCount, setPagesCount] = useState(0)
    const [allBlogsForLocalStorage, setAllBlogsForLocalStorage] = useState([])



    const getBlogsJsonData = async () => {
        const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/allblogs/all_blogs_json.txt')
        const data = await response.json();

        data.allblogs.sort((a, b) => a.priority - b.priority)

        setAllCategories(data.category)
        setAllBlogs(data.allblogs)
        setBlogsPerPage(data.pagecount)
        setAllBlogsForLocalStorage(data.allblogs)

        const pagesCount = Math.ceil(data.allblogs.length / data.pagecount)
        setPagesCount(pagesCount)
        if(window!=='undefined'){
            localStorage.setItem('allBlogs', JSON.stringify(data.allblogs))
        }
    }

    useEffect(() => {
        getBlogsJsonData();
    }, [])

    const handleBlogCategory = (e) => {
        let allBlogs=[]
        if(window!=='undefined'){
             allBlogs = JSON.parse(localStorage.getItem('allBlogs'))
        }
        if (e.target.value === 'All') {
            setAllBlogs(allBlogs);
            setCurrentBlogCategory('All')
            const pagesCount = Math.ceil(allBlogs.length / blogsPerPage)
            setPagesCount(pagesCount)
            setCurrentPage(1)
        }
        else {
            const result = allBlogs.filter(blog => blog.category === e.target.value)
            result && setAllBlogs(result);
            setCurrentBlogCategory(e.target.value)
            const pagesCount = Math.ceil(result.length / blogsPerPage)
            setPagesCount(pagesCount)
        }
    }

    const handlePageClick = (e) => {
        const page = Number(e.target.id)
        setCurrentPage(page)
    }

    const handlePagination = () => {
        if(allBlogsForLocalStorage.length>0){
            const startIndex = currentPage * blogsPerPage - blogsPerPage
            let allBlogs=[]
            if(window!=='undefined'){
                 allBlogs = JSON.parse(localStorage.getItem('allBlogs'))
            }
            const blogsForPage = allBlogs.slice(startIndex, startIndex + blogsPerPage)
            setAllBlogs(blogsForPage)
        }
    }

    const handlePrev = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        currentPage < pagesCount
            && setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        handlePagination()
    }, [currentPage,allBlogsForLocalStorage])

    return (
        <>
            <Box className={styles.myBG} sx={{ height: '400px', }}>
                <Box >
                    <Typography data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '600', color: '#fff', fontSize: '100px', textAlign: 'center' }}>
                        Blogs
                    </Typography>
                    <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#fff', maxWidth: '900px', textAlign: 'center' }}>
                        Fuelled with technology, expertise, and experiences. Our team offers an effective combination of broad fintech service expertise
                    </Typography>
                </Box>
            </Box>
            {
                allCategories.length > 0 && (
                    <>
                        <Box sx={{ margin: { sm: '50px 80px 50px 83px', xs: '30px 10px' }, display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {
                                allCategories.map((category) => (<>
                                    <button style={{ border: currentBlogCategory === category ? '1px solid #86cef7' : '1px solid #1e8be1', backgroundColor: currentBlogCategory === category ? '#86cef7' : '#1e8be1', color: 'white', margin: 0, borderRadius:'25px' }} value={category} onClick={handleBlogCategory} className={`${stylesServices.btn} ${stylesServices.fourth}`}>{category}</button>
                                </>))
                            }
                        </Box>
                    </>
                )
            }

            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', margin: '30px 0px' }}>

                <Grid container spacing={4} sx={{ width: { sm: '90vw', xs: '100vw' } }}>
                    {allBlogs.length > 0 ?
                        allBlogs.slice(0, blogsPerPage).map((cardDetail, blogIndex) => (
                            <>
                                <Grid id='blogGrid' item xs={12} sm={6} md={4}>
                                    <BlogCard blogIndex={blogIndex} cardDetail={cardDetail} title={cardDetail.heading} cardImage={cardDetail.image} desc={cardDetail.desc} />
                                </Grid>
                            </>)) :
                        (<Box sx={{ fontSize: '23px', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Blogs Available</Box>)
                    }
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', height: '200px', padding: {sm:'40px 80px',xs:'40px 20px'} }}>
                {
                    allBlogs.length > 0 && pagesCount > 1 && (
                        <>
                            <p style={{ cursor: 'pointer', color: currentPage <= 1 ? 'black' : '#0388fc' }} onClick={handlePrev}>Prev</p>
                            {
                                [...Array(pagesCount)].map((e, i) => (
                                    <>
                                        <p style={{ cursor: 'pointer', color: currentPage === i + 1 ? 'black' : '#0388fc' }} id={i + 1} onClick={handlePageClick}>{i + 1}</p>
                                    </>
                                ))
                            }
                            <p style={{ cursor: 'pointer', color: currentPage >= pagesCount ? 'black' : '#0388fc' }} onClick={handleNext}>Next</p>
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default Blogs