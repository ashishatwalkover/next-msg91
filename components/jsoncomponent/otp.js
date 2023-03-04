import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

const otp = () => {
  const router = useRouter();
  var path = router.pathname.split("/")[1];
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchD = async () => {
      let content = await fetchData();
      setData(content);
    };
    fetchD();
  }, []);

  var fetchData = async () => {
    const response = await import(`@/pages/content/${path}.json`);
    const jsonData = await response.default;
    return jsonData;
  };

  return (
    <>
      <div className="container text-center px-4 overflow-hidden col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/otp.svg" className="product-page-logo" />
            <h1 className="heading">OTP</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">Instant secure varification</p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          Quick and reliable authentication by 2FA using multiple channels.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={data?.otp?.pageimg}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.otp?.features?.one?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Pin Generation
            </span>
            <span className="c-fs-3  mt-3">
            Our OTP service platform provides the back-end logic needed for PIN generation (OTP) so you don't have to.
Each code is tied to an individual user and can only be used once.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src={data?.otp?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Number Lookup
            </span>
            <span className="c-fs-3  mt-3">
            Save money and increase conversation rates with our number validation. We're able to catch invalid numbers as they're entered, making sure your message is headed to a valid number.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src={data?.otp?.features?.three?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            Voice Failover
            </span>
            <span className="c-fs-3  mt-3">
            Voice-based 2FA adds the text-to-speech capability to the standard 2FA process, enabling you to place calls and deliver user authentication PINs via voice audio. By adding voice failover message delivery rates can be pushed close to 100 percent.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default otp;
