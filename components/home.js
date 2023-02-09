import { MdFavorite, MdArrowForward } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="text-center py-5">
        <h1 className="fw-bold heading">Empower Your Marketing</h1>
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
          <div className="title charterbold">Conversation</div>
          <div className="spacer"></div>
          <div className="pro-footer">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon hello-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Hello <MdArrowForward/></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <div className="title charterbold">Conversation</div>
          <div className="spacer"></div>
          <div className="pro-footer alt">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon segmento-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Segmento <MdArrowForward/></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <div className="title charterbold">Conversation</div>
          <div className="spacer"></div>
          <div className="pro-footer">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon campaign-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center">Campaign <MdArrowForward/></div>
            </a>
          </div>
        </div>
        <div className="col hello">
          <div className="title charterbold">Conversation</div>
          <div className="spacer"></div>
          <div className="pro-footer alt">
            <div className="pro-text">Empower your employees, Support your customers.</div>
            <a href="/hello" target="_blank" className="pro-btn">
              <div className="icon otp-icon"></div>
              <div className="btn-label d-flex flex-fill justify-content-between align-items-center"> OTP <MdArrowForward/></div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
};
export default Home;