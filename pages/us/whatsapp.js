import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const whatsapp = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/whatsapp.svg" className="product-page-logo" />
            <h1 className="heading">Whatsapp</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">
            Event base automation
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          WhatsApp API Services
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
            <span className="c-fs-2 c-fw-m ">Send alerts & notifications</span>
            <span className="c-fs-3  mt-3">
            Enable WhatsApp API to send strategic business messages. From bank account notification, payment receipts to delivery alerts, WhatsApp API does it all.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Secured communication</span>
            <span className="c-fs-3  mt-3">
            WhatsApp Business API messages are encrypted & secured over HTTPS. Win over your customers’ trust by enabling private conversations with your users.
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">WhatsApp Business API for customer support</span>
            <span className="c-fs-3  mt-3">
            Join the faster and seamless way to customer conflict resolution. Solve customers’ queries & provide support on their preferred chat platform.
            </span>
          </div>
        </div>
      </div>




      <FaqSection />
      <Footer />
    </>
  );
};

export default whatsapp;
