import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import Footer from "@/components/footer";
import { MdDone, MdClose } from "react-icons/md";

const pricing = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="text-center py-5">
          <h1 className="sub-heading mb-5">
            A plan for every business and budget, Find yours today!
          </h1>
          <div className="c-fs-3">
            <div className="d-flex justify-content-center">
              <ul
                className="nav nav-pills c-fs-5 pb-5"
                id="pricing-pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-sms"
                    type="button"
                    role="tab"
                    aria-controls="pills-sms"
                    aria-selected="true"
                  >
                    <img src="img/sms.svg" alt="#" />
                    SMS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-email"
                    type="button"
                    role="tab"
                    aria-controls="pills-email"
                    aria-selected="false"
                  >
                    <img src="img/email.svg" alt="#" />
                    Email
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-voice"
                    type="button"
                    role="tab"
                    aria-controls="pills-voice"
                    aria-selected="false"
                  >
                    <img src="img/voice.svg" alt="#" />
                    Voice
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-whatsapp"
                    type="button"
                    role="tab"
                    aria-controls="pills-whatsapp"
                    aria-selected="false"
                  >
                    <img src="img/whatsapp.svg" alt="#" />
                    WhatsApp
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-rcs"
                    type="button"
                    role="tab"
                    aria-controls="pills-rcs"
                    aria-selected="false"
                  >
                    <img src="img/rcs.svg" alt="#" />
                    RCS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-otp"
                    type="button"
                    role="tab"
                    aria-controls="pills-otp"
                    aria-selected="false"
                  >
                    <img src="img/otp.svg" alt="#" />
                    OTP
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-hello"
                    type="button"
                    role="tab"
                    aria-controls="pills-hello"
                    aria-selected="false"
                  >
                    <img src="img/hello.svg" alt="#" />
                    Hello
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-segmento"
                    type="button"
                    role="tab"
                    aria-controls="pills-segmento"
                    aria-selected="false"
                  >
                    <img src="img/segmento.svg" alt="#" />
                    Segmento
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-campaign"
                    type="button"
                    role="tab"
                    aria-controls="pills-campaign"
                    aria-selected="false"
                  >
                    <img src="img/campaign.svg" alt="#" />
                    Campaign
                  </button>
                </li>
              </ul>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option>$ USD</option>
            </select>
            <div className="mt-5 d-flex container align-items-end   d-flex">
            
              <div className="card w-25 border-0 text-center c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Free</h3>
                  <h5 className="c-fs-4 mt-2">$0/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    100,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-danger c-fs-3">
                      <MdClose />
                    </span>
                    100,000 Emails
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="card w-25 card-popular border-primary text-center c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Free</h3>
                  <h5 className="c-fs-4 mt-2">$0/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    100,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-danger c-fs-3">
                      <MdClose />
                    </span>
                    100,000 Emails
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pricing;
