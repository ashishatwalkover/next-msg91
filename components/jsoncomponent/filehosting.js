import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";
const files = () => {
  const router = useRouter();
  var path;
  
  if (
    router.pathname.split("/")[1].length > 3 ||
    router.pathname.split("/")[1].length === 0
  ) {
    path = "global";
  } else {
    path = router.pathname.split("/")[1];
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
      <div className="container text-center  overflow-hidden col-12 col-sm-8">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/hello.svg" className="product-page-logo" />
            <h1 className="heading">Hello</h1>
          </div>

          <p className="c-fs-4 text-uppercase col-files c-ls-20 mx-auto">
            {data?.filehosting?.smallheading}
          </p>
          <h2 className="small-heading px-3 w-md-75 w-100 mx-auto">
            {data?.filehosting?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={data?.filehosting?.pageimg}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey  px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h  pt-4 pt-md-0">Features</span>

        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.filehosting?.features?.one?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.filehosting?.features?.one?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.filehosting?.features?.one?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.filehosting?.features?.two?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.filehosting?.features?.two?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.filehosting?.features?.two?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.filehosting?.features?.three?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.filehosting?.features?.three?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.filehosting?.features?.three?.content}
            </span>
          </div>
        </div>
      
      </div>

      <div className="container pt-4 pt-md-0">
        <span className="sub-heading">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">- {data?.filehosting?.morefeatures?.one}</span>
            <span className="c-fs-3 mt-1">
              - {data?.filehosting?.morefeatures?.two}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.filehosting?.morefeatures?.three}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.filehosting?.morefeatures?.four}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.filehosting?.morefeatures?.five}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.filehosting?.morefeatures?.six}
            </span>
          </div>
          <div className=" c-bg-grey  p-3 p-lg-5  container text-center d-md-flex justify-content-sm-between align-items-center flex-xl-row flex-lg-column flex-sm-column flex-md-column"> 
                <span className="small-heading ">Experience The Awesomeness</span>
                <div className="mt-3 mt-lg-0">
                    <button className="btn btn-outline-primary my-1 c-fs-4 mx-2"> See pricing</button>
                    <button className="btn btn-primary ms-lg-4 my-1 c-fs-4 mx-2"> Get started for free</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default files;
