import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Footer from "@/components/footer";

const shorturl = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4 overflow-hidden col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/short-url-ico.svg" className="product-page-logo" />
            <h1 className="heading">Short URL</h1>
          </div>
          <p className="c-fs-4 text-uppercase col-campaign c-ls-20 mx-auto">Event based automation</p>
          <h2 className="small-heading w-md-75 w-100 mx-auto">
            Customised Links for Business Success
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get Started for Free
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
        <span className="container sub-heading c-ff-h  ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <span className="c-fs-2 c-fw-m ">
              Smart Links that magnify your conversions
            </span>
            <span className="c-fs-3  mt-3">
              Enhance the deliverability of messages through our globally
              accepted best practices. Ensure improved deliverability and boost
              click-through rates for higher revenues.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <span className="c-fs-2 c-fw-m ">
              Track performance to enhance campaign outcome
            </span>
            <span className="c-fs-3  mt-3">
              Users can track the outcome of the messages sent out to the
              audience. Assessing performance can help in making suitable tweaks
              to the messages in future.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <span className="c-fs-2 c-fw-m ">
              Optimise messages that convert more
            </span>
            <span className="c-fs-3  mt-3">
              Optimise your links and create short links that inspire
              confidence. Include short links in your custom messages with ease.
            </span>
          </div>
        </div>

      <div className="container d-lg-flex flex-row align-items-center mt-5">
        <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
          <img src="/img/camp-f-img-two.svg" className="feature-img" />
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
        <span className="c-fs-2 c-fw-m ">
            Comprehensive and secure reports
          </span>
          <span className="c-fs-3  mt-3">
            A single dashboard can allow users with requisite rights and
            privileges to track the performance of each campaign and the number
            of hits of the URL for each recipient. You can also assess the
            acceptance of messages across browsers and devices.
          </span>
        </div>
      </div>
      </div>

      
      <Footer />
    </>
  );
};

export default shorturl;
