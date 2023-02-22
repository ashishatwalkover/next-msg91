import Head from "next/head"
import { useRouter } from 'next/router'
const HeadTag =()=> {
  const router = useRouter()
  var path = router.pathname.split("/")[1];
  return (
    <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>    
    <link rel="icon" href="/fav.svg"/>
    { path === '' ?
      <>
        <link href="/styles/global.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'in' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/in.css" rel="stylesheet"/>
      </>
      :''
    }    
  </Head>
    
    </>
  )
};
export default HeadTag;
//in, ph, sg, es, ae, uk, us