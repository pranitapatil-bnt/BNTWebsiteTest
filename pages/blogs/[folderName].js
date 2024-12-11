// import React from 'react'
// // import BlogDetails from '../../components/blogs/BlogDetails'
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic'

// const DynamicBlogDetails = dynamic(() => import('../../components/blogs/BlogDetails'), {
//     ssr: false
//   })


// const Blogdetails = () => {

//     const router = useRouter()
//     const cardDetail = router.query
//     console.log("Card Details : ", cardDetail)

//     return (
//         <>
//             <DynamicBlogDetails blogDetail={cardDetail} />
//         </>
//     )
// }

// export default Blogdetails

import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicBlogDetails = dynamic(() => import('../../components/blogs/BlogDetails'), {
    ssr: false
});

const BlogDetails = () => {
    const router = useRouter();
    const { folderName } = router.query;

    return (
        <DynamicBlogDetails blogDetail={{ folderName }} />
    );
};

export default BlogDetails;