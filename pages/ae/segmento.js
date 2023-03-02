import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const segmento = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4 overflow-hidden col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/segmento.svg" className="product-page-logo" />
            <h1 className="heading">Segmento</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">STOP WONDERING, START SEGMENTING!</p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          Run targeted campaigns, personalize marketing content,
precise data access with customer segmentation.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={"/img/segmento-page-img.png"}
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
            Personalize
Marketing Content
            </span>
            <span className="c-fs-3  mt-3">
            Generate personalized content for different segments. Subdivide and send relevant content to users, boost up your customer retention by tailoring and segmenting.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <span className="c-fs-2 c-fw-m ">
            Run Targeted Campaigns
            </span>
            <span className="c-fs-3  mt-3">
            Filter out ceasing and inactive customers, personalize information for them, rebuild permanent customers by running targeted campaigns.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <span className="c-fs-2 c-fw-m ">
            Precise Data Access
            </span>
            <span className="c-fs-3  mt-3">
            Slice it off and only access data that you need. Teams can segment data according to their needs by filtering it and take actions accordingly.
            </span>
          </div>
        </div>
      </div>

 

      <FaqSection />
      <Footer />
    </>
  );
};

export default segmento;
