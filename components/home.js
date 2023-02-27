import { useEffect, useRef } from "react";
import Airtable from "airtable";
import $ from 'jquery';

const Home = () => {
  const aboutRef = useRef();
  var base = new Airtable({apiKey:process.env.NEXT_PUBLIC_Airtable_Auth_Key }).base(process.env.NEXT_PUBLIC_Base_Auth_Key);
  var  dataToPrint ="";
  base('Table 1').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
      dataToPrint+=record.get('Name');
       // console.log( record.get('Name'));//record nane will be here 
    });

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
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
