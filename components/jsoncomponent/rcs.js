import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

const rcs = () => {
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
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/rcs.svg" className="product-page-logo" />
            <h1 className="heading">RCS</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">
            Event base automation
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          Redefine A2P messaging with RCS - Rich Communication Services{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={data?.rcs?.pageimg}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.rcs?.features?.one?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">Bring on the conversations across every channel</span>
            <span className="c-fs-3  mt-3">
            Serve your customers wherever they are.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src={data?.rcs?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">Add modern messaging into every application</span>
            <span className="c-fs-3  mt-3">
            Initiate a modern messaging experience for your customers into your brand’s website and mobile apps.
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.rcs?.features?.three.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">Deliver consistent and interactive experience</span>
            <span className="c-fs-3  mt-3">
            Be extraordinary while live chat with AI, bots and integrated apps for conversational business at scale.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default rcs;
