import { MdFavorite, MdArrowForward } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="text-center py-5">
        <h1 className="heading">Empower Your Marketing</h1>
        <p className="sub-heading col-4 m-auto">Boost your reach by the Best Cloud Communication Platform for <strong>Targeted Customers</strong> and <strong>Verified Results</strong></p>
        <button className="btn btn-primary btn-lg mt-5" type="button">Get started for Free</button>
      </div>

      <section className="trusted-by text-center">
        <div className="mb-3">
          <MdFavorite className="love" /> Trusted by
        </div>
        <div className="row justify-content-center">

          <div className="col-lg-2 col-md-4 col-6">
            <div className="mb-4 text-center align-middle">
              <img src="img/unacademy.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="mb-4 text-center">
              <img src="img/housing.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="mb-4 text-center">
              <img src="img/nestle.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="mb-4 text-center">
              <img src="img/razorpay.svg" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="mb-4 text-center">
              <img src="img/tech-mahindra.svg" alt="" />
            </div>
          </div>

        </div>
      </section>

      <section className="products d-flex">
        <div className="col hello">
          <h2 className="title">Conversation</h2>
          <div className="spacer"></div>
          <div className="pro-footer">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon hello-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Hello <MdArrowForward /></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <h2 className="title">Conversation</h2>
          <div className="spacer"></div>
          <div className="pro-footer alt">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon segmento-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Segmento <MdArrowForward /></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <h2 className="title">Conversation</h2>
          <div className="spacer"></div>
          <div className="pro-footer">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon campaign-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Campaign <MdArrowForward /></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <h2 className="title">Conversation</h2>
          <div className="spacer"></div>
          <div className="pro-footer alt">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon otp-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center"> OTP <MdArrowForward /></div>
            </a>
          </div>
        </div>
      </section>

      <section className="channels container section">
        <div className="row">
          <h2 className="heading mb-3">Communication channels</h2>
          <p>Empower conversations with best-in-class communication API. Full-featured APIs for developers & businesses to connect and engage their customers globally.</p>
        </div>

        <div className="d-flex flex-wrap my-4">
          
            <a href="/hello" target="_blank" className="chn-btn sms">
              <div className="icon sms-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">SMS <MdArrowForward /></div>
            </a>
          
            <a href="/hello" target="_blank" className="chn-btn email">
              <div className="icon email-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Email <MdArrowForward /></div>
            </a>

            <a href="/hello" target="_blank" className="chn-btn whatsapp">
              <div className="icon whatsapp-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">WhatsApp <MdArrowForward /></div>
            </a>

            <a href="/hello" target="_blank" className="chn-btn telegram">
              <div className="icon telegram-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Telegram <MdArrowForward /></div>
            </a>
            <a href="/hello" target="_blank" className="chn-btn voice">
              <div className="icon voice-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Voice <MdArrowForward /></div>
            </a>
            <a href="/hello" target="_blank" className="chn-btn rcs">
              <div className="icon rcs-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">RCS <MdArrowForward /></div>
            </a>

        </div>

        <div className="row pt-5">          
          <div className="col-md-6 col-lg-3">
            <div className="py-7 ">
              <div className="lh-1">
                <div className="mb-1 stats-title">4.5 Million+</div>
                <span>API calls</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="py-7 ">              
              <div className="lh-1">
                <div className="mb-1 stats-title">192</div>
                <span>Countries</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="py-7 ">              
              <div className="lh-1">
                <div className="mb-1 stats-title">2.3 Million+</div>
                <span>SMS Delivered</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="py-7 ">              
              <div className="lh-1">
                <div className="mb-1 stats-title">150 Million+</div>
                <span>Emails Delivered</span>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
};
export default Home;