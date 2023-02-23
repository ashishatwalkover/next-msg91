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
            <h1 className="heading">Programmable SMS</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            Send text messages globally with the powerful and robust Transactional SMS API.
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            API Documentation
          </button>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className="container text-center justify-content-center py-5">
        <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row py-5">
          <h1 className="heading">Global SMS messaging to the next level</h1>
        </div>
        <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Send critical information, notifications & updates with robust SMS APIs and reach your users globally
          with our transactional SMS service. Bring on the conversational experiences to life and nurture
          the relations that matter to your business.
        </h2>
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
          SMS in Regional Language
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Connect with your customers in their native language so that they don’t miss out on important updates, and act faster with this best transactional SMS provider.
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
          Verified SMS
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            With Verified SMS build trust by adding your brand name and business logo along with the verified status to all your business messages.
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
          RCS
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Upgrade transactional SMS service with popular chat features like multimedia sharing, group chats, sharing location, sending documents and files and many more
            </span>
          </div>
        </div>
      </div>

      <div className="container text-center justify-content-center py-5">
        <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row py-5">
          <h1 className="heading">Full featured transactional SMS API for the developers</h1>
        </div>
        <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Automate sending SMS from any website, CRM, or application.Our robust routing engine ensures your messages reach no matter at what conditions of why and how.
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
            <span className="c-fs-2 c-ff-h ">
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
            <span className="c-fs-2 c-ff-h ">
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
            <span className="c-fs-2 c-ff-h ">
            Free API Integration
            </span>
            <span className="c-fs-3  mt-3">
            MSG91 offers seamless API integration with your existing software. This means that you can enable messaging channels by simply integrating API in your software, and you only pay for what you use.
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

      

      <FaqSection />
      <Footer />
    </>
  );
};

export default sms;
