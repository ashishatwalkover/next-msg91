import HeadTag from "./head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MdKeyboardArrowRight, MdDone } from "react-icons/md";

const partnersandintegrations = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className="container text-center  overflow-hidden ">
        <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h2 className="heading mb-5">Add-Ons that enable SMS
              notifications in your
              application with a single click</h2>
          </div>
          <a href="https://control.msg91.com/signup/?page=home" className="btn btn-primary c-fs-3 ">Get your API key</a>
        </div>
      </div>
      <div className="container text-center  overflow-hidden ">
        <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h2 className="sub-heading mb-4">MSG91 addons for your preferred platform</h2>
          </div>
          <p className="c-fs-3 mx-auto mb-3">
            Note – For paid plugins you will receive free credits, depending on the policy.
          </p>
        </div>
      </div>
      <div className="container overflow-hidden ">
        <div className=" mx-auto justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading text-center">Don't see the addon or plugin you are
              looking for ?</h1>
          </div>
        </div>
        <div className="container px-3 px-md-auto">
          <p className="c-fs-2 c-fw-b">
            Why build MSG91 Plugins?
          </p>
          <div className=" ">
            <span className="c-fs-1 c-fw-b text-black">
              <MdDone />
            </span>
            <span className="c-fs-4 ms-2">All the revenues on the plugin will be yours and it will be your plugin.</span>
          </div>
          <div className=" ">
            <span className="c-fs-1 c-fw-b text-black">
              <MdDone />
            </span>
            <span className="c-fs-4 ms-2">We will provide free OTP SMS (one time) to every plug-in users.</span>
          </div>
          <div className=" ">
            <span className="c-fs-1 c-fw-b text-black">
              <MdDone />
            </span>
            <span className="c-fs-4 ms-2">
              We will promote your plugin using Google ad, blogs, mail to all our 40K clients.
            </span>
          </div>
          <div className=" ">
            <span className="c-fs-1 c-fw-b text-black">
              <MdDone />
            </span>
            <span className="c-fs-4 ms-2">Mentoring for developing plug-in for your choice of platform.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default partnersandintegrations;
