import HeadTag from "./head";
import Image from "next/image";


const Footer = () => {
    return (
        <>
        <div className="container p-5">
            <div className="awesomeness row py-4 justify-content-center">
                <div className="awesomeness_1 d-flex col-12 col-md-12 col-lg-10 me-5">
                    <div className="awesomeness_2 row">
                        <div className="col-8">
                            <ul className="nav flex-row">
                            <li className="mb-1"><a href="#!" className="text5 text-decoration-none">Experience the Awesomeness yourself</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex row py-4 mt-2">
                        <div className="col-12">
                            <ul className="nav flex-column">
                            <button className="button_Style mx-auto"><li className="mx-4">Talk to Sales</li></button>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex row p-4 mt-2">
                        <div className="col-12">
                            <ul className="nav flex-column">
                            <button className="button_Style mx-auto"><li className="mx-4">See Pricing</li></button>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex row py-4 mt-2">
                        <div className="col-12">
                            <ul className="nav flex-column">
                            <button className="button_Style1 mx-auto"><li className="mx-4">Get Started Free</li></button>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="d-flex flex-direction-row justify-content-space-between align-items-flex-end">
                    <div className="text4">Copyright</div>
                </div> */}
            </div>
        </div>
            <footer className="footer p-4">
                <div className="container">
                    <div className="row g-4 py-4 justify-content-center">
                        <div className="col-12 col-md-12 col-lg-3 mt-5 me-5">
                            <div className="row">
                                <div className="col-6">
                                    {/* list */}
                                    <ul className="nav flex-column">
                                        <li className="ms-3 mb-1"><a href="#!" className="text1 text-decoration-none">Download apps</a></li>
                                        <div className="ms-3 mb-3"><Image src={"/img/android.svg"} alt="#" width={20} height="23" />
                                            <Image src={"/img/apple.svg"} alt="#" width={20} height="18" className="ms-4" />
                                        </div>
                                        <li className="nav-item ms-3 mb-1"><a href="#!" className="text1 text-decoration-none">Follow us</a></li>
                                        <div className="ms-3"><Image src={"/img/linkedin.svg"} alt="#" width={20} height="23" />
                                            <Image src={"/img/facebook.svg"} alt="#" width={20} height="18" className="ms-4" />
                                            <Image src={"/img/twitter.svg"} alt="#" width={20} height="18" className="ms-4" />
                                        </div>
                                    </ul>
                                </div>
                                { <div className="col-6">
                                <div className="vl"></div>
                </div> }
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-8 mt-5">
                            <div className="row g-4">
                                <div className="col-6 col-sm-6 col-md-3">
                                    {/* list */}
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#!" className="text2 text-decoration-none">Our Products</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">One API</a></li>
                                        <li className="nav-item mb-1"><a href="#1" className="text3 text-decoration-none">Send OTP</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Hello</a></li>
                                        <li className="nav-item "><a href="#!" className="text3 text-decoration-none">Segmento</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2"><a href="#!" className="text2 text-decoration-none">Channels</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">SMS</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Voice</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">RCS</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Virtual number</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">WhatsApp</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">View all channels</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2"><a href="#!" className="text2 text-decoration-none">Resources</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Industries</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Blog</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Case studies</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">FAQ</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">API doc</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2"><a href="#!" className="text2 text-decoration-none">Discover</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">About us</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Pricing</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Contact us</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Partner program</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">MSG91 for Developers</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">MSG91 for Startups</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Tools and Addons</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Our partners</a></li>
                                        <li className="nav-item mb-1"><a href="#!" className="text3 text-decoration-none">Carrer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-1">
                        <div className="col align-items-center">
                            <div className="col-md-6"><span className="text4 ms-5">Copyright 2008-2020 MSG91 | All rights reserved.</span></div>
                            <div className="text_End col-md-6 mt-3 justify-content-between">
                                <ul className="text_End d-flex justify-content-space-between list-inline mb-0 small mt-md-0 ms-5">
                                    <li className="text3 list-inline-item me-5">Terms of use | Privacy policy | GDPR | NO spam | Startup policy | Developer Policy | Cookie Policy</li>
                                    <li className="text3 list-inline-item"><span className="walkover">A product of <Image src={"/img/walkover.svg"} alt="#" width={20} height="18" className="mx-auto" /> Walkover </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

