import HeadTag from "./head";
import Image from "next/image";
import Link from "next/link";

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
                </div>
            </div>
            <div className="footer">
                <div className="footer-main-cont mt-4 d-flex container justify-content-sm-between">
                    <div className="f-social-link-cont ">
                        <div className="footer-social-link-content">
                            <span className="footer-social-link-text  c-fs-5 d-flex flex-column">
                                Download Apps
                            </span>
                            <div className="footer-social-link d-flex mt-1">
                                <Image src="../img/android.svg" width={20} height={23} className="me-3" />
                                <Image src="../img/apple.svg" width={20} height={24} />
                            </div>
                        </div>
                        <div className="footer-social-link-content mt-4">
                            <span className="footer-social-link-text c-fs-5 d-flex flex-column">
                                Follow Us
                            </span>
                            <div className="footer-social-link d-flex mt-1 align-items-center">
                                <Image src="../img/facebook.svg" width={24} height={24} className="me-3" />
                                <Image src="../img/Linkedin.svg" width={24} height={24} className="me-3" />
                                <Image src="../img/twitter.svg" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className="full-line"></div>

                    <div>
                        <h4 className=" c-fs-5 d-flex flex-column">
                            Our Products
                        </h4>
                        <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                            <Link href="#" className="c-fs-6 c-fw-t">
                                One API
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Send OTP
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Hello
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Segmento
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className=" c-fs-5 d-flex flex-column">
                            Channels
                        </h4>
                        <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                            <Link href="#" className="c-fs-6 c-fw-t">
                                SMS
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Email
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Voice
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                RCS
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Virtual Number
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                WhatsApp
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                View All Channels
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="c-fs-5 d-flex flex-column">
                            Resources
                        </h4>
                        <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Industries
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Blogs
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Case Studies
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                FAQ
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                API Documentation
                            </Link>

                        </div>
                    </div>
                    <div>
                        <h4 className=" c-fs-5 d-flex flex-column">
                            Discover
                        </h4>
                        <div className="f-nav-link-cont d-flex flex-column mt-2 align-items-start">
                            <Link href="#" className="c-fs-6 c-fw-t">
                                About Us
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Pricing
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Contact Us
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Partner Program
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                MSG91 For Developers
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                MSG91 For Startups
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Tools And Addons
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Our Programs
                            </Link>
                            <Link href="#" className="c-fs-6 c-fw-t">
                                Career
                            </Link>

                        </div>


                    </div>
                </div>
                <div className="justify-content-start container mt-4    ">
                    <span className="c-fs-7">Copyright 2008-2020 MSG91 | All rights reserved.</span>
                    <div className="d-flex justify-content-sm-between">
                        <div>
                            <Link href=" #" className="c-fs-6">Terms of use</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">Privacy Policy</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">GDPR</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">No Spam</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">Startup Policy</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">Developer Policy</Link><span> | </span>
                            <Link href=" #" className="c-fs-6">Cookie Policy</Link>
                        </div>
                        <div>
                            <span>A Product of <Image src="../img/walkover.svg" width={20} height={20} /> <Link href="https://walkover.in">Walkover</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
