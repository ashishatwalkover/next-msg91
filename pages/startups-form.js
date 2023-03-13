import HeadTag from "./head";
import Header from "@/components/header";
import Footertwo from "@/components/footer";
import { MdKeyboardArrowRight, MdDone } from "react-icons/md";

const startup = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className="container mt-md-5 my-md-0 my-5 d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="d-flex col-12 justify-content-center flex-column align-items-md-start me-md-5 me-0 mt-4 mt-md-0 text-center text-md-start align-items-center">
          <h1 className="heading">Apply now</h1>
          <p className="c-fs-1">
            Get a complimentary communication API package for every product
            Startup.
          </p>
          <iframe class="airtable-embed" src="https://tally.so/r/wkdrdM" frameborder="0" onmousewheel="" width="100%" style={{minHeight: '3350px'}}></iframe>
        </div>
        
      </div>      
      <Footertwo />
    </>
  );
};
export default startup;
