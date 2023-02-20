import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const rcs = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Redefine A2P
messaging with RCS - Rich Communication Services</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Interact via rich, branded, conversational RCS messaging.
          </h2>
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Future of business messaging</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Rich Communication Service is the new age communication protocol between messaging partners, telecom operators and
OEMs for rich multimedia messaging. It is everything you need for the next-generation
advanced messaging.
          </h2>
        </div>

        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">What can you do with Rich Communication Services?</h1>
          </div>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Send branded messaging, create chat groups, have read receipts,
send high-resolution media, like images, audios, videos, gifs, map locations,
deep links to CTAs and have an insight on the performance of your messaging.
          </h2>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            <strong>All the advantages of OTT communication delivered through the most convenient medium!</strong>
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
            Branding
            </span>
            <span className="c-fs-3  mt-3">
            Aid brand recognition by adding sender name,
logo & colour to your messages.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
            Trust
            </span>
            <span className="c-fs-3  mt-3">
            Build trust by communicating with a verified
account badge.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
            Personalisation
            </span>
            <span className="c-fs-3  mt-3">
            Form advanced communications by adding smart
actions like calendar appointments, read receipts and
varied call to actions.
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h cc-fw-m">
            Template
            </span>
            <span className="c-fs-3  mt-3">
            Rich message template with an ability to add images, videos, audios, locations, QR codes and deep linking to send transactional or service updates.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
            Ubiquity
            </span>
            <span className="c-fs-3  mt-3">
            Just like an SMS all you need to communicate with
your customers is their mobile number.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h ">
            Conversion
            </span>
            <span className="c-fs-3  mt-3">
            Reply buttons, multiple CTA options enable better
conversations and conversions.
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-ff-h n">
            Engagement
            </span>
            <span className="c-fs-3  mt-3">
            Multiple matrices to create engagement levels and
get responses.
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
          Bring on the conversations across every channel
          </span>
          <div>
            <span className="c-fs-3 mt-2">
              Serve your customers wherever they are.
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
          Add modern messaging into every application
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Initiate a modern messaging experience for your customers into your brand’s website and mobile apps.
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
          <span className="c-fs-2 c-ff-h c-fw-m mt-1">Deliver consistent and interactive experiencePre-defined templates for improved productivity
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Be extraordinary while live chat with AI, bots and integrated apps for conversational business at scale.
            </span>
          </div>
        </div>
      </div>

      <FaqSection />
      <Footer />
    </>
  );
};

export default rcs;
