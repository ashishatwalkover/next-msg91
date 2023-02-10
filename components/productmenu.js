import Link from "next/link";
import Image from "next/image";
const ProductsMenu = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"
      >
        <div className=" product-menu d-flex  m-y-120">
          <div className="pm-left pm ">
            <div className="product-cont-cont d-flex flex-column">
              <p className="head-p">applications</p>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/hello.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>Hello</h4>
                  <p className="sub-p">Ticketing and Chat</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/campaign.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>Campaign</h4>
                  <p className="sub-p">Event base automation</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/segmento.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>Segmaneto</h4>
                  <p className="sub-p">Contact Managment</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/otp.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>OTP</h4>
                  <p className="sub-p">Simplified OTP Platform</p>
                </div>
              </div>
            </div>
            <div className="product-cont-cont d-flex flex-column utilities">
              <p className="head-p ">Utiliteis</p>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/short URL.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>URL Shrtnr</h4>
                  <p className="sub-p">Customize and track URL's</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/KB.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>Knowladgebase</h4>
                  <p className="sub-p">Manage help Doc and guidess</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/Files.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 cl>File Hosting</h4>
                  <p className="sub-p">Manage your files on cloud</p>
                </div>
              </div>
             
            </div>
   
          </div>
          <div className="pm-right pm">
          <div className="product-cont-cont d-flex flex-column applications">
              <p className="head-p">channels</p>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/sms.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >SMS</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/Email.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >Email</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/voice.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >Voice</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/whatsapp.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >WhatsApp</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/Telegram.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >Telegram</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/rcs.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >RCS</h4>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/push-notification.svg" width={30} height={30} />
                <div className="product-dis">
                  <h4 >Push Notification</h4>
                </div>
              </div>
            </div>
      

          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default ProductsMenu;
