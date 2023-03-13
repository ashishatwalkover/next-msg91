import HeadTag from "./head";
import Header from "@/components/header";
import Footertwo from "@/components/footer-sec";
import { MdKeyboardArrowRight, MdDone } from "react-icons/md";

const developers = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className="container mt-md-5 my-md-0 my-5 d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="d-flex col-md-6 col-12 justify-content-center flex-column align-items-md-start me-md-5 me-0 mt-4 mt-md-0 text-center text-md-start align-items-center">
          <h1 className="heading">MSG91 APIs for
Global messaging</h1>
          <p className="c-fs-2 mt-3">
          Integrate SMS, Email, Voice API with Java, PHP, HTTP Scripts. Build apps, innovation and ideas for rapid growing business, or just integrate for your team development.
          </p>
          <a href="https://msg91.com/startups-form/" className="btn btn-primary c-fs-4 mt-4">Explore documentation</a>
        </div>
        <div className="col-12 col-md-6">

        </div>
      </div>
      <div className="container text-center  overflow-hidden ">
        <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h2 className="heading">One API</h2>
          </div>

          <p className="c-fs-1 c-fw-b mx-auto mb-3">
          To revolutionalise the way developers integrate
          </p>
          <p className="c-fs-2  mx-auto">
          A single, unified API to simplify communication across multiple architectures. Build integrations faster and deliver a unified experience across channels for faster performance, more productivity and greater innovation.
          </p>
          <p className="c-fs-2 c-fw-b">
            Get started for Free
          </p>
        </div>
        <img
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>
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
          Checklist to become a part of the program
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
            <a href="https://msg91.com/startups-form/" className="btn btn-primary ms-lg-4 my-1 c-fs-4 mx-2">
              Apply now
            </a>
          </div>
        </div>
        <div className=" mt-5  d-flex flex-column align-items-center text-center justify-content-center">
          <p className="c-fs-3 my-2">
            Have More Questions? We’re always here to help you!
          </p>
          <a href="/contact-us" className="btn btn-outline-primary px-3 py-2 c-fs-4 mx-auto">
            Talk to Sales
          </a>
        </div>
      </div>
      <Footertwo />
    </>
  );
};
export default developers;
