import React from 'react'
import dynamic from 'next/dynamic'
// import Solutionspage from '../components/solutions/Solutionspage'
const Solutionspage = dynamic(() => import('../components/solutions/Solutionspage'), {
    ssr: false,
  })

const solutions = () => {
    return (
        <>
            <Solutionspage />
        </>
    )
}

export default solutions