import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const shorturl = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/short-url-ico.svg" className="product-page-logo" />
            <h1 className="heading">Short URL</h1>
          </div>
          <p className="c-fs-4 mx-auto">Event based automation</p>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Customised Links for Business Success{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            Get Demo
          </button>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container c-fs-1 c-ff-h c-fw-m ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
             Smart Links that magnify your conversions
            </span>
            <span className="c-fs-3  mt-3">
            Enhance the deliverability of messages through our globally accepted best practices. Ensure improved deliverability and boost click-through rates for higher revenues.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
            Track performance to enhance campaign outcome
            </span>
            <span className="c-fs-3  mt-3">
            Users can track the outcome of the messages sent out to the audience. Assessing performance can help in making suitable tweaks to the messages in future.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
            Optimise messages that convert more
            </span>
            <span className="c-fs-3  mt-3">
            Optimise your links and create short links that inspire confidence. Include short links in your custom messages with ease.
            </span>
          </div>
        </div>
      </div>

      <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
            Comprehensive and secure reports
            </span>
            <span className="c-fs-3  mt-3">
            A single dashboard can allow users with requisite rights and privileges to track the performance of each campaign and the number of hits of the URL for each recipient. You can also assess the acceptance of messages across browsers and devices.
            </span>
          </div>
        </div>

      <div className="container">
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="my-auto mt-3 px-5 d-flex py-5 c-bg-grey flex-wrap justify-content-center">
            <span className="c-fs-1 c-ff-h">Flexi pricing to suit your needs</span>
            <span className="c-fs-2">Personalised pricing plans that suit your budget</span>
            <button className="btn btn-outline-primary c-fs-4 ms-0 ms-md-3 mt-3 mt-md-0">
              {" "}
              Refer more FAQs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default shorturl;
