  import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const oneapi = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Integrate SMS, Email and
Voice API in your software</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Build global customer engagement products with our developer-friendly communication APIs.
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            Get Started
          </button>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
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
          SMS API
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Dynamic, without any modification in code.

Dedicated routes for promotional and transactional SMS.

Send in English, deliver in Español, ಕನ್ನಡ, française…

Send automated SMS.
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
          EMAIL API
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Best email API service to add to the uninterrupted omnichannel experience.

Dynamic template building.

Reporting dashboard for viewing and analyzing data.

Reliable delivery and scale to enterprise volume.
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
          VOICE API
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Talk to your customers anywhere and keep track of conversations.

Code and customize your calls.

Make, manage and route calls to your phone, application or website.

Analyze customer data and improve the calling experience with our Voice API.
            </span>
          </div>
        </div>
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container c-fs-1 c-ff-h c-fw-m ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
            Developer-Friendly APIs
            </span>
            <span className="c-fs-3  mt-3">
            Robust, responsive, secure, scalable omnichannel APIs
to develop the best-in-market product.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
            Global
communication
            </span>
            <span className="c-fs-3  mt-3">
            APIs catering to users to globally over 800 networks and 190 countries.

Integrate anywhere, deliver across the world.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
            Build awesome
products
            </span>
            <span className="c-fs-3  mt-3">
            Enable smart messaging into your application to automate your product.
Build communication products that talk to your customers. Make it scalable as and when required.
            </span>
          </div>
        </div>
      </div>

      <div className="container text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Let your communication FLOW</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Use One API to integrate SMS, email, voice APIs, WhatsApp and more in your communication software. The platform allows you to configure your flow of communication with the help of omnichannel experience provided by One API, to ensure guaranteed and smooth delivery of the message to your customers.

For instance, you send an email to a potential customer, and they fail to open the email. You can then follow your email with an SMS and later a push notification – this way you’ll ensure your message reaches your consumers – in an automated and seamless way.
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
          Engineered for reliability
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            This comprehensive solution guarantees automated delivery of messages through an omnichannel approach.
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
          Multi-route technology 
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            This integrated solution delivers your messages anywhere, anytime, anyhow.
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
          Flow can be configured at your end!
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Modify, customize and play around your needs.
            </span>
          </div>
        </div>
      </div>

      

      <FaqSection />
      <Footer />
    </>
  );
};

export default oneapi;
