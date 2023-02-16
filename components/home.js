import { MdFavorite, MdArrowForward } from "react-icons/md";
import { useEffect, useRef } from "react";

const Home = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const shortner = document.getElementById("url-shortner");
    const knowledge = document.getElementById("knowledge-base");
    const file = document.getElementById("file-hosting");

    const linkShortner = document.getElementById("link-shortner");
    const linkKnowledge = document.getElementById("link-knowledge");
    const linkFile = document.getElementById("link-file");

    const handleScroll = (e) => {
      console.log(shortner.offsetTop, window.scrollY);
      if (
        window.scrollY >= shortner.offsetTop &&
        window.scrollY <= shortner.offsetTop + 500
      ) {
        linkShortner.classList.add("active");
      } else {
        linkShortner.classList.remove("active");
      }
      if (
        window.scrollY >= knowledge.offsetTop &&
        window.scrollY <= knowledge.offsetTop + 500
      ) {
        linkKnowledge.classList.add("active");
      } else {
        linkKnowledge.classList.remove("active");
      }
      if (
        window.scrollY >= file.offsetTop &&
        window.scrollY <= file.offsetTop + 500
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
        <button className="btn btn-primary btn-lg mt-3" type="button">
          Get started for Free
        </button>
      </div>

      <section className="trusted-by  d-flex flex-column mx-auto text-center">
        <div className="mb-3">
          <MdFavorite className="love" /> Trusted by
        </div>
        <div className="d-flex flex-wrap justify-content-center col-12  mb-5 mx-auto">
          <div className="col-lg-2 col-sm-3 col-md--3 col-6">
            <div className="mb-4 text-center align-middle">
              <img src="img/unacademy.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md--3 col-6">
            <div className="mb-4 text-center">
              <img src="img/housing.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md--3 col-6">
            <div className="mb-4 text-center">
              <img src="img/nestle.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md--3 col-6">
            <div className="mb-4 text-center">
              <img src="img/razorpay.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-sm-3 col-md--3 col-6">
            <div className="mb-4 text-center">
              <img src="img/tech-mahindra.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="products  d-none flex-wrap  ">
        <div className=" hello">
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
        <div className=" segmento">
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
        <div className=" campaign">
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
        <div className=" otp">
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
      </section>

      <section className="channels container px-sm-0 px-4 section">
        <div className="row">
          <h2 className="heading mb-3">Communication channels</h2>
          <p>
            Empower conversations with best-in-class communication API.
            Full-featured APIs for developers & businesses to connect and engage
            their customers globally.
          </p>
        </div>

        <div className="d-flex flex-wrap my-4">
          <a href="/hello" target="_blank" className="chn-btn sms">
            <div className="icon sms-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>SMS</span> <MdArrowForward />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn email">
            <div className="icon email-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>Email</span> <MdArrowForward />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn voice">
            <div className="icon voice-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>Voice</span> <MdArrowForward />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn whatsapp">
            <div className="icon whatsapp-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>WhatsApp</span> <MdArrowForward />
            </div>
          </a>

          <a href="/hello" target="_blank" className="chn-btn telegram">
            <div className="icon telegram-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>Telegram</span> <MdArrowForward />
            </div>
          </a>
          <a href="/hello" target="_blank" className="chn-btn rcs">
            <div className="icon rcs-icon"></div>
            <div className="btn-label d-flex flex-fill justify-content-between align-items-center">
              <span>RCS</span> <MdArrowForward />
            </div>
          </a>
        </div>

        <div className="d-none flex-column flex-lg-row g-4 pt-5 ">
          <div className="d-flex flex-column  flex-sm-row me-5">
            <div className="py-7 stats py-3 me-5 pe-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">4.5 Million+</div>
                <span>API calls</span>
              </div>
            </div>

            <div className="py-7 stats py-3 pe-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">150 Million+</div>
                <span>Emails Delivered</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column  flex-sm-row ">
            <div className="py-7 stats py-3 me-5 pe-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">2.3 Million+</div>
                <span>SMS Delivered</span>
              </div>
            </div>

            <div className="py-7 stats py-3 pe-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">192</div>
                <span>Countries</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap g-4 pt-5 ">
            <div className="py-7 stats py-3 pe-3  col-12 col-lg-6 col-xl-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">4.5 Million+</div>
                <span className="c-fs-3 c-fw-m">API calls</span>
              </div>
            </div>

            <div className="py-7 stats py-3 pe-3 col-12 col-lg-6 col-xl-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">150 Million+</div>
                <span className="c-fs-3 c-fw-m">Emails Delivered</span>
              </div>
            </div>
            <div className="py-7 stats py-3  pe-3 col-12 col-lg-6 col-xl-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">2.3 Million+</div>
                <span className="c-fs-3 c-fw-m">SMS Delivered</span>
              </div>
            </div>

            <div className="py-7 stats py-3 pe-3 col-12 col-lg-6 col-xl-3">
              <div className="lh-1">
                <div className="mb-1 stats-title">192</div>
                <span className="c-fs-3 c-fw-m">Countries</span>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};
export default Home;
