import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import Footer from "@/components/footer";
import Pricingemail from "@/components/pricing-email";
import Pricingsms from "@/components/pricing-sms";
import Pricingvoice from "@/components/pricing-voice";
import Pricingotp from "@/components/pricing-otp";
import Pricingwp from "@/components/pricing-whatsapp";
import Pricinghello from "@/components/pricing-hello";
import Pricingsegmento from "@/components/pricing-segmento";
import Pricingcampaign from "@/components/pricing-campaign";
import Pricingrcs from "@/components/pricing-rcs";
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

            <div className="tab-content d-flex " id="pills-tabContent">
              <div className="tab-pane fade show active w-100" id="pills-sms" role="tabpanel" aria-labelledby="pills-sms-tab" tabIndex={0}>
                <Pricingsms/>
              </div>
              <div className="tab-pane fade w-100" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab" tabIndex={0}>
               <Pricingemail/>
              </div>
              <div className="tab-pane fade w-100" id="pills-voice" role="tabpanel" aria-labelledby="pills-voice-tab" tabIndex={0}>
                <Pricingvoice/>
              </div>
              <div className="tab-pane fade w-100" id="pills-whatsapp" role="tabpanel" aria-labelledby="pills-whatsapp-tab" tabIndex={0}>
                <Pricingwp/>
              </div>
              <div className="tab-pane fade w-100" id="pills-rcs" role="tabpanel" aria-labelledby="pills-rcs-tab" tabIndex={0}>
                <Pricingrcs/>
              
              </div>
              <div className="tab-pane fade w-100" id="pills-otp" role="tabpanel" aria-labelledby="pills-otp-tab" tabIndex={0}>
                <Pricingotp/>
              </div>
              <div className="tab-pane fade w-100" id="pills-hello" role="tabpanel" aria-labelledby="pills-hello-tab" tabIndex={0}>
                <Pricinghello/>
              </div>
              <div className="tab-pane fade w-100" id="pills-segmento" role="tabpanel" aria-labelledby="pills-segmento-tab" tabIndex={0}>
                <Pricingsegmento/>
              </div>
              <div className="tab-pane fade w-100" id="pills-campaign" role="tabpanel" aria-labelledby="pills-campaign-tab" tabIndex={0}>
                <Pricingcampaign/>
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