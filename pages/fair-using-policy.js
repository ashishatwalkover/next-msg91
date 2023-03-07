import HeadTag from "./head";
import Header from "@/components/header";
import Fairpricingpolicy from "@/components/termsofuse/fair-pricing-policy";
import Footer from "@/components/footer-sec";
const fairuse = () => {
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
        <Fairpricingpolicy />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default fairuse;
