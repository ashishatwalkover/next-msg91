import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import Footer from "@/components/footer";

const campaign = () => {
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

            <div className="tab-content d-flex justi" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-sms" role="tabpanel" aria-labelledby="pills-sms-tab" tabIndex={0}>
                <div className="g-3 d-flex justify-content-center col-lg-5 m-auto pb-5">
                    <select className="form-select" aria-label="Default select example">
                      <option>India</option>                    
                    </select>
                  <div className="px-4">To</div>
                    <select className="form-select" aria-label="Default select example">
                      <option>India</option>                    
                    </select>
                </div>
                <div className="text-center c-fs-3 pb-4">Number of SMS</div>
                <div className="sms-range">
                  <input type="range" className="form-range" min="0" max="6" step="1" id="customRange1" />
                </div>
                
                <div className="price-slab d-flex justify-content-between pb-5">
                  <div className="slab">
                    <div className="sms">5,000</div>
                    <div className="price">₹ 0.25/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">20,000</div>
                    <div className="price">₹ 0.20/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">50,000</div>
                    <div className="price">₹ 0.18/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">1,00,000</div>
                    <div className="price">₹ 0.16/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">3,00,000</div>
                    <div className="price">₹ 0.14/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">5,0,000</div>
                    <div className="price">₹ 0.12/SMS</div>
                  </div>
                  <div className="slab">
                    <div className="sms">5,0,000+</div>
                    <div className="price">₹ 0.10/SMS</div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center p-4 total-price col-lg-6 mx-auto mb-5">
                  <div className="c-fs-3 me-3">Total Price</div>
                  <div className="total c-fs-3 fw-bold me-3">₹ 5,000</div>
                  <div className="me-3">+18% GST</div>
                  <button className="btn btn-primary">Get started</button>
                </div>

                <div className="">
                  Transactional SMS route can be used to send critical information, notifications, OTPs to your users. However, we highly recommend sending OTP via our dedicated platform OTP.
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
      <Footer />
    </>
  );
};

export default campaign;
