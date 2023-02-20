import { useEffect, useRef } from "react";

const Home = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const shortner = document.getElementById("url-shortner");
    const knowledge = document.getElementById("knowledge-base");
    const file = document.getElementById("file-hosting");
    
    const utilitiesItems = document.getElementById("utilities-items");
    const linkShortner = document.getElementById("link-shortner");
    const linkKnowledge = document.getElementById("link-knowledge");
    const linkFile = document.getElementById("link-file");

    const handleScroll = (e) => {      
      if (
        utilitiesItems.offsetTop >= shortner.offsetTop &&
        utilitiesItems.offsetTop + 45 <= shortner.offsetTop + 495
      ) {
        linkShortner.classList.add("active");        
      } else {
        linkShortner.classList.remove("active");        
      }
      if (
        utilitiesItems.offsetTop >= knowledge.offsetTop - 45 &&
        utilitiesItems.offsetTop + 90 <= knowledge.offsetTop + 495
      ) {
        linkKnowledge.classList.add("active");
      } else {
        linkKnowledge.classList.remove("active");
      }
      if (
        utilitiesItems.offsetTop >= file.offsetTop - 90 &&
        utilitiesItems.offsetTop <= file.offsetTop + 495
      ) {
        linkFile.classList.add("active");
      } else {
        linkFile.classList.remove("active");
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
