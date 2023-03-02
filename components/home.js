import { useEffect, useRef } from "react";
import Airtable from "airtable";
import { useRouter } from 'next/router'
import $ from 'jquery';

const Home = () => {
  const router = useRouter()
  var path = router.pathname.split("/")[1];
  useEffect(() => {
    console.log(path);
    const handleScroll = (e) => {
      if(path.length <= 2){        
        if ( $("#link-shortner").offset()?.top >= $("#url-shortner").offset()?.top) {
          $(".us-nav-options").removeClass("active");
          $("#link-shortner").addClass("active");
        }
        if ( $("#link-knowledge").offset()?.top >= $("#knowledge-base").offset()?.top) {
          $(".us-nav-options").removeClass("active");
          $("#link-knowledge").addClass("active");
        }
        if ( $("#link-file").offset()?.top >= $("#file-hosting").offset()?.top) {
          $(".us-nav-options").removeClass("active");
          $("#link-file").addClass("active");
        }
      }
    };    
    document.addEventListener("scroll", handleScroll);    
  }, []);
  return (
    <>  
    </>
  );
};
export default Home;
