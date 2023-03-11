import { useRouter } from "next/router";
import Image from "next/image";
import {MdOutlineClose} from "react-icons/md"
const mininav = (props) => {
    console.log(props)
    const hideOverlay = ()=>{
        props.setFalse(false)
    }
  const router = useRouter();
  var path = router.pathname.split("/")[1];
  path = path.length == 2 ? "/" + path : "";
  return (
    <>
      <div className="nav-overlay d-block d-lg-none" id="minimenu">
      <div className="container-fluid">
        <div className=" w-100 d-flex justify-content-end">
       <span className="p-2 c-fs-2"  onClick={hideOverlay} ><MdOutlineClose/></span>
        </div>
          <div className=" w-100 d-flex  px-0 px-xl-5 flex-wrap">
            <div className="menu mt-4 nav-applications">
              <p className="c-fs-4 c-ff-h text-uppercase">applications</p>
              <a href={`${path}/hello`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/hello.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Hello</h4>
                    <p className="c-fs-5">Ticketing and Chat</p>
                  </div>
                </div>
              </a>

              <a href={`${path}/campaign`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/campaign.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Campaign</h4>
                    <p className="c-fs-5">Event base automation</p>
                  </div>
                </div>
              </a>

              <a href={`${path}/segmento`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/segmento.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Segmento</h4>
                    <p className="c-fs-5">Contact Managment</p>
                  </div>
                </div>
              </a>

              <a href={`${path}/otp`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/otp.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">OTP</h4>
                    <p className="c-fs-5">Simplified OTP Platform</p>
                  </div>
                </div>
              </a>
              {/* <div className="h-divider my-5"></div> */}
            </div>

            {/* <div className="v-divider mx-5"></div> */}

            <div className="menu mt-4 nav-channels">
              <p className="c-fs-4 c-ff-h text-uppercase">channels</p>

              <a href={`${path}/sms`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/sms.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">SMS</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/email`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/Email.svg"
                    width={30}
                    height={30}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Email</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/voice`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/voice.svg"
                    width={30}
                    height={30}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Voice</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/whatsapp`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/whatsapp.svg"
                    width={30}
                    height={30}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">WhatsApp</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/telegram`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/Telegram.svg"
                    width={30}
                    height={30}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Telegram</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/rcs`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/rcs.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">RCS</h4>
                  </div>
                </div>
              </a>

              <a href={`${path}/push-notification`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/push-notification.svg"
                    width={30}
                    height={30}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Push Notification</h4>
                  </div>
                </div>
              </a>
            </div>

            <div className="menu mt-4 nav-utilities">
              <p className="c-fs-4 c-ff-h text-uppercase">Utiliteis</p>

              <a href={`${path}/shorturl`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/short-url-ico.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">URL Shrtnr</h4>
                    <p className="c-fs-5">Customize and track URL's</p>
                  </div>
                </div>
              </a>

              <a href={`${path}/knowledgebase`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/kb-ico.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">Knowladgebase</h4>
                    <p className="c-fs-5">Manage help Doc and guidess</p>
                  </div>
                </div>
              </a>

              <a href={`${path}/files`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image
                    src="../img/files-ico.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <div className="product-dis">
                    <h4 className="c-fs-2 c-ff-h mb-1">File Hosting</h4>
                    <p className="c-fs-5">Manage your files on cloud</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="menu nav-extras d-flex flex-column  ">
              <a
                className="nav-a c-fs-2 c-fw-sb mb-3 mt-4"
                href="#"
                id="a-products"
              >
                Products
              </a>
              <a className="nav-a c-fs-2 c-fw-sb mb-3" href="#" id="a-learning">
                Learning Center
              </a>
              <a
                href="/pricing"
                className="nav-a c-fs-2 c-fw-sb mb-3"
                id="a-pricing"
              >
                Pricing
              </a>
              <a
                href="/contact-us"
                className="nav-a c-fs-2 c-fw-sb mb-3"
              >
                Contact Us
              </a>
            </div>

            {/* <div className="v-divider mx-5"></div> */}
        </div>
          </div>
          </div>
    </>
  );
};
export default mininav;
