import { MdDone, MdClose } from "react-icons/md";
const pricingsms = () => {
  return (
    <>
    <div className="d-flex card-container align-items-end">
              <div className="card w-25 border-0 text-center me-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Free</h3>
                  <h5 className="c-fs-4 mt-2">$0/Month</h5>
                  <p className="c-fs-5"> - </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    100,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-danger c-fs-3">
                      <MdClose />
                    </span>
                    Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="card w-25 border-0 text-center mx-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Basic</h3>
                  <h5 className="c-fs-4 mt-2">$500/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    250,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    3,000 Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="  text-center d-flex flex-column align-items-center mx-3 w-25">
                <div className="popular-chip c-fs-6">POPULAR</div>
              <div className="card  w-100 card-popular border-primary text-center c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Alpha</h3>
                  <h5 className="c-fs-4 mt-2">$1500/Month</h5>
                  <p className="c-fs-5">+18%GST </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    5,00,000 Emails
                  </div>
                  <div className="c-fs-5 ">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    5,000 Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-25 border-0 text-center ms-3 c-bg-grey">
                <div className="card-body">
                  <h3 className="c-fs-3">Custom</h3>
                  <h5 className="c-fs-4 mt-2">Custom Pricing</h5>
                  <p className="c-fs-5">-</p>
                  <div className="c-fs-5 mt-2">
                    Need to send more? Talk to us for a customized plan.
                  </div>
                 

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Talk to an Expert
                  </button>
                </div>
              </div>
              </div>
   
    </>
  );
};

export default pricingsms;