import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const rcs = () => {
  var HTTPSnippet = require("httpsnippet");
  const router = useRouter();
  var path;

  if (
    router.pathname.split("/")[1].length > 2 ||
    router.pathname.split("/")[1].length === 0
  ) {
    path = "global";
  } else {
    path = router.pathname.split("/")[1];
  }

  const [data, setData] = useState(null);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  var fetchData = async () => {
    const response = await import(`@/pages/content/${path}.json`);
    const jsonData = await response.default;
    return jsonData;
  };
  const fetchD = async () => {
    let content = await fetchData();
    setData(content);
  };
  fetchD();
  const snippet = new HTTPSnippet({
    log: {
      version: "1.2",
      entries: [
        {
          request: {
            method: "POST",
            url: "https://control.msg91.com/api/v5/rcs/send-rcs-message/",
            httpVersion: "HTTP/1.1",
            cookies: [],
            headers: [
              {
                name: "Authkey",
                value: "<authkey>",
              },
              {
                name: "accept",
                value: "application/json",
              },
              {
                name: "content-type",
                value: "application/json",
              },
            ],
            queryString: [],
            headersSize: -1,
            bodySize: -1,
            postData: {
              mimeType: "application/json",
              text: '\n{"customer_number":"91XXXXXXX","function_name":"text_message","text":"rcs test demo 1","project_id":"Default"}\n',
            },
          },
        },
      ],
    },
  });

  const node = snippet.convert("node");
  const cURL = snippet.convert("shell", "curl");
  const php = snippet.convert("php");
  const python = snippet.convert("python");
  const ruby = snippet.convert("ruby");

  return (
    <>
      <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/rcs.svg" className="product-page-logo" />
            <h1 className="heading">RCS</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">
            {data?.rcs?.smallheading}
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
            {data?.rcs?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>

        <div className="code-wrp">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active btn-sm"
                id="pills-cURL-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-cURL"
                type="button"
                role="tab"
                aria-controls="pills-cURL"
                aria-selected="true"
              >
                cURL
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-node-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-node"
                type="button"
                role="tab"
                aria-controls="pills-node"
                aria-selected="false"
              >
                Node
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-php-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-php"
                type="button"
                role="tab"
                aria-controls="pills-php"
                aria-selected="false"
              >
                PHP
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-ruby-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-ruby"
                type="button"
                role="tab"
                aria-controls="pills-ruby"
                aria-selected="false"
              >
                Ruby
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-python-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-python"
                type="button"
                role="tab"
                aria-controls="pills-python"
                aria-selected="false"
              >
                Python
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-cURL"
              role="tabpanel"
              aria-labelledby="pills-cURL-tab"
            >
              <pre>
                <code className={`language-javascript`}>{cURL}</code>
              </pre>
            </div>
            <div
              className="tab-pane fade"
              id="pills-node"
              role="tabpanel"
              aria-labelledby="pills-node-tab"
            >
              <pre>
                <code className={`language-javascript`}>{node}</code>
              </pre>
            </div>
            <div
              className="tab-pane fade"
              id="pills-php"
              role="tabpanel"
              aria-labelledby="pills-php-tab"
            >
              <pre>
                <code className={`language-javascript`}>{php}</code>
              </pre>
            </div>
            <div
              className="tab-pane fade"
              id="pills-ruby"
              role="tabpanel"
              aria-labelledby="pills-ruby-tab"
            >
              <pre>
                <code className={`language-javascript`}>{ruby}</code>
              </pre>
            </div>
            <div
              className="tab-pane fade"
              id="pills-python"
              role="tabpanel"
              aria-labelledby="pills-python-tab"
            >
              <pre>
                <code className={`language-javascript`}>{python}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className=" c-bg-grey  px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h  pt-4 pt-md-0">
          Features
        </span>

        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.rcs?.features?.one?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.rcs?.features?.one?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.rcs?.features?.one?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.rcs?.features?.two?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.rcs?.features?.two?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.rcs?.features?.two?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.rcs?.features?.three?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.rcs?.features?.three?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.rcs?.features?.three?.content}
            </span>
          </div>
        </div>
      </div>

      <div className="section mx-0 mx-md-5 mt-5 pt-4 pt-md-0">
        <span className="sub-heading px-3 ">More features</span>
        <div className="w-100 d-flex flex-column flex-md-row my-2">
          <div className="container d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2 px-3">
            <span className="c-fs-3">- {data?.rcs?.morefeatures?.one}</span>
            <span className="c-fs-3 mt-1">
              - {data?.rcs?.morefeatures?.two}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.rcs?.morefeatures?.three}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.rcs?.morefeatures?.four}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.rcs?.morefeatures?.five}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.rcs?.morefeatures?.six}
            </span>
          </div>
          <div className="col-12 col-md-6  my-auto mt-3  px-0 px-md-3  d-flex py-5 c-bg-grey flex-column flex-lg-row justify-content-center">
            <span className="c-fs-2 c-ff-h mx-auto">Looking for more?</span>
            <div className="mx-auto py-4 py-lg-0 ">
              <button className=" d-flex  btn btn-outline-primary c-fs-4 ms-0 ms-md-3 mt-3 mt-md-0">
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
      </div>
    </>
  );
};

export default rcs;
