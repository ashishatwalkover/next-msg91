import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const voice = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">MSG91 Voice Call API
Programmable yet personal</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Use Voice call API to build call flows anywhere in the world. Provide a personalized support in fixing complicated issues faster and easier.
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            Sign up
          </button>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Direct the way you interact
with your customers</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Leverage voice communication with Voice call API by keeping a track of conversations.
Make, manage and route calls to your phone, app or website.
          </h2>
        </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container c-fs-1 c-ff-h c-fw-m ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
            Customise & Craft Calls
            </span>
            <span className="c-fs-3  mt-3">
            The intuitive Voice Call API lets you build the call experience you want.
Every call can be customised.

Route customers to the right department or agent for solving their problem.
A simple HTTP request allows you to embed PSTN, SIP or VoIP into your tool.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
              Clear Calls
            </span>
            <span className="c-fs-3  mt-3">
            Ensuring high quality so you enjoy clear audio with low latency.
Our main goal is to keep your customer satisfied and help them to scale their business rapidly.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
              Control Calls
            </span>
            <span className="c-fs-3  mt-3">
            Get extensive reports to analyze and further build comprehensive calling experience.
Provide your customers everything they need- customer history,
order details, previous call records- all in one place, for fast personal support.
            </span>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column flex-md-row align-items-center mt-5 mb-5">
        <div className="col-lg-4 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-ff-h  mt-1">
          Seamless Integration
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            You need no additional support and resources while integrating Voice API into your system. Setup for a headset, an internet connection and patient ears that are ready to listen.
            </span>
          </div>
        </div>
        <div className="col-lg-4 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-ff-h c-fw-m mt-1">
          Low Latency
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Be ready to make your call with very minimal delay in reach of time. Our support team keeps an eagle eye on the tracking, analysis and making sure your call ends with an amazing experience.
            </span>
          </div>
        </div>
        <div className="col-lg-4 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-ff-h c-fw-m mt-1">
          Global Connectivity
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Our API allows the global connectivity of network’s  so that the world becomes smaller while you connect to any part of the world.
            </span>
          </div>
        </div>
      </div>

    

      <FaqSection />
      <Footer />
    </>
  );
};

export default voice;
