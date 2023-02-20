import { MdFavorite, MdArrowForward } from "react-icons/md";
import { useEffect, useRef } from "react";

const Home = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const shortner = document.getElementById("url-shortner");
    const knowledge = document.getElementById("knowledge-base");
    const file = document.getElementById("file-hosting");
    
    const utilitiesItems = document.getElementById("utilities-items");
    const linkShortner = document.getElementById("link-shortner");
    const linkKnowledge = document.getElementById("link-knowledge");
    const linkFile = document.getElementById("link-file");

    const handleScroll = (e) => {      
      if (
        utilitiesItems.offsetTop >= shortner.offsetTop &&
        utilitiesItems.offsetTop + 45 <= shortner.offsetTop + 495
      ) {
        linkShortner.classList.add("active");        
      } else {
        linkShortner.classList.remove("active");        
      }
      if (
        utilitiesItems.offsetTop >= knowledge.offsetTop - 45 &&
        utilitiesItems.offsetTop + 90 <= knowledge.offsetTop + 495
      ) {
        linkKnowledge.classList.add("active");
      } else {
        linkKnowledge.classList.remove("active");
      }
      if (
        utilitiesItems.offsetTop >= file.offsetTop - 90 &&
        utilitiesItems.offsetTop <= file.offsetTop + 495
      ) {
        linkFile.classList.add("active");
      } else {
        linkFile.classList.remove("active");
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   // just trigger this so that the initial state
  //   // is updated as soon as the component is mounted
  //   // related: https://stackoverflow.com/a/63408216
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <div className="container text-center px-4  col-xs-12 col-sm-10 col-md-8 col-l-6 mx-auto section">
        <h1 className="heading">Level Up Your Engagement Game</h1>
        <p className="sub-heading  m-auto">
          Best Cloud Communication Platform to Enhance Present Customer
          Engagement and Boost Future Reach
        </p>
        <button className="btn btn-primary btn-lg c-fs-4 mt-3" type="button">
          Get started for Free
        </button>
      </div>

      <section className="trusted-by  d-flex flex-column mx-auto text-center">
        <div className="mb-5 c-fs-4">
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
            <h2 className="title">Conversation</h2>
            <div className="spacer"></div>
            <div className="pro-footer">
              <div className="pro-text">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon hello-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span>Hello</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="segmento col-12 col-lg-3 col-sm-6">
            <h2 className="title">Segmentation</h2>
            <div className="spacer"></div>
            <div className="pro-footer alt">
              <div className="pro-text">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon segmento-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span>Segmento</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="campaign col-12 col-lg-3 col-sm-6">
            <h2 className="title">Flow/OneAPI</h2>
            <div className="spacer"></div>
            <div className="pro-footer">
              <div className="pro-text">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon campaign-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  <span>Campaign</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
          <div className="otp col-12 col-lg-3 col-sm-6">
            <h2 className="title">Verification</h2>
            <div className="spacer"></div>
            <div className="pro-footer alt">
              <div className="pro-text">
                Empower your employees, Support your customers.
              </div>
              <a href="/hello" target="_blank" className="pro-btn">
                <div className="icon otp-icon"></div>
                <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
                  {" "}
                  <span>OTP</span> <MdArrowForward />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="channels container px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section">
        <div className="d-flex flex-column text-center text-sm-start  ">
          <h2 className="heading mb-3">Communication channels</h2>
          <p className="c-fs-3 mx-2 mx-sm-0">
            Empower conversations with best-in-class communication API.
            Full-featured APIs for developers & businesses to connect and engage
            their customers globally.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-sm-start justify-content-center my-4">
          <a href="/hello" target="_blank" className="chn-btn sms">
            <div className="icon sms-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">SMS</span> <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn email">
            <div className="icon email-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">Email</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn voice">
            <div className="icon voice-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">Voice</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn whatsapp">
            <div className="icon whatsapp-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">WhatsApp</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn telegram">
            <div className="icon telegram-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">Telegram</span>{" "}
              <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn rcs">
            <div className="icon rcs-icon"></div>
            <div className="btn-label d-flex flex-none flex-md-fill justify-content-between align-items-center">
              <span className="c-fs-4">RCS</span> <MdArrowForward className="d-none d-md-block" />
            </div>
          </a>
        </div>

        <div className="d-flex flex-wrap g-4 pt-5 ">
          <div className="py-7 stats py-3 pe-3  col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 stats-title">4.5 Million+</span>
              <span className="c-fs-3 c-fw-m">API calls</span>
            </div>
          </div>

          <div className="py-7 stats py-3 pe-3   col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 stats-title">150 Million+</span>
              <span className="c-fs-3 c-fw-m">Emails Delivered</span>
            </div>
          </div>
          <div className="py-7 stats py-3  pe-3  col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 stats-title">2.3 Million+</span>
              <span className="c-fs-3 c-fw-m">SMS Delivered</span>
            </div>
          </div>

          <div className="py-7 stats py-3 pe-3   col-6 col-lg-6 col-xl-3">
            <div className="lh-1 d-flex flex-column align-items-center align-items-sm-start">
              <span className="mb-1 stats-title">192</span>
              <span className="c-fs-3 c-fw-m">Countries</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
