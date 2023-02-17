import Link from "next/link";
import Image from "next/image";
const ProductsMenu = () => {

  return (
    <>      
      <div className="px-5" id="product-menu">
        <div className="ps-5 d-flex  m-y-120 flex-wrap">
            <div className="menu nav-applications">
              <p className="head-p">applications</p>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/hello.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">Hello</h4>
                  <p className="sub-p">Ticketing and Chat</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/campaign.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">Campaign</h4>
                  <p className="sub-p">Event base automation</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/segmento.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">Segmaneto</h4>
                  <p className="sub-p">Contact Managment</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/otp.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">OTP</h4>
                  <p className="sub-p">Simplified OTP Platform</p>
                </div>
              </div>
              <div className="h-divider my-5"></div>
            </div> 

            <div className="v-divider mx-5"></div>
            
            <div className="menu nav-channels">
                <p className="head-p">channels</p>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/sms.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">SMS</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/Email.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">Email</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/voice.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">Voice</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/whatsapp.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">WhatsApp</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/Telegram.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">Telegram</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/rcs.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">RCS</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center product-cont">
                  <Image src="../img/push-notification.svg" width={30} height={30} />
                  <div className="product-dis">
                    <h4 className="charterregular">Push Notification</h4>
                  </div>
                </div>
            </div>

            <div className="menu nav-utilities">
              <p className="head-p ">Utiliteis</p>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/short URL.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">URL Shrtnr</h4>
                  <p className="sub-p">Customize and track URL's</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/KB.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">Knowladgebase</h4>
                  <p className="sub-p">Manage help Doc and guidess</p>
                </div>
              </div>
              <div className="d-flex align-items-center product-cont">
                <Image src="../img/Files.svg" width={40} height={40} />
                <div className="product-dis">
                  <h4 className="charterregular">File Hosting</h4>
                  <p className="sub-p">Manage your files on cloud</p>
                </div>
              </div>
             
            </div>
            <div className="v-divider mx-5"></div>
        </div>
      </div>
    </>
  );
};
export default ProductsMenu;
