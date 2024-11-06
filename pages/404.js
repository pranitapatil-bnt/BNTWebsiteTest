import Link from 'next/link'
import { useRouter } from 'next/router'

const Errorpage = () => {
    const router = useRouter();
    return (
      <>
          <h1> Page Not Found</h1>
          <button onClick={()=>{router.push('/')}}>Back to Home</button>
          {/* <Link href="/">Back to Home</Link> */}
      </>
  )
}

export default Errorpage