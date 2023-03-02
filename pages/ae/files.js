import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const files = () => {
  return (
    <>
        <HeadTag /> 
      <Notification />
      <Header />
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/files-ico.svg" className="product-page-logo" />
            <h1 className="heading">File Hosting</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">Event base automation</p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
            Boost audience engagement through smart communication and on-time delivery.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
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
              Automate sending messages under defined conditions
            </span>
            <span className="c-fs-3  mt-3">
              Define different messaging parameters like time, region, number of
              messages per day, and more to make sure that your campaigns reach
              your audience under the right circumstances automatically, without
              any delays.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
              An all-in-one platform for all your campaigns
            </span>
            <span className="c-fs-3  mt-3">
              Optimise your links and create short links that inspire
              confidence. Include short links in your custom messages with ease.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
              Make your communication more secure
            </span>
            <span className="c-fs-3  mt-3">
              Now protect your Campaigns with our token-based workflow and a
              robust security framework. Implement best customer-engagement
              practices and shape communication to fit your brand while ensuring
              optimum security through and through.
            </span>
          </div>
        </div>
      </div>

     

      <div className="container">
        <span className="sub-heading  ">More Feature</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - Use a reliable solution to maximize customer engagement.
            </span>
            <span className="c-fs-3 mt-1">
              - Create unique and interactive campaigns that use different media formats.
            </span>
            <span className="c-fs-3 mt-1">
              - Customize campaigns to meet communication needs.
            </span>
            <span className="c-fs-3 mt-1">
              - Include interactive elements like quizzes and polls to keep customers engaged.
            </span>
            
            <span className="c-fs-3 mt-1">- Track campaign performance</span>
          </div>
          <div className="my-auto mt-3 px-5 d-flex py-5 c-bg-grey flex-wrap justify-content-center">
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
      <Footer />    </>
  );
};

export default files;
