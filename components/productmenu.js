import Link from "next/link";
import Image from "next/image";
const ProductsMenu = () => {
  return (
    <>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvas"
      >
        <div className=" product-menu d-flex p-y-120">
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
            <div></div>
          </div>
          <div className="pm-right pm"></div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default ProductsMenu;
