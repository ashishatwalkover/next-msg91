import HeadTag from "./head";
import Header from "@/components/header";
import Footer from "@/components/footer-sec";
import Terms from "@/components/termsofuse/terms";
import Privacypolicy from "@/components/termsofuse/privacy-policy";
import Gdpr from "@/components/termsofuse/gdpr";
import Refundpolicy from "@/components/termsofuse/refund-policy";
import Cookiepolicy from "@/components/termsofuse/cookie-policy";
import Startuppolicy from "@/components/termsofuse/startup-policy";
import Fairpricingpolicy from "@/components/termsofuse/fair-pricing-policy";
import Nospam from "@/components/termsofuse/no-spam";
const termsofuse = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className=" d-flex container terms-cont py-5">
        <div className="d-flex gap-3 flex-column col-2 "></div>
        <div className="d-flex gap-3 flex-column col-2 terms-nav">
          <a href="terms">
            <span className="c-fs-3 text-black">Terms</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">Privacy Policy </span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">GDPR</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">Refund Policy</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">Cookie Policy</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">Startup Policy</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">Fair Pricing Policy</span>
          </a>
          <a href="terms">
            <span className="c-fs-3 text-black">NO Spam</span>
          </a>
        </div>
          <div className="col-10 h-100">
            {/* <Terms/> */}
            {/* <Privacypolicy /> */}
        {/* <Gdpr /> */}
        {/* <Refundpolicy /> */}
        {/* <Cookiepolicy /> */}
        {/* <Startuppolicy /> */}
        {/* <Fairpricingpolicy /> */}
        <Nospam />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default termsofuse;
