import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
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
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/sms.svg" className="product-page-logo" />
            <h1 className="heading">SMS</h1>
          </div>
          <p className="c-fs-4 text-uppercase col-campaign c-ls-20 mx-auto">Event base automation</p>
          <h2 className="small-heading w-100 w-md-75 mx-auto">
          Leading Transactional SMS API Provider in the US
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
            DND Allowed
            </span>
            <span className="c-fs-3  mt-3">
            MSG91’s transactional SMS service lets you send transactional SMS to DND (Do Not Disturb) numbers in your contact list. This feature is not available with promotional messages. The feature is most useful in the case of OTPs and important notifications that are not marketing-driven.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Delivery Report
            </span>
            <span className="c-fs-3  mt-3">
            Businesses can check and verify the delivery status for every transactional SMS sent. MSG91 provides complete SMS delivery reports, which makes it easier for senders to understand how many users have received it and opened the message.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Send SMS 24×7
            </span>
            <span className="c-fs-3  mt-3">
            Since the nature of transactional SMS are meant to support a user along the customer journey, and is triggered by an action of the user on a website/app, they can be automated and sent at any time of the day as per the user action. This allows users to carry secure online transactions at any time of the day with ample information.
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Free API Integration
            </span>
            <span className="c-fs-3  mt-3">
            MSG91 offers seamless API integration with your existing software. This means that you can enable messaging channels by simply integrating API in your software, and you only pay for what you use
            </span>
          </div>
        </div>
      </div>



      <div className="container d-flex flex-column flex-md-row align-items-flex-start mt-5 mb-5">
        <div className="col-lg-4 p-3 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-fw-m  mt-1">
           SMS in Regional Language
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Connect with your customers in their native language so that they don’t miss out on important updates, and act faster with this best transactional SMS provider.
            </span>
          </div>
        </div>
        <div className="col-lg-4 p-3 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-fw-m  mt-1">
          Verified SMS
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            With Verified SMS build trust by adding your brand name and business logo along with the verified status to all your business messages.
            </span>
          </div>
        </div>
        <div className="col-lg-4 p-3 flex-column align-items-flex-start">
          <div className="mt-5 mb-3">
            <img
              src={"/Img/done_outline.svg"}
              alt="#"
              className="feature-check"
            />
          </div>
          <span className="c-fs-2 c-fw-m  mt-1">
          RCS
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Upgrade transactional SMS service with popular chat features like multimedia sharing, group chats, sharing location, sending documents and files and many more
            </span>
          </div>
        </div>
      </div>

     

      
      <FaqSection />
      <Footer />
    </>
  );
};

export default sms;
