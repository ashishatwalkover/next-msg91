import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

const hello = () => {
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
            <img src="../img/hello.svg" className="product-page-logo" />
            <h1 className="heading">Hello</h1>
          </div>

          <p className="c-fs-4 text-uppercase col-campaign c-ls-20 mx-auto">
            {data?.hello?.smallheading}
          </p>
          <h2 className="small-heading px-3 w-md-75 w-100 mx-auto">
            {data?.hello?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={"/img/hello-page-img.png"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src="/img/camp-f-img-one.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
              Empower your employees, Support your customers
            </span>
            <span className="c-fs-3  mt-3">
              Deliver consistent customer experiences, unify and track all the
              customer conversations across omni channel platforms for
              uninterrupted flow of communication.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src="/img/camp-f-img-two.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
              Conversations made easier with RCS, WhatsApp and 30+ channels
            </span>
            <span className="c-fs-3  mt-3">
              HELLO enables you to communicate for a real-time experience!
              Connect with your users on their most trusted platform that
              includes RCS, WhatsApp, facebook and more.
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src="/img/camp-f-img-three.svg" className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m  ">
              Assist and call Customers directly from our platform
            </span>
            <span className="c-fs-3  mt-3">
              Our contact centre solution empowers interaction through IVR, Call
              redirecting, call recording and call assigning.
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="sub-heading">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - Provide customer support via screen sharing on a single click
            </span>
            <span className="c-fs-3 mt-1">
              - Troubleshooting over video in seconds
            </span>
            <span className="c-fs-3 mt-1">
              - Record agent performance for quality control
            </span>
            <span className="c-fs-3 mt-1">
              - Understand your customers emotions through sentiment analysis
            </span>
            <span className="c-fs-3 mt-1">
              - Solution for remote access and support
            </span>
            <span className="c-fs-3 mt-1">- Track campaign performance</span>
          </div>
          <div className="my-auto mt-3 ms-4   px-5 d-flex py-5 c-bg-grey flex-wrap justify-content-center">
            <span className="c-fs-2 c-ff-h">Looking for more?</span>
            <button className="btn btn-outline-primary c-fs-4 ms-0 ms-md-3 mt-3 mt-md-0">
              {" "}
              Request a Feature
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default hello;
