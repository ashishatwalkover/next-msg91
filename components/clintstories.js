import Image from "next/image";
import Link from "next/link";
const clintStories = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="c-ff-h c-fs-1 my-5">Our Client stories</h2>
        <div className=" d-flex flex-column flex-md-row mt-3 ">
          <div className="d-flex flex-column col-12 col-md-6 pe-0 pe-md-5 justify-content-center justify-content-md-start">
          <img src="/img/milkbasket img.png" className="img-fluid " />
            <p className="c-fs-4 pt-4 col-12 d-none d-md-block">
              Milkbasket sends regular updates to their customersâ€™ via MSG91.
              Milkbasket is an E-commerce platform providing milk and grocery at
              doorsteps. With the vision to offer their customers a seamless
              customized delivery, and to ensure it happens efficiently,
              Milkbasket has been rigorously working on sending the updates and
              information for their customers security and satisfaction.
            </p>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0 mt-lg-0 d-flex  flex-row flex-md-column justify-content-center justify-content-md-start  ">
            <div className=" d-flex  mb-5 mb-lg-0 me-5  ">
              <img src="/img/unacademy img.png" className="img-fluid clint-img" />
              <div className="container-fluid d-none d-md-block">
                <p className="c-fs-4 ps-3">
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
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className=" d-flex  mt-xl-5 mt-lg-5 mt-md-5 mt-0   ">
              <img src="/img/ixigo img.png"  className="img-fluid clint-img"/>
              <div className="container-fluid d-none d-md-block" >
                <p className="c-fs-4 ps-3 ">
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
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default clintStories;
