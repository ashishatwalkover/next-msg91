import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const sms = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/campaign.svg" className="product-page-logo" />
            <h1 className="heading">Campaign</h1>
          </div>
          <p className="c-fs-4 mx-auto">Event based automation</p>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            Boost audience engagement through smart communication and on-time
            delivery.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
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
        <span className="container c-fs-1 c-ff-h c-fw-m ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
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
            <span className="c-fs-2 c-ff-h ">
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
            <span className="c-fs-2 c-ff-h ">
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
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
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
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
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
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="c-fs-2 c-fw-m c-ff-h">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - Automate sending messages under defined conditions
            </span>
            <span className="c-fs-3 mt-1">
              - An all-in-one platform for all your campaigns
            </span>
            <span className="c-fs-3 mt-1">
              - Make your communication more secure
            </span>
            <span className="c-fs-3 mt-1">
              - Pre-defined templates for improved productivity
            </span>
            <span className="c-fs-3 mt-1">
              - Build a hassle-free communication flow
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
                  fill-rule="evenodd"
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

export default sms;
