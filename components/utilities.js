import Link from "next/link";
import Image from "next/image";

const Utilities = () => {
  return (
    <>
      <section className="utilities section">
        <div className="container ">
          <h1>Utilities</h1>
          <div className="us-cont">
            <div className="us-nav-cont">
              <div className="us-nav">
                <div className="us-nav-options align-items-center mb-2 d-flex">
                  <Image
                    src="../img/fill-circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">URL Shortner</span>
                </div>
                <div className="us-nav-options align-items-center mb-2  d-flex">
                  <Image
                    src="../img/circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">Knowladgebase</span>
                </div>
                <div className="us-nav-options align-items-center mb-2 d-flex">
                  <Image
                    src="../img/circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">File Hosting</span>
                </div>
                
                
              </div>
            </div>
            <div className="us-main-cont">
              
              <div className="us-main d-flex align-item-center">
              <div className="us-main-content d-flex flex-column justify-content-center ">
                <div className="us-main-heading d-flex">
                  <Image
                    src="../img/short URL.svg"
                    width={40}
                    height={40}
                    className="me-4"
                  ></Image>
                  <h2 className="c-fs-2 c-ff-h">URL Shortner</h2>
                </div>
                <p className="c-fs-3 c-fw-r">
                  Engineered for high reliability, our globally distributed
                  carrier network and intelligent routing ensure the highest SMS
                  delivery and lowest latency.
                </p>
                <button type="button" class="btn btn-outline-primary c-fs-5 c-fw-m">
                  Primary
                </button>
              </div>
              <Image src="../img/placeholder.svg" width={544} height={294}/>
              </div>
              <div className="us-main d-flex align-item-center">
              <div className="us-main-content d-flex flex-column  justify-content-center ">
                <div className="us-main-heading d-flex">
                  <Image
                    src="../img/KB.svg"
                    width={40}
                    height={40}
                    className="me-4"
                  ></Image>
                  <h2 className="c-fs-2 c-ff-h">Knowladgebase</h2>
                </div>
                <p className="c-fs-3 c-fw-r">
                  Engineered for high reliability, our globally distributed
                  carrier network and intelligent routing ensure the highest SMS
                  delivery and lowest latency.
                </p>
                <button type="button" class="btn btn-outline-primary c-fs-5 c-fw-m">
                  Primary
                </button>
              </div>
              <Image src="../img/placeholder.svg" width={544} height={294}/>
              </div>
              <div className="us-main d-flex align-items-center ">
              <div className="us-main-content d-flex flex-column justify-content-center">
                <div className="us-main-heading d-flex">
                  <Image
                    src="../img/Files.svg"
                    width={40}
                    height={40}
                    className="me-4"
                  ></Image>
                  <h2 className="c-fs-2 c-ff-h">File Hosting</h2>
                </div>
                <p className=" c-fs-3 c-fw-r">
                  Engineered for high reliability, our globally distributed
                  carrier network and intelligent routing ensure the highest SMS
                  delivery and lowest latency.
                </p>
                <button type="button" class="btn btn-outline-primary c-fs-5 c-fw-m">
                  Primary
                </button>
              </div>
              <Image src="../img/placeholder.svg" width={544} height={294}/>
              </div>
              
              
              
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Utilities;
