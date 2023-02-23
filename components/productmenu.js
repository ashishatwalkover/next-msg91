import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'

const ProductsMenu = () => {
  const router = useRouter()
  var path = router.pathname.split("/")[1];
  path = (path.length == 2) ? '/'+path : '';
  return (
    <>      
      <div className="px-5 " id="product-menu">
        <div className="container-fluid">
        <div className="ps-5 d-flex  m-y-120 flex-wrap">
            <div className="menu nav-applications">
              <p className="head-p">applications</p>
              <Link href={`${path}/hello`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/hello.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Hello</h4>
                    <p className="sub-p">Ticketing and Chat</p>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/campaign`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/campaign.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Campaign</h4>
                    <p className="sub-p">Event base automation</p>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/segmento`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/segmento.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Segmento</h4>
                    <p className="sub-p">Contact Managment</p>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/otp`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/otp.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">OTP</h4>
                    <p className="sub-p">Simplified OTP Platform</p>
                  </div>
                </div>
              </Link>
              <div className="h-divider my-5"></div>
            </div> 

            <div className="v-divider mx-5"></div>
            
            <div className="menu nav-channels">
              <p className="head-p">channels</p>
              
              <Link href={`${path}/sms`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/sms.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">SMS</h4>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/email`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/Email.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Email</h4>
                  </div>
                </div>
              </Link>
              
              <Link href={`${path}/voice`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/voice.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Voice</h4>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/whatsapp`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/whatsapp.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">WhatsApp</h4>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/telegram`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/Telegram.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Telegram</h4>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/rcs`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/rcs.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">RCS</h4>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/push-notification`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/push-notification.svg" width={30} height={30} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Push Notification</h4>
                  </div>
                </div>
              </Link>

            </div>

            <div className="menu nav-utilities">              
              <p className="head-p ">Utiliteis</p>

              <Link href={`${path}/shorturl`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/short-url-ico.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">URL Shrtnr</h4>
                    <p className="sub-p">Customize and track URL's</p>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/knowledgebase`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/kb-ico.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">Knowladgebase</h4>
                    <p className="sub-p">Manage help Doc and guidess</p>
                  </div>
                </div>
              </Link>

              <Link href={`${path}/files`} className="product-cont">
                <div className="d-flex align-items-center">
                  <Image src="../img/files-ico.svg" width={40} height={40} alt="#" />
                  <div className="product-dis">
                    <h4 className="charterregular">File Hosting</h4>
                    <p className="sub-p">Manage your files on cloud</p>
                  </div>
                </div>
              </Link>  
            </div>
                         
            <div className="v-divider mx-5"></div>
        </div>
        </div>
      </div>
    </>
  );
};
export default ProductsMenu;
