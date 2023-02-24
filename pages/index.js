import HeadTag from "@/components/head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";
import Footer from "@/components/footer";
import Home from "@/components/home";
import { MdFavorite, MdArrowForward } from "react-icons/md";
import Link from "next/link";
const IndexPage = () => {
  return (
    <div>
      <HeadTag />
      <Notification />
      <Header />
      <Home />
      <div className="container text-center px-4 col-xs-12 col-sm-10 col-md-10 mx-auto section">
        <h1 className="heading">Level Up Your Engagement Game</h1>
        <p className="c-fs-1  m-auto col-md-8">
          Best Cloud Communication Platform to Enhance Present Customer
          Engagement and Boost Future Reach
        </p>
        <button className="btn btn-primary btn-lg c-fs-3 mt-4" type="button">
          Get started for Free
        </button>
      </div>

      <section className="trusted-by  d-flex flex-column mx-auto text-center">
        <div className="mb-5 c-fs-2">
          <MdFavorite className="love" /> Trusted by
        </div>
        <div className="d-flex flex-wrap justify-content-center col-12  mb-5 mx-auto">
          <div className="col-lg-2 col-sm-3 col-md-3 col-6">
            <div className="mb-4 text-center align-middle">
              <img src="img/ixigo.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md-3 col-6 d-none d-md-block">
            <div className="mb-4 text-center">
              <img src="img/unacademy.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md-3 col-6">
            <div className="mb-4 text-center">
              <img src="img/indeed.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md-3 col-6 d-none d-lg-block">
            <div className="mb-4 text-center">
              <img src="img/nsic.png" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md-3 col-6 d-none d-sm-block">
            <div className="mb-4 text-center">
              <img src="img/xiaomi.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="row g-0">
          <div className="hello col-12 col-lg-3 col-sm-6">
            <h2 className="small-heading m-3">Conversation</h2>
            <div className="spacer"></div>
            <div className="pro-footer">
              <div className="c-fs-2 text-white">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon hello-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span className="c-fs-2 c-fw-m">Hello</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="segmento col-12 col-lg-3 col-sm-6">
            <h2 className="small-heading m-3">Segmentation</h2>
            <div className="spacer"></div>
            <div className="pro-footer alt">
              <div className="c-fs-2 text-white">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon segmento-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span className="c-fs-2 c-fw-m">Segmento</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="campaign col-12 col-lg-3 col-sm-6">
            <h2 className="small-heading m-3">Flow/OneAPI</h2>
            <div className="spacer"></div>
            <div className="pro-footer">
              <div className="c-fs-2 text-white">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon campaign-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span className="c-fs-2 c-fw-m">Campaign</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="otp col-12 col-lg-3 col-sm-6">
            <h2 className="small-heading m-3">Verification</h2>
            <div className="spacer"></div>
            <div className="pro-footer alt">
              <div className="c-fs-2 text-white">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon otp-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  {" "}
                  <span className="c-fs-2 c-fw-m">OTP</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="channels container d-flex flex-column justify-content-center justift-content-sm-start section">
        <div className="d-flex flex-column text-center text-sm-start  ">
          <h2 className="sub-heading c-ff-h mb-3">Communication channels</h2>
          <p className="c-fs-2 mx-2 mx-sm-0">
            Empower conversations with best-in-class communication API.
            Full-featured APIs for developers & businesses to connect and engage
            their customers globally.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-sm-start justify-content-center my-4">
          <a href="/hello" target="_blank" className="chn-btn sms">
            <div className="icon sms-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">SMS</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn email">
            <div className="icon email-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">Email</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn voice">
            <div className="icon voice-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">Voice</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn whatsapp">
            <div className="icon whatsapp-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">WhatsApp</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn telegram">
            <div className="icon telegram-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">Telegram</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn rcs">
            <div className="icon rcs-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-3">RCS</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
        </div>

        <div className="d-flex flex-wrap g-4 pt-5 ">
          <div className="py-7 stats py-3 pe-3  col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 small-heading c-fw-sb text-primary">4.5 Billion+</span>
              <span className="c-fs-2 c-fw-m">API calls /Month</span>
            </div>
          </div>
          <div className="py-7 stats py-3 pe-3   col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 small-heading c-fw-sb text-primary">'add new stat'</span>
              <span className="c-fs-2 c-fw-m">Tickets resolved/Month</span>
            </div>
          </div>

          <div className="py-7 stats py-3 pe-3   col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 small-heading c-fw-sb text-primary">150 Billion+</span>
              <span className="c-fs-2 c-fw-m">Emails Sent/Month</span>
            </div>
          </div>
          <div className="py-7 stats py-3  pe-3  col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 small-heading c-fw-sb text-primary">2.3 Billion+</span>
              <span className="c-fs-2 c-fw-m">SMS Sent/Month</span>
            </div>
          </div>

        </div>
      </section>

      <ProductMenu />

      <section className="utilities col-12 section">        
          <div className="us-cont d-flex container justify-content-between alighn-items-center col-12">
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

              <div style={{marginTop: "70px"}}></div>
              
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
                className="us-main d-flex flex-md-row flex-column align-items-center"
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

              <div style={{marginTop: "70px"}}></div>
              
            </div>
          </div>        
      </section>

      <div className="container mt-5">
        <h2 className="sub-heading c-ff-h my-5">Our Client stories</h2>
        <div className=" d-flex flex-column flex-md-row mt-3 ">
          <div className="d-flex flex-column col-12 col-md-6 pe-0 pe-md-5 justify-content-center justify-content-md-start">
            <img src="/img/milkbasket img.png" className="img-fluid " />
            <p className="c-fs-2 c-fw-m pt-4 col-12 d-none d-md-block">
              Milkbasket sends regular updates to their customers’ via MSG91.
              Milkbasket is an E-commerce platform providing 
              </p >
              <p className="c-fs-4">milk and grocery at
              doorsteps. With the vision to offer their customers a seamless
              customized delivery, and to ensure it happens efficiently,
              Milkbasket has been rigorously working on sending the updates and
              information for their customers security and satisfaction.
            </p>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0 mt-lg-0 d-flex  flex-row flex-md-column justify-content-center justify-content-md-start  ">
            <div className=" d-flex  mb-5 mb-lg-0 me-5  ">
              <img
                src="/img/unacademy img.png"
                className="img-fluid clint-img"
              />
              <div className="container-fluid d-none d-md-block">
                <p className="c-fs-2 c-fw-m  ps-3">
                  Unacademy ensures seamless communication using SMS via MSG91.
                </p>
                <Link
                  href="#"
                  className=" c-fs-4 btn btn-link text-decoration-none py-2 px-3 mx-auto"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className=" d-flex  mt-xl-5 mt-lg-5 mt-md-5 mt-0   ">
              <img src="/img/ixigo img.png" className="img-fluid clint-img" />
              <div className="container-fluid d-none d-md-block">
                <p className="c-fs-2 c-fw-m  ps-3 ">
                  Ixigo ensures seamless communication using SMS via MSG91.
                </p>
                <Link
                  href="#"
                  className=" c-fs-4 btn btn-link text-decoration-none py-2 px-3 mx-auto"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default IndexPage;