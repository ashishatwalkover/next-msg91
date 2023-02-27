import { useEffect, useRef } from "react";
import Airtable from "airtable";
import $ from 'jquery';

const Home = () => {
  useEffect(() => {
    const handleScroll = (e) => {      
      console.log($("#link-knowledge").offset().top , $("#knowledge-base").offset().top);
      if ( $("#link-shortner").offset().top >= $("#url-shortner").offset().top) {
        $(".us-nav-options").removeClass("active");
        $("#link-shortner").addClass("active");
      }
      if ( $("#link-knowledge").offset().top >= $("#knowledge-base").offset().top) {
        $(".us-nav-options").removeClass("active");
        $("#link-knowledge").addClass("active");
      }
      if ( $("#link-file").offset().top >= $("#file-hosting").offset().top) {
        $(".us-nav-options").removeClass("active");
        $("#link-file").addClass("active");
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
