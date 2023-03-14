import Header from "@/components/header";
import Notification from "@/components/notification";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import HeadTag from "./head";

const about_us = () => {
    return (
        <>
            <HeadTag />
            <Notification />
            <Header />
            {/* <div className="container d-flex flex-column flex-sm-row">
                <img src="#" className="col-sm-5 bg-success"></img>
                <img src="#" className="col-sm-5 offset-sm-2 bg-success"></img>
            </div> */}

            <div className="container text-center justify-content-center p-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading">About MSG91 Team</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <span className="c-fs-2 mx-auto">
                        We empower developers with communication APIs
                        in addition to
                    </span>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <span className="c-fs-2 mx-auto">
                        building tools & supporting ideas that run majorly on communication.
                    </span>
                </div>
            </div>

            <div className="px-auto">
                <img src="/img/team_Image.svg" className="p-5"></img>
            </div>

            <div className="container-fluid d-lg-flex flex-row justify-content-center mt-5 c-bg-grey pt-5">
                    <h1 className="sub-heading">
                        Every brand offers its own culture,
                    </h1>
            </div>
            <div className="container-fluid d-lg-flex flex-row justify-content-center c-bg-grey pb-5">
                    <h1 className="sub-heading">
                         and this is what we offer you...
                    </h1>
            </div>

            <div className="container p-5">
                <div className="d-flex flex-column flex-sm-row">
                    <h1 className="sub-heading p-4">
                        We believe in
                    </h1>
                </div>
            </div>
            
            

            <div class="container row align-items-flex-start mx-auto">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    {/* <div class="h-100 p-5 bg-white border border-primary rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <p>Thinking like a Customer</p>
                    </div> */}
                    <div class="w-100 d-flex flex-column align-items-center"><span class="c-fs-1 rounded-circle social-circle justify-content-center align-items-center d-flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="p-auto c-fw-sb text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span><p class="c-fs-2 c-fw-b px-3 py-3 mt-n2 rounded w-75 text-center c-bg-grey">Thinking like a Customer</p></div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    {/* <div class="p-5 bg-white border border-success rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <p>Our magic Wand is our Innovations</p>
                    </div> */}
                    <div class="w-100 d-flex flex-column align-items-center"><span class="c-fs-1 rounded-circle social-circle justify-content-center align-items-center d-flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="p-auto c-fw-sb text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span><p class="c-fs-2 c-fw-b px-3 py-3 mt-n2 rounded w-75 text-center c-bg-grey">Our Magic Wand is Innovations</p></div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    {/* <div class="h-100 p-5 bg-white border border-danger rounded-3">
                        <img src="../img/Bootstrap.png" className="product-page-logo" />
                        <p>Uplifting each Other</p>
                    </div> */}
                    <div class="w-100 d-flex flex-column align-items-center"><span class="c-fs-1 rounded-circle social-circle justify-content-center align-items-center d-flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="p-auto c-fw-sb text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span><p class="c-fs-2 c-fw-b px-3 py-3 mt-n2 rounded w-75 text-center c-bg-grey">Uplifting each other</p></div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    {/* <div class="p-5 bg-white border border-warning rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <p>Sustainability</p>
                    </div> */}
                    <div class="w-100 d-flex flex-column align-items-center"><span class="c-fs-1 rounded-circle social-circle justify-content-center align-items-center d-flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="p-auto c-fw-sb text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span><p class="c-fs-2 c-fw-b px-3 py-3 mt-n2 rounded w-75 text-center c-bg-grey">Sustainability is Priority</p></div>
                </div>
            </div>

            <div className="container-fluid text-center justify-content-center py-5 c-bg-grey mt-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading">Our leadership team</h1>
                </div>
                <h2 className="c-fs-2 c-ff-b c-fw-r mx-auto mt-3">
                    The abilities combined with the dedication of our team
                    has resulted in making us the most loved & innovative cloud communication platform.
                </h2>
            </div>

            <div class="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-auto p-5 c-bg-grey">
                <div class="col col-lg-4 col-sm-4 col-sm-12  px-5">
                    <div class="card shadow-sm">
                        <div><img src="/img/pushpendra_agrawal.jpg" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Pushpendra Agrawal</p>
                            <p className="c-fs-4 card-text mt-2">Founder & Advisor</p>
                            <p class="c-fs-5 card-text mt-2">Pushpendra is a serial entrepreneur.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12 px-5">
                    <div class="card shadow-sm">
                        <div><img src="/img/shubhendra_agrawal.png" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Shubhendra Agrawal</p>

                            <p className="c-fs-4 card-text mt-2">Founder & CEO</p>

                            <p class="c-fs-5 card-text mt-2">Shubhendra is an absolute Finance man.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12 px-5">
                    <div class="card shadow-sm">
                        <div><img src="/img/ravi_dangi.png" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Ravi Dangi</p>

                            <p className="c-fs-4 card-text mt-2">Sales</p>

                            <p class="c-fs-5 card-text mt-2">Mistakenly believed Engineer, he’s a sales buff.</p>
                        </div>
                    </div>
                </div>

                <div class="col col-lg-4 col-sm-4 col-sm-12 px-5">
                    <div class="card shadow-sm">
                        <div><img src="/img/vipin_sharma.png" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Vipin Sharma</p>

                            <p className="c-fs-4 card-text mt-2">Technology</p>

                            <p class="c-fs-5 card-text mt-2">Mostly found in the gym or at the TT table.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12 px-5">
                    <div class="card shadow-sm">
                        <div><img src="/img/alisha_chouhan.png" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Alisha Chouhan</p>

                            <p className="c-fs-4 card-text mt-2">Global Business</p>

                            <p class="c-fs-5 card-text mt-2">Works hard, has fun, makes a difference.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12 px-5">
                    <div class="card shadow-sm">
                        {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg> */}
                        <div><img src="/img/chinmay_daga.png" className="card-img-top" alt></img></div>
                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Chinmay Daga</p>

                            <p className="c-fs-4 card-text mt-2">Operations</p>

                            <p class="c-fs-5 card-text mt-2">The Processes & Partnerships pro.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center c-bg-grey m-5 mx-auto">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <p className="c-fs-2 mx-auto p-5">Striving to fulfil our vision by hiring passionate people who are willing to push their benchmark, and of the industry, as well.
                        Want to join our vision? <strong>We’re</strong> <strong><a href="https://apply.workable.com/walkover/" target="_blank" rel="nofollow noopener">Hiring!</a></strong></p>
                </div>
            </div>

            <div class="container col-md-12 col-md-12 col-sm-12 mx-auto py-5 mt-5">
                <div class="h-100 bg-white rounded-3">
                    <div className="d-lg-flex flex-row align-items-center justify-content-center">
                        <div className=" col col-lg-6 col-md-8 col-sm-12 flex-column text-center order-lg-2">
                            <img src="../img/team_Image1.svg" className="product-page-logo w-50 ms-5" />
                        </div>
                        <div className="container">
                            <h1 className="col-lg-12 col-md-12 col-sm-12 c-fw-b mb-4">Our Team is our Strength</h1>
                            <span className="col-lg-6 col-md-6 col-sm-12 c-fs-2">The team of Superheroes makes us stand out. There are no supernatural powers, just the will and dedication to serve you helps us in delivering eminence.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center mx-auto">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading mx-auto p-5 c-fw-b">
                        MSG91 today is
                    </h1>
                </div>
            </div>

            <div class="container row mx-auto text-center p-5">
                <div class="col-lg-4 col-md-4 col-sm-12 px-1">
                    <div class="h-100 p-5 bg-white border-0 rounded-3">
                        <p className="text-primary c-fs-1 c-fw-b">#1</p>
                        <p className="c-fs-3 c-fw-b">A2P communication provider in India, serving clients worldwide.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-1">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="text-primary c-fs-1 c-fw-b">1 Billion+</p>
                        <p className="c-fs-3 c-fw-b">OTPs, Transactional & Promotional SMS delivered per month without fail.</p>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-4 col-sm-12 px-1">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="text-primary c-fs-1 c-fw-b">15k</p>
                        <p className="c-fs-3 c-fw-b">Active users of across the globe.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center mx-auto">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <p className="col-lg-10 col-md-6 col-sm-12 sub-heading c-fw-b mx-auto p-2">
                        We are
                        who our Clients say we are!
                    </p>
                </div>
            </div>

            <div class="container row mx-auto text-center ">
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="h-100 p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4 text-muted">MSG91 has been an extremely reliable communication service for us. Their OTP infra has been instrumental in reducing customer drop-outs. Great support too!</p>
                        <div className="d-flex">
                            <img src="../img/ixigo_Ss.svg" className="product-page-logo w-100" />
                        </div>
                    </div>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4 text-muted">You guys have been instrumental in getting our customer connect via SMS trustworthy. Appreciate your technical support services as well. Quite responsive!</p>
                        <div className="d-flex">
                            <img src="../img/policy_Bazaar.svg" className="product-page-logo w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4 text-muted">MSG91 has helped us in delivering great customer experience through consistent communication!</p>
                        <div className="d-flex mt-4">
                            <img src="../img/indialends.svg" className="product-page-logo w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default about_us;
