import HeadTag from "./head";
import Image from "next/image";


const Footer = () => {
    return (
        <>
            <div className="container d-flex flex-direction-column align-items-center">
                <div className="d-flex flex-diretion-row jutsify-content-space-between align-items-flex-start">
                    <div className="column flex-direction-column align-items-flex-start">
                        <div className="column flex-direction-column align-items-flex-start">
                            <div className="text1 fs-6 ms-5">Download apps</div>
                            <div className="ms-5"><Image src={"/img/android.svg"} alt="#" width={20} height="23"/>
                            <Image src={"/img/apple.svg"} alt="#" width={20} height="18" className="ms-4"/>
                            </div> 
                        </div>
                        <div className="column flex-direction-column align-items-flex-start mt-4">
                        <div className="text1 fs-6 ms-5">Follow us</div>
                            <div className="ms-5"><Image src={"/img/linkedin.svg"} alt="#" width={20} height="23"/>
                            <Image src={"/img/facebook.svg"} alt="#" width={20} height="18" className="ms-4"/>
                            <Image src={"/img/twitter.svg"} alt="#" width={20} height="18" className="ms-4"/>
                            </div> 
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="column">
                        
                    </div>
                    <div className="column">
                        
                    </div>
                    <div className="column">
                        
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;

