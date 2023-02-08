import HeadTag from "./head";
import Image from "next/image";


const Footer = () => {
    return (
        <>
            <div className="footer container-fluid d-flex justify-content-center flex-direction-column align-items-center">
                <div className="d-flex flex-diretion-row jutsify-content-space-between align-items-flex-start">
                    <div className="column flex-direction-column align-items-flex-start">
                        <div className="column flex-direction-column align-items-flex-start">
                            <div className="text1 ms-5">Download apps</div>
                            <div className="ms-5"><Image src={"/img/android.svg"} alt="#" width={20} height="23" />
                                <Image src={"/img/apple.svg"} alt="#" width={20} height="18" className="ms-4" />
                            </div>
                        </div>
                        <div className="column flex-direction-column align-items-flex-start mt-4">
                            <div className="text1 fs-6 ms-5">Follow us</div>
                            <div className="ms-5"><Image src={"/img/linkedin.svg"} alt="#" width={20} height="23" />
                                <Image src={"/img/facebook.svg"} alt="#" width={20} height="18" className="ms-4" />
                                <Image src={"/img/twitter.svg"} alt="#" width={20} height="18" className="ms-4" />
                            </div>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="column flex-direction-column align-items-flex-start me-5">
                        <div className="text2">Our Products</div>
                        <div className="text3 mt-1">One API</div>
                        <div className="text3 mt-1">Send OTP</div>
                        <div className="text3 mt-1">Hello</div>
                        <div className="text3 mt-1">Segmento</div>
                    </div>
                    <div className="column flex-direction-column align-items-flex-start ms-5 me-5">
                        <div className="text2">Channels</div>
                        <div className="text3 mt-1">SMS</div>
                        <div className="text3 mt-1">Email</div>
                        <div className="text3 mt-1">Voice</div>
                        <div className="text3 mt-1">RCS</div>
                        <div className="text3 mt-1">Virtual number</div>
                        <div className="text3 mt-1">WhatsApp</div>
                        <div className="text3 mt-1">View all channels</div>
                    </div>
                    <div className="column flex-direction-column align-items-flex-start ms-5 me-5">
                    <div className="text2">Resources</div>
                        <div className="text3 mt-1">Indutries</div>
                        <div className="text3 mt-1">Blog</div>
                        <div className="text3 mt-1">Case studies</div>
                        <div className="text3 mt-1">FAQ</div>
                        <div className="text3 mt-1">API doc</div>
                    </div>
                    <div className="column flex-direction-column align-items-flex-start ms-5">
                    <div className="text2">Discover</div>
                        <div className="text3 mt-1">About us</div>
                        <div className="text3 mt-1">Pricing</div>
                        <div className="text3 mt-1">Contact us </div>
                        <div className="text3 mt-1">Partner program</div>
                        <div className="text3 mt-1">MSG91 for Developers</div>
                        <div className="text3 mt-1">MSG91 for Startups</div>
                        <div className="text3 mt-1">Tools and Addons</div>
                        <div className="text3 mt-1">Our partners</div>
                        <div className="text3 mt-1">Carrers</div>
                    </div>
                </div>

                {/* <div className="d-flex flex-direction-row justify-content-space-between align-items-flex-end">
                    <div className="text4">Copyright</div>
                </div> */}
            </div>
        </>
    )
}

export default Footer;

