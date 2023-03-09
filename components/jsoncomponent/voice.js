import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrustedSec from "@/components/trusted_by";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const voice = () => {
  var HTTPSnippet = require('httpsnippet');
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
    Prism.highlightAll();
  }, []);

  var fetchData = async () => {
    const response = await import(`@/pages/content/${path}.json`);
    const jsonData = await response.default;
    return jsonData;
  };

  const snippet = new HTTPSnippet({
    "log": {
        "version": "1.2",
        "entries": [
            {
                "request": {
                    "method": "POST",
                    "url": "https://control.msg91.com/api/v5/email/send",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Authkey",
                            "value": "<authkey>"
                        },
                        {
                            "name": "accept",
                            "value": "application/json"
                        },
                        {
                            "name": "content-type",
                            "value": "application/json"
                        }
                    ],
                    "queryString": [],
                    "headersSize": -1,
                    "bodySize": -1,
                    "postData": {
                        "mimeType": "application/json",
                        "text": "\n{\"to\":[{\"name\":\"Mark\",\"email\":\"recipient@email.address\"}],\"from\":{\"name\":\"Joe\",\"email\":\"sender@email.address\"},\"cc\":[{\"email\":\"cc@email.address\"},{\"email\":\"test@email.address\"}],\"bcc\":[{\"email\":\"bcc@email.address\"},{\"email\":\"test1@email.address\"}],\"domain\":\"The domain which you have registered with us. We sign DKIM with this domain.\",\"mail_type_id\":\"1 for Transactional, 2 for Notificational, 3 for Promotional - Default is 3\",\"in_reply_to\":\"If the current mail is reply of any mail then that mail Message ID.\",\"reply_to\":[{\"email\":\"mail1@domain.com\"},{\"email\":\"mail2@domain.com\"}],\"attachments\":[{\"filePath\":\"Public path for file.\",\"fileName\":\"File Name\"},{\"file\":\"File in Data URI format data:content/type;base64,<data>.\",\"fileName\":\"File Name\"}],\"template_id\":\"YOUR_UNIQUE_TEMPLATE_NAME\",\"variables\":{\"VAR1\":\"VAR1 VALUE\",\"VAR2\":\"VAR2 VALUE\"}}\n"
                    }
                }
            }
        ]
    }
  });
  
  
  const node = snippet.convert('node');
  const cURL = snippet.convert('shell', 'curl');  
  const php = snippet.convert('php');
  const python = snippet.convert('python');
  const ruby = snippet.convert('ruby');

return (
    <>
<div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/voice.svg" className="product-page-logo" />
            <h1 className="heading">Voice</h1>
          </div>
          <p className="c-fs-5 c-fw-sb text-uppercase col-campaign c-ls-20 mx-auto">
          {data?.voice?.smallheading}
          </p>
          <h2 className="small-heading c-ff-b c-fw-r w-100 mx-auto">
          {data?.voice?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        
        <div className="code-wrp">
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active btn-sm" id="pills-cURL-tab" data-bs-toggle="pill" data-bs-target="#pills-cURL" type="button" role="tab" aria-controls="pills-cURL" aria-selected="true">cURL</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-node-tab" data-bs-toggle="pill" data-bs-target="#pills-node" type="button" role="tab" aria-controls="pills-node" aria-selected="false">Node</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">PHP</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-ruby-tab" data-bs-toggle="pill" data-bs-target="#pills-ruby" type="button" role="tab" aria-controls="pills-ruby" aria-selected="false">Ruby</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-python-tab" data-bs-toggle="pill" data-bs-target="#pills-python" type="button" role="tab" aria-controls="pills-python" aria-selected="false">Python</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-cURL" role="tabpanel" aria-labelledby="pills-cURL-tab" >
              <pre>
                <code className={`language-javascript`}>{cURL}</code>
              </pre>
            </div>
            <div className="tab-pane fade" id="pills-node" role="tabpanel" aria-labelledby="pills-node-tab" >
              <pre>
                <code className={`language-javascript`}>{node}</code>
              </pre>
            </div>
            <div className="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab" >
              <pre>
                <code className={`language-javascript`}>{php}</code>
              </pre>
            </div>
            <div className="tab-pane fade" id="pills-ruby" role="tabpanel" aria-labelledby="pills-ruby-tab" >
              <pre>
                <code className={`language-javascript`}>{ruby}</code>
              </pre>
            </div>
            <div className="tab-pane fade" id="pills-python" role="tabpanel" aria-labelledby="pills-python-tab" >
              <pre>
                <code className={`language-javascript`}>{python}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>

      <div className=" c-bg-grey px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h ">Features</span>

        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.voice?.features?.one?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">{data?.voice?.features?.one?.heading}</span>
            <span className="c-fs-3  mt-3">
            {data?.voice?.features?.one?.content}
            </span>
          </div>
        </div>

        <div className="container d-lg-flex flex-row align-items-center mt-5">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
            <img src={data?.voice?.features?.two?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">{data?.voice?.features?.two?.heading}</span>
            <span className="c-fs-3  mt-3">
            {data?.voice?.features?.two?.content}
            </span>
          </div>
        </div>
        <div className="container d-lg-flex flex-row align-items-center">
          <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
            <img src={data?.voice?.features?.three?.img} className="feature-img" />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
            <span className="c-fs-2 c-fw-m ">{data?.voice?.features?.three?.heading}</span>
            <span className="c-fs-3  mt-3">
            {data?.voice?.features?.three?.content}
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="sub-heading">More features</span>
        <div className="container d-flex flex-column flex-md-row my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2">
            <span className="c-fs-3">
              - {data?.voice?.morefeatures?.one}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.voice?.morefeatures?.two}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.voice?.morefeatures?.three} 
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.voice?.morefeatures?.four}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.voice?.morefeatures?.five}
            </span>
            <span className="c-fs-3 mt-1">- {data?.voice?.morefeatures?.six}</span>
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

export default voice;