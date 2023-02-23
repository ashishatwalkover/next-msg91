import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const email = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Deliver a Consistent Experience
              with Transactional Email</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            With our developer friendly APIs, effortlessly
            deliver informational transactional email that has high open rates.
          </h2>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            Keep your customers updated with their order details, booking status,login prompts, and other essential information.
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            Get started
          </button>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-column flex-sm-row">
        <h1 className="heading mt-5">Send data-driven transactional emails</h1>
      </div>
      <h2 className="container c-fs-2 c-ff-b c-fw-r w-100 mx-auto py-5">
        Transactional emails are a unique set of one to one emails that are
        ideally targeted for sending data-driven and personalized messages
      </h2>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container c-fs-1 c-ff-h c-fw-m ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
              Email Tracking and Analytics
            </span>
            <span className="c-fs-3  mt-3">
              Get access to the reporting dashboard to analyse transactional email data like open rate, click-through rate, A/B testing etc.
              Debug a specific request or status of an email delivery or analyse report.
              Get 30 days of log retention and 7 days message retention.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
              Suppression Management
            </span>
            <span className="c-fs-3  mt-3">
              Manage your opt-in, opt-out contacts and automatically deliver with our transactional email provider. Make the
              suppression list management easy. Automate the entire email opt-out collection
              with the webhooks to process and distribute in real-time.
            </span>
            <span className="c-fs-3  mt-3">
              <strong>Automation in the opt-out collection also works for other channels like SMS.</strong>
            </span>
          </div>
        </div>
      </div>

      <div class="container d-flex col col-12 py-5">
        <div className="col-5 bg-opacity-10 border rounded-end justify-content-center align-items-center p-5 mx-auto">
          <h2><strong>Receive email in JSON format</strong></h2>
          <span className="py-5 fs-5">Send transactional emails with a lightweight data-interchange format and make them easily readable.    Get every email as JSON at your server via webhook. Setup MX record or forward email to our unique ID and we will send you as we receive.</span>
        </div>
        <div className="col-5 bg-opacity-10 border rounded-end justify-content-center align-items-center p-5 mx-auto">
          <h2><strong>Receive email in JSON format</strong></h2>
          <span className="py-5 fs-5">Send transactional emails with a lightweight data-interchange format and make them easily readable.    Get every email as JSON at your server via webhook. Setup MX record or forward email to our unique ID and we will send you as we receive.</span>
        </div>
      </div>

      <div className="container py-5">
        <span className="c-fs-2 c-fw-m c-ff-h">Why Choose MSG91
for sending Transactional Email?</span>
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
            <span className="c-fs-3 mt-1">
              - 18/7 Ticket support
            </span>
            <span className="c-fs-3 mt-1">- Provides feature of send-time optimization for real-time</span>
            <span className="c-fs-3 mt-1">
            &nbsp;&nbsp;delivery
            </span>
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

export default email;
