import Link from "next/link";
import Image from "next/image";

const Utilities = () => {
  return (
    <>
      <section className="utilities col-12 section">
        <div className="container ">
          <h1>Why choose Us?  </h1>
          <div className="us-cont d-flex  container justify-content-between alighn-items-center col-12">
            <div className="us-nav-cont col-3 d-lg-block d-md-none d-sm-none d-none ">
              <div className="us-nav">
                <div className="us-nav-options align-items-center mb-2 d-flex active" id="link-shortner">
                  <Image
                    src="../img/fill-circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">URL Shortner</span>
                </div>
                <div className="us-nav-options align-items-center mb-2  d-flex" id="link-knowledge">
                  <Image
                    src="../img/fill-circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">Knowledgebase</span>
                </div>
                <div className="us-nav-options align-items-center mb-2 d-flex" id="link-file">
                  <Image
                    src="../img/fill-circle.svg"
                    width={32}
                    height={32}
                  ></Image>
                  <span className="c-fs-3">File Hosting</span>
                </div>


              </div>
            </div>
            <div className="us-main-cont col-lg-8 col-md-12 col-sm-12 col-12">

              <div className="us-main us-main-p container justify-content-between d-flex align-items-center col-12 flex-md-row flex-sm-column flex-column" id="url-shortner">
                <div className="us-main-content d-flex flex-column justify-content-center">
                  <div className="us-main-heading d-flex">
                    <Image
                      src="../img/short URL.svg"
                      width={40}
                      height={40}
                      className="me-4"
                    ></Image>
                    <h2 className="c-fs-2 c-ff-h">URL Shortner</h2>
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
                <Image src="../img/Short Url img.svg" width={400} height={294} />
              </div>

              <div className="us-main us-main-p d-flex align-item-center us-main container justify-content-between d-flex align-items-center col-12 flex-md-row flex-sm-column-reverse flex-column-reverse" id="knowledge-base">
                    <Image src="../img/KB img.svg" width={400} height={294} />
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
              </div>
              <div className="us-main d-flex align-items-center us-main container justify-content-between d-flex align-items-center col-12 flex-md-row flex-sm-column flex-column" id="file-hosting">
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
                <Image src="../img/Files img.svg" width={400} height={294} />
              </div>




            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Utilities;
