import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
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
      <div className="container text-center px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/campaign.svg" className="product-page-logo" />
            <h1 className="heading">One API for WhatsApp</h1>
          </div>
          <p className="c-fs-4 mx-auto">Event based automation</p>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Modernize and scale your customer experience with
robust Whatsapp API. Connect with your customers
in the most simple, secure and reliable way.
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

      <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/campaign.svg" className="product-page-logo" />
            <h1 className="heading">Connect customers globally on their familiar messaging app</h1>
          </div>
          <p className="c-fs-4 mx-auto">Event based automation</p>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
          Integrate WhatsApp API to add a new dimension to your omnichannel
customer experience and create newer opportunities for business communication.
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
          Send alerts & notifications
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            Enable WhatsApp API to send strategic business messages. From bank account notification, payment receipts to delivery alerts, WhatsApp API does it all.
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
          Secured communication
          </span>
          <div>
            <span className="c-fs-3 mt-2">
            WhatsApp Business API messages are encrypted & secured over HTTPS. Win over your customers’ trust by enabling private conversations with your users.
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
          WhatsApp Business API for customer support
          </span>
          <div>
            <span className="c-fs-3 mt-2">
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
