import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

const knowledgebase = () => {
  
  const router = useRouter();
  // console.log(router.pathname);
  var path
  if(router.pathname=='/'){
   var path = "global"

  }
  else if(router.pathname.split("/")[1]>3){
   var path = global ;

  }
  else{

    var path = router.pathname.split("/")[1];
  }
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
            <img src="../img/kb-ico.svg" className="product-page-logo" />
            <h1 className="heading">Knowledgebase</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">{data?.knowledgebase?.smallheading}</p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          {data?.knowledgebase?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={data?.knowledgebase?.pageimg}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.knowledgebase?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            {data?.knowledgebase?.features?.one?.heading}
            </span>
            <span className="c-fs-3  mt-3">
            {data?.knowledgebase?.features?.one?.content}
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src={data?.knowledgebase?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            {data?.knowledgebase?.features?.two?.heading}
            </span>
            <span className="c-fs-3  mt-3">
            {data?.knowledgebase?.features?.two?.content}
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col-6 flex-column align-items-flex-start order-2">
            <img src={data?.knowledgebase?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">
            {data?.knowledgebase?.features?.three?.heading}
            </span>
            <span className="c-fs-3  mt-3">
            {data?.knowledgebase?.features?.three?.knowledgebase}
            </span>
          </div>
        </div>
      </div>

     

      <div className="container">
        <span className="sub-heading">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - {data?.knowledgebase?.morefeatures?.one}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.knowledgebase?.morefeatures?.two}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.knowledgebase?.morefeatures?.three}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.knowledgebase?.morefeatures?.four}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.knowledgebase?.morefeatures?.five}
            </span>
            <span className="c-fs-3 mt-1">- {data?.knowledgebase?.morefeatures?.six}</span>
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

export default knowledgebase;
