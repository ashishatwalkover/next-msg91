import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const Email = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/email.svg" className="product-page-logo" />
            <h1 className="heading">Email</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">
            Event base automation
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
            Deliver a Consistent Experience with Transactional Email{" "}
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
            <span className="c-fs-2 c-fw-m ">Email Tracking and Analytics</span>
            <span className="c-fs-3  mt-3">
              Get access to the reporting dashboard to analyse transactional
              email data like open rate, click-through rate, A/B testing etc.
              Debug a specific request or status of an email delivery or analyse
              report. Get 30 days of log retention and 7 days message retention.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">Suppression Management</span>
            <span className="c-fs-3  mt-3">
              Manage your opt-in, opt-out contacts and automatically deliver
              with our transactional email provider. Make the suppression list
              management easy. Automate the entire email opt-out collection with
              the webhooks to process and distribute in real-time.
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
          <span className="c-fs-2 c-fw-m  mt-1">
            Receive email in JSON format
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Send transactional emails with a lightweight data-interchange
              format and make them easily readable. Get every email as JSON at
              your server via webhook. Setup MX record or forward email to our
              unique ID and we will send you as we receive.
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
          <span className="c-fs-2 c-fw-m  mt-1">Get notified via Webhooks</span>
          <div>
            <span className="c-fs-3 mt-2">
              Get real-time data and information about your transactional emails
              with Webhooks. MSG91 webhooks notify your applications about key
              message events such as bounces, deliveries, clicks, opens, and
              spam complaints.
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
          <span className="c-fs-2 c-fw-m  mt-1">
            Send data-driven transactional emails
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Transactional emails are a unique set of one to one emails that
              are ideally targeted for sending data-driven and personalized
              messages.
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="sub-heading  ">More Feature</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - Assured delivery with 4x delivery speeds
            </span>
            <span className="c-fs-3 mt-1">
              - 30 Days of Log history to help you regulate
            </span>
            <span className="c-fs-3 mt-1">
              - Transparent delivery tracking on every email
            </span>
            <span className="c-fs-3 mt-1">
              - Easy and scalable developer-friendly API to integrate
            </span>

            <span className="c-fs-3 mt-1">- 18/7 Ticket support</span>
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
      <Footer />
    </>
  );
};

export default Email;
