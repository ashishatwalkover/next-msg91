import SeccondFooter from "./seccond_footer";
import Image from "next/image";
// import a from "next/a";

const Footer = () => {
  return (
    <>
    <SeccondFooter/>
    <div className="footer pt-5">
        <div className="footer-main-cont mt-4 mb-4 container">
          <div className="row justify-content-sm-between">                                    

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Our Products</h4>
              <div className="a-nav-link-cont d-flex flex-column mt-2 align-items-start">                
                <a href="/hello" className="c-fs-5 mt-2 c-fw-t">
                  Hello
                </a>
                <a href="/segmento" className="c-fs-5 mt-2 c-fw-t">
                  Segmento
                </a>
                <a href="/campaign" className="c-fs-5 mt-2 c-fw-t">
                  campaign
                </a>
                <a href="/otp" className="c-fs-5 mt-2 c-fw-t">
                  OTP
                </a>
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Channels</h4>
              <div className="a-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <a href="/sms" className="c-fs-5 mt-2 c-fw-t">
                  SMS
                </a>
                <a href="/email" className="c-fs-5 mt-2 c-fw-t">
                  Email
                </a>
                <a href="/voice" className="c-fs-5 mt-2 c-fw-t">
                  Voice
                </a>
                <a href="/rcs" className="c-fs-5 mt-2 c-fw-t">
                  RCS
                </a>
                <a href="/virtual-number" className="c-fs-5 mt-2 c-fw-t">
                  Virtual Number
                </a>
                <a href="/whatsapp" className="c-fs-5 mt-2 c-fw-t">
                  WhatsApp
                </a>
                {/* <a href="#" className="c-fs-5 mt-2 c-fw-t">
                  View All Channels
                </a> */}
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className="c-fs-5 d-flex flex-column">Resources</h4>
              <div className="a-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <a href="/industries" className="c-fs-5 mt-2 c-fw-t">
                  Industries
                </a>
                <a href="/blogs#" className="c-fs-5 mt-2 c-fw-t">
                  Blogs
                </a>
                <a href="/case-studies" className="c-fs-5 mt-2 c-fw-t">
                  Case Studies
                </a>
                <a href="/faq" className="c-fs-5 mt-2 c-fw-t">
                  FAQ
                </a>
                <a href="/api-documentation" className="c-fs-5 mt-2 c-fw-t">
                  API Documentation
                </a>
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Discover</h4>
              <div className="a-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <a href="/about-us" className="c-fs-5 mt-2 c-fw-t">
                  About Us
                </a>
                <a href="/pricing" className="c-fs-5 mt-2 c-fw-t">
                  Pricing
                </a>
                <a href="/contact-us" className="c-fs-5 mt-2 c-fw-t">
                  Contact Us
                </a>                                
                <a href="/developers" className="c-fs-5 mt-2 c-fw-t">
                  Developers
                </a>
                <a href="/startup" className="c-fs-5 mt-2 c-fw-t">
                  MSG91 For Startups
                </a>
                <a href="/startup" className="c-fs-5 mt-2 c-fw-t">
                  Partners and Integrations
                </a>
                <a href="/become-a-partner" className="c-fs-5 mt-2 c-fw-t">
                  Become a Partner
                </a>
                <a href="https://apply.workable.com/walkover/" target="_blank" className="c-fs-5 mt-2 c-fw-t">
                  Career
                </a>
              </div>
            </div>

            <div className="d-flex d-lg-block col-12 col-lg-2 f-social-a-cont mb-4 text-start text-lg-end order-first order-lg-last">
              <div className="footer-social-a-content col-6 col-lg-12">
                <span className="footer-social-a-text  c-fs-5 d-flex flex-column">
                  Download Apps
                </span>
                <div className="footer-social-a d-flex mt-3 justify-content-start justify-content-lg-end">
                  <a href="https://play.google.com/store/apps/details?id=com.hellornapp" target="_blank" className="me-4">
                    <Image
                      src="../img/android.svg"
                      width={20}
                      height={23}                      
                      alt="#"
                    />
                  </a>
                  <a href="https://apps.apple.com/in/app/hello-by-msg91/id1635375551" target="_blank">
                    <Image src="../img/apple.svg" width={20} height={24} alt="#" />
                  </a>
                </div>
              </div>
              <div className="footer-social-a-content col-6 col-lg-12 mt-lg-5">
                <span className="footer-social-a-text c-fs-5 d-flex flex-column">
                  Follow Us
                </span>
                <div className="footer-social-a d-flex mt-3 align-items-center justify-content-start justify-content-lg-end">
                  <a href="https://www.facebook.com/msg91" target="_blank" className="me-4">                    
                    <Image
                      src="../img/facebook.svg"
                      width={24}
                      height={24}                      
                      alt="#"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/msg91/" target="_blank" className="me-4">
                    <Image
                      src="../img/linkedin.svg"
                      width={24}
                      height={24}                      
                      alt="#"
                    />
                  </a>
                  <a href="https://twitter.com/msg91" target="_blank">
                    <Image src="../img/twitter.svg" width={24} height={24} alt="#"/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="pt-4 pb-5 footer2 w-100">
          <div className="container">
            <div className="c-fs-7 copyright mb-2">
              Copyright 2008-2020 MSG91 | All rights reserved.
            </div>
            <div className="d-flex justify-content-sm-between flex-column flex-lg-row">
              <div className="mt-4 mt-lg-0 gap-3">
                <a href="/terms-of-use" className="c-fs-5 ">
                  Terms of use
                </a>
                <span className="f2-spacer"> | </span>
                <a href="/privacy-policy" className="c-fs-5 ">
                  Privacy Policy
                </a>
                <span className="f2-spacer"> | </span>
                <a href="/gdpr" className="c-fs-5 ">
                  GDPR
                </a>
                <span className="f2-spacer"> | </span>
                <a href="/no-spam" className="c-fs-5 ">
                  No Spam
                </a>
                <span className="f2-spacer"> | </span>
                <a href="/startup-policy" className="c-fs-5 ">
                  Startup Policy
                </a>
                {/* <span className="f2-spacer"> | </span>
                <a href="/developer-policy" className="c-fs-5 ">
                  Developer Policy
                </a> */}
                <span className="f2-spacer"> | </span>
                <a href="/cookie-policy" className="c-fs-5 ">
                  Cookie Policy
                </a>
              </div>
              <div className="mt-4 mt-lg-0">
                <span>
                  A Product of{" "}
                  <Image src="../img/walkover.svg" width={20} height={20} alt="#"/>
                  <a href="https://walkover.in" target="_blank">Walkover</a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>    
  );
};

export default Footer;
