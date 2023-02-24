import SeccondFooter from "./seccond_footer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <SeccondFooter/>
      <div className="footer pt-5">
        <div className="footer-main-cont mt-4 mb-4 container">
          <div className="row justify-content-sm-between">                                    

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Our Products</h4>
              <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">                
                <Link href="#" className="c-fs-6 c-fw-t">
                  Hello
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Segmento
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  campaign
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  OTP
                </Link>
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Channels</h4>
              <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <Link href="#" className="c-fs-6 c-fw-t">
                  SMS
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Email
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Voice
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  RCS
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Virtual Number
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  WhatsApp
                </Link>
                {/* <Link href="#" className="c-fs-6 c-fw-t">
                  View All Channels
                </Link> */}
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className="c-fs-5 d-flex flex-column">Resources</h4>
              <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <Link href="#" className="c-fs-6 c-fw-t">
                  Industries
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Blogs
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Case Studies
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  FAQ
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  API Documentation
                </Link>
              </div>
            </div>

            <div className="col-6 col-lg-2 mb-4">
              <h4 className=" c-fs-5 d-flex flex-column">Discover</h4>
              <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                <Link href="#" className="c-fs-6 c-fw-t">
                  About Us
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Pricing
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Contact Us
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Partner Program
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  MSG91 For Developers
                </Link>
                <Link href="/startup" className="c-fs-6 c-fw-t">
                  MSG91 For Startups
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Tools And Addons
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Our Programs
                </Link>
                <Link href="#" className="c-fs-6 c-fw-t">
                  Career
                </Link>
              </div>
            </div>

            <div className="d-flex d-lg-block col-12 col-lg-2 f-social-link-cont mb-4 text-start text-lg-end order-first order-lg-last">
              <div className="footer-social-link-content col-6 col-lg-12">
                <span className="footer-social-link-text  c-fs-5 d-flex flex-column">
                  Download Apps
                </span>
                <div className="footer-social-link d-flex mt-3 justify-content-start justify-content-lg-end">
                  <a href="https://play.google.com/store/apps/details?id=com.msg91.android" target="_blank" className="me-4">
                    <Image
                      src="../img/android.svg"
                      width={20}
                      height={23}                      
                      alt="#"
                    />
                  </a>
                  <a href="https://itunes.apple.com/us/app/msg91/id981827687" target="_blank">
                    <Image src="../img/apple.svg" width={20} height={24} alt="#" />
                  </a>
                </div>
              </div>
              <div className="footer-social-link-content col-6 col-lg-12 mt-lg-5">
                <span className="footer-social-link-text c-fs-5 d-flex flex-column">
                  Follow Us
                </span>
                <div className="footer-social-link d-flex mt-3 align-items-center justify-content-start justify-content-lg-end">
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
                      src="../img/Linkedin.svg"
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
              <div className="mt-4 mt-lg-0">
                <Link href=" #" className="c-fs-6">
                  Terms of use
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  Privacy Policy
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  GDPR
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  No Spam
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  Startup Policy
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  Developer Policy
                </Link>
                <span className="f2-spacer"> | </span>
                <Link href=" #" className="c-fs-6">
                  Cookie Policy
                </Link>
              </div>
              <div className="mt-4 mt-lg-0">
                <span>
                  A Product of{" "}
                  <Image src="../img/walkover.svg" width={20} height={20} alt="#"/>
                  <Link href="https://walkover.in" target="_blank">Walkover</Link>
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
