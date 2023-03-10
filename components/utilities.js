import Link from "next/link";
import { MdFavorite, MdArrowForward } from "react-icons/md";

const Utilities = () => {
  return (
    <>
      <section className="utilities col-12 section">
        <div className="container ">
          <div className="us-cont d-flex  container justify-content-between alighn-items-center col-12">
            <div className="us-nav-cont col-3 d-lg-block d-md-none d-sm-none d-none ">
              <div className="us-nav" id="utilities-items">
                <h1 className="c-fs-1 mb-5">More Benefits </h1>
                <div
                  className="us-nav-options align-items-center mb-2 d-flex active"
                  id="link-shortner"
                >
                  <img src="../img/fill-circle.svg"></img>
                  <a href="#url-shortner" ><span className="c-fs-3">URL Shortner</span></a>
                </div>
                <div
                  className="us-nav-options align-items-center mb-2  d-flex"
                  id="link-knowledge"
                >
                  <img src="../img/fill-circle.svg"></img>
                  <a href="#knowledge-base"><span className="c-fs-3">Knowledgebase</span></a>
                </div>
                <div
                  className="us-nav-options align-items-center mb-2 d-flex"
                  id="link-file"
                >
                  <img src="../img/fill-circle.svg"></img>
                  <a href="#file-hosting"><span className="c-fs-3">File Hosting</span></a>
                </div>
              </div>
            </div>

            <div className="us-main-cont ">
              <div className="us-spacer"></div>
              
              <div
                className="us-main d-flex flex-md-row flex-column align-items-center"
                id="url-shortner"
              >
                <div className=" d-flex flex-column ">
                  <div className="d-flex align-content-center mb-2">
                    <img src="/img/short-url-ico.svg" className="pe-4"/>
                    <span className="c-fs-2 c-ff-h align-middle ">URl Shortner</span>
                  </div>
                  <p className="c-fs-4 c-fw-b">Make a long story short</p>
                  <p className="c-fs-4">
                    Engineered for high reliability, our globally distributed
                    carrier network and intelligent routing ensure the highest
                    SMS delivery and lowest latency.
                  </p>
                  <button
                    href="#"
                    className="btn btn-outline-primary c-fs-6 c-fw-m mt-2"
                  >
                    Learn More <MdArrowForward />
                  </button>
                </div>
                <img src="/img/short-url-img.svg" className="utility-img" />
              </div>

              <div className="us-spacer"></div>
              
              <div
                className="us-main d-flex flex-md-row-reverse flex-column align-items-center"
                id="knowledge-base"
              >
                <div>
                  <div className="d-flex align-content-center mb-2">
                    <img src="/img/kb-ico.svg" className="pe-4"/>
                    <span className="c-fs-2 c-ff-h align-middle ">Knowledgebase</span>
                  </div>
                  <p className="c-fs-4 c-fw-b">
                    Maximize your productivity with no code.
                  </p>
                  <p className="c-fs-4">
                    Engineered for high reliability, our globally distributed
                    carrier network and intelligent routing ensure the highest
                    SMS delivery and lowest latency.
                  </p>
                  <button
                    href="#"
                    className="btn btn-outline-primary c-fs-6 c-fw-m mt-2"
                  >
                    Learn More <MdArrowForward />
                  </button>
                </div>
                <img src="/img/kb-img.svg" className="utility-img" />
              </div>
              
              <div className="us-spacer"></div>

              <div
                className="us-main pb-300 d-flex flex-md-row flex-column align-items-center"
                id="file-hosting"
              >
                <div>
                  <div className="d-flex align-content-center mb-2">
                    <img src="/img/files-ico.svg"className="pe-4" />
                    <span className="c-fs-2 c-ff-h align-middle ">Files</span>
                  </div>
                   <p className="c-fs-4 c-fw-b">
                    More storage more productivity.
                  </p>
                  <p className="c-fs-4">
                    Engineered for high reliability, our globally distributed
                    carrier network and intelligent routing ensure the highest
                    SMS delivery and lowest latency.
                  </p>
                  <button
                    href="#"
                    className="btn btn-outline-primary c-fs-6 c-fw-m mt-2"
                  >
                    Learn More <MdArrowForward />
                  </button>
                </div>
                <img src="/img/files-img.svg" className="utility-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Utilities;
