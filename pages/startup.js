import HeadTag from "./head";
import Header from "@/components/header";
import Footertwo from "@/components/footer-sec";
import { MdKeyboardArrowRight, MdDone } from "react-icons/md";

const startup = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className="container mt-md-5 my-md-0 my-5 d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="d-flex col-md-6 col-12 justify-content-center flex-column align-items-md-start me-md-5 me-0 mt-4 mt-md-0 text-center text-md-start align-items-center">
          <h1 className="heading">Expand your Vision with Us</h1>
          <p className="c-fs-1">
            Get a complimentary communication API package for every product
            Startup.
          </p>
          <button className="btn btn-primary c-fs-4 mt-2">Apply Now</button>
        </div>
        <div className="col-12 col-md-6">

        <img className="startup-home-img flip-vertical  " src="/img/startup-home-img.svg" />
        </div>
      </div>
      <section className="c-bg-grey p-5 text-center small-heading">
        "Today we help you, tomorrow we can can change the world together."
      </section>
      <div className=" p-5 text-center justify-content-center">
        <h3 className="sub-heading">
          Grow your Startup with Robust Infrastructure
        </h3>
        <div className="d-flex flex-column flex-md-row gap-5 gap-md-0 my-5 align-items-center justify-content-center">
          <div className="signup-cont c-bg-grey p-4 d-flex flex-column align-items-center justify-content-center">
            <span className="c-fs-2 c-fw-sb">Sign up</span>
            <p className="c-fs-4 mt-2">
              Sign up with your official email ID and integrate MSG91 API.
            </p>
          </div>

          <div className=" d-none p-5 c-fs-1 c-col-grey d-md-flex flex-column align-items-center justify-content-center">
            <MdKeyboardArrowRight />
          </div>
          <div className="signup-cont c-bg-grey p-4 d-flex flex-column align-items-center justify-content-center">
            <span className="c-fs-2 c-fw-sb">Apply</span>
            <p className="c-fs-4 mt-2">
              If you fulfill criteria, you can apply for the startup program.
            </p>
          </div>

          <div className=" p-5 c-fs-1 c-col-grey d-none d-md-flex flex-column align-items-center justify-content-center">
            <MdKeyboardArrowRight />
          </div>
          <div className="signup-cont c-bg-grey p-4 d-flex flex-column align-items-center justify-content-center">
            <span className="c-fs-2 c-fw-sb">Enjoy</span>
            <p className="c-fs-4 mt-2">
              You are good to go to avail the benifits.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-3 px-md-auto">
        <h2 className="sub-heading">Benifits of Startup Program</h2>
        <div className="mt-2 ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">
            25000 SMS credits every months for 6 months.
          </span>
        </div>
        <div className="mt-2 ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">
            Can be used for OTP, Transactional SMS, Emails.
          </span>
        </div>
        <div className=" mt-2">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">
            Leverage our Cloud contact center HELLO and Customer Segmentation
            product.
          </span>
        </div>
        <div className="mt-2 ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">
            Get support from our Superherose to integrate scalable APIs.
          </span>
        </div>
      </div>
      <section className="my-5 py-5 c-bg-grey">
        <div className="container px-3 px-md-auto">
          <h2 className="sub-heading my-2">Our Collaborators</h2>
          <p className="c-fs-4 w-100 mb-2 ">
            We’re proud to be associated with a growing set of Venture
            Capitalists, Accelerators,Incubators and Crowdfunding platforms
            across to inspire, identify and develop end-to-end solutions for
            businesses to discover and engage.
          </p>
          <img className="w-100 collab-img mt-2" src="/img/collab-img.png" />
        </div>
      </section>
      <div className="container px-3 px-md-auto">
        <h2 className="sub-heading">
          Cecklist to become a part of the program
        </h2>
        <div className=" ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">New MSG91 subsriber</span>
        </div>
        <div className=" ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">Sign up from a private domain ID</span>
        </div>
        <div className=" ">
          <span className="c-fs-1 c-fw-b text-green">
            <MdDone />
          </span>
          <span className="c-fs-4 ms-2">
            Associated with our preferred collaborators
          </span>
        </div>
      </div>
      <div className="container p-5 d-flex flex-column justify-content-sm-center align-items-center">
        <div className=" c-bg-grey  p-2 p-md-5  container text-center d-md-flex justify-content-sm-between align-items-center flex-xl-row flex-lg-column flex-sm-column flex-md-column">
          <span className="c-fs-2 c-">Register with us to give voice to your Startup</span>
          <div className="mt-3 mt-lg-0">
            <button className="btn btn-primary ms-lg-4 my-1 c-fs-4 mx-2">
              {" "}
              Apply now
            </button>
          </div>
        </div>
        <div className=" mt-5  d-flex flex-column align-items-center text-center justify-content-center">
          <p className="c-fs-3 my-2">
            Have More Questions? We’re always here to help you!
          </p>
          <button className="btn btn-outline-primary px-3 py-2 c-fs-4 mx-auto">
            Talk to Sales
          </button>
        </div>
      </div>
      <Footertwo />
    </>
  );
};
export default startup;
