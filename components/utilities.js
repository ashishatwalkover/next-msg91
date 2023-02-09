import Link from "next/link";
import Image from "next/image";

const Utilities = () => {
  return (
    <>
      <div className="container ">
        <h1>Utilities</h1>
        <div className="us-cont">
          <div className="us-nav-cont">
            <div className="us-nav">
              <div className="us-nav-options">
                <Image
                  src="../img/fill-circle.svg"
                  width={32}
                  height={32}
                ></Image>
                <p>URL Shortner</p>
              </div>
              <div className="us-nav-options">
                <Image
                  src="../img/fill-circle.svg"
                  width={32}
                  height={32}
                ></Image>
                <p>URL Shortner</p>
              </div>
              <div className="us-nav-options">
                <Image
                  src="../img/fill-circle.svg"
                  width={32}
                  height={32}
                ></Image>
                <p>URL Shortner</p>
              </div>
            </div>
          </div>
          <div className="us-main-cont">
            <div className="us-main">
              <div className="us-main-heading">
                <Image
                  src="../img/short URL.svg"
                  width={40}
                  height={40}
                ></Image>
                <h2 className="Heading">URL shrtnr</h2>
              </div>
              <p>
                Engineered for high reliability, our globally distributed
                carrier network and intelligent routing ensure the highest SMS
                delivery and lowest latency.
              </p>
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
            </div>
            <div className="us-main">
              <div className="us-main-heading">
                <Image
                  src="../img/short URL.svg"
                  width={40}
                  height={40}
                ></Image>
                <h2 className="Heading">URL shrtnr</h2>
              </div>
              <p>
                Engineered for high reliability, our globally distributed
                carrier network and intelligent routing ensure the highest SMS
                delivery and lowest latency.
              </p>
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
            </div>
            <div className="us-main">
              <div className="us-main-heading">
                <Image
                  src="../img/short URL.svg"
                  width={40}
                  height={40}
                ></Image>
                <h2 className="Heading">URL shrtnr</h2>
              </div>
              <p>
                Engineered for high reliability, our globally distributed
                carrier network and intelligent routing ensure the highest SMS
                delivery and lowest latency.
              </p>
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Utilities;
