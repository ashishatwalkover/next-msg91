import Head from "next/head"
import { useRouter } from 'next/router'
import metadata from "../components/meta.json"
const HeadTag =()=> {
  const router = useRouter()
  var path = router.pathname.split("/")[1];
  const rout = metadata.title
  return (
    <>
  <Head>
      
    <title>{metadata[path].title}</title>
    <meta name="description" content={metadata[path].description}></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>    
    <link rel="icon" href="/fav.svg"/>
    { path === '' || path.length > 2 ?
      <>
      {console.log(path)}
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/global.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'in' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/in.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'us' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="/styles/us.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'uk' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/uk.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'ph' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/ph.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'sg' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/sg.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'es' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="/styles/es.css" rel="stylesheet"/>
      </>
      :''
    }    
    { path === 'ae' ?
      <>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>

        <link href="/styles/ae.css" rel="stylesheet"/>
      </>
      :''
    }    
  </Head>
    
    </>
  )
};
export default HeadTag;