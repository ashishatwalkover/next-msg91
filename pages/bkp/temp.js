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
              <ul className="nav nav-pills c-fs-5 pb-5" id="pricing-pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active"  data-bs-toggle="pill" data-bs-target="#pills-sms" type="button" role="tab" aria-controls="pills-sms" aria-selected="true">
                    <img src="img/sms.svg" alt="#" />
                    SMS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-email" type="button" role="tab" aria-controls="pills-email" aria-selected="false">
                  <img src="img/email.svg" alt="#" />
                    Email
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-voice" type="button" role="tab" aria-controls="pills-voice" aria-selected="false">
                    <img src="img/voice.svg" alt="#" />
                    Voice
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-whatsapp" type="button" role="tab" aria-controls="pills-whatsapp" aria-selected="false">
                    <img src="img/whatsapp.svg" alt="#" />
                    WhatsApp
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-rcs" type="button" role="tab" aria-controls="pills-rcs" aria-selected="false">
                    <img src="img/rcs.svg" alt="#" />
                    RCS
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-otp" type="button" role="tab" aria-controls="pills-otp" aria-selected="false">
                    <img src="img/otp.svg" alt="#" />
                    OTP
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-hello" type="button" role="tab" aria-controls="pills-hello" aria-selected="false">
                    <img src="img/hello.svg" alt="#" />
                    Hello
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-segmento" type="button" role="tab" aria-controls="pills-segmento" aria-selected="false">
                    <img src="img/segmento.svg" alt="#" />
                    Segmento
                  </button>
                </li>          
                <li className="nav-item" role="presentation">
                  <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-campaign" type="button" role="tab" aria-controls="pills-campaign" aria-selected="false">
                    <img src="img/campaign.svg" alt="#" />
                    Campaign
                  </button>
                </li>          
              </ul>
            </div>

            <div className="tab-content  " id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-sms" role="tabpanel" aria-labelledby="pills-sms-tab" tabIndex={0}>
              <div className="d-flex card-container align-items-end">
              <div className="card w-25 border-0 text-center me-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Free</h3>
                  <h5 className="c-fs-4 mt-2">$0/Month</h5>
                  <p className="c-fs-5"> - </p>
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
                    Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="card w-25 border-0 text-center mx-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Basic</h3>
                  <h5 className="c-fs-4 mt-2">$500/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    250,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    3,000 Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="  text-center d-flex flex-column align-items-center mx-3 w-25">
                <div className="popular-chip c-fs-6">POPULAR</div>
              <div className="card  w-100 card-popular border-primary text-center c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Alpha</h3>
                  <h5 className="c-fs-4 mt-2">$1500/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    5,00,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    5,000 Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-25 border-0 text-center ms-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Custom</h3>
                  <h5 className="c-fs-4 mt-2">Custom Pricing</h5>
                  <p className="c-fs-5">-</p>
                  <div className="c-fs-5 mt-2">
                    Need to send more? Talk to us for a customized plan.
                  </div>
                 

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Talk to an Expert
                  </button>
                </div>
              </div>
              </div>
              <div className="tab-pane fade" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab" tabIndex={0}>
                email
              </div>
              <div className="tab-pane fade" id="pills-voice" role="tabpanel" aria-labelledby="pills-voice-tab" tabIndex={0}>
                voice
              </div>
              <div className="tab-pane fade" id="pills-whatsapp" role="tabpanel" aria-labelledby="pills-whatsapp-tab" tabIndex={0}>
                whatsapp
              </div>
              <div className="tab-pane fade" id="pills-rcs" role="tabpanel" aria-labelledby="pills-rcs-tab" tabIndex={0}>
                rcs
              </div>
              <div className="tab-pane fade" id="pills-otp" role="tabpanel" aria-labelledby="pills-otp-tab" tabIndex={0}>
                otp
              </div>
              <div className="tab-pane fade" id="pills-hello" role="tabpanel" aria-labelledby="pills-hello-tab" tabIndex={0}>
                hello
              </div>
              <div className="tab-pane fade" id="pills-segmento" role="tabpanel" aria-labelledby="pills-segmento-tab" tabIndex={0}>
                segmento
              </div>
              <div className="tab-pane fade" id="pills-campaign" role="tabpanel" aria-labelledby="pills-campaign-tab" tabIndex={0}>
                campaign
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