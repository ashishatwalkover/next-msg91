import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";  
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const hello= () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4 overflow-hidden col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/hello.svg" className="product-page-logo" />
            <h1 className="heading">Hello</h1>
          </div>
          
          <p className="c-fs-4 c-fw-r text-uppercase col-campaign c-ls-20 mx-auto">
          Revolutionize customer support{" "}
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-75 mx-auto">
          Start Conversations, Drive Growth with the Best Contact Center Software in US
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={"/img/hello-page-img.png"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Support your customers with the best contact center software
            </span>
            <span className="c-fs-3  mt-3">
            Say Hello to real-time communications that keep up with your customer experience requirements. With the best contact center messaging solution, stay in touch with customers to solve all their queries on the most trusted communication platforms like Facebook, WhatsApp, RCS, and more.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Solve all your
customer issues through powerful calling features
            </span>
            <span className="c-fs-3  mt-3">
            Say Hello to your customers via voice call. Redirecting calls, recording calls, IVR, and assigning calls made easy with our cloud contact center solutions that assure to exceed your expectations.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m  ">
            Assist and call Customers directly from our platform
            </span>
            <span className="c-fs-3  mt-3">
            Our contact centre solution empowers interaction through IVR,
Call redirecting, call recording and call assigning.
            </span>
          </div>
        </div>
      </div>



      <div className="container">
        <span className="sub-heading">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - Provide customer support via screen sharing on a single click
            </span>
            <span className="c-fs-3 mt-1">
              - Troubleshooting over video in seconds
            </span>
            <span className="c-fs-3 mt-1">
              - Record agent performance for quality control
            </span>
            <span className="c-fs-3 mt-1">
              - Understand your customers emotions through sentiment analysis
            </span>
            <span className="c-fs-3 mt-1">
              - Solution for remote access and support
            </span>
            <span className="c-fs-3 mt-1">- Track campaign performance</span>
          </div>
          <div className="my-auto mt-3 ms-4   px-5 d-flex py-5 c-bg-grey flex-wrap justify-content-center">
            <span className="c-fs-2 c-ff-h">Looking for more?</span>
            <button className="btn btn-outline-primary c-fs-4 ms-0 ms-md-3 mt-3 mt-md-0">
              {" "}
              Request a Feature
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <FaqSection />
      <Footer />
    </>
  );
};

export default hello;
