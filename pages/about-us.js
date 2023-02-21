import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";

const about_us = () => {
    return (
        <>
            {/* <div className="container text-center overflow-hidden px-4  col-12 col-sm-10  ">
        <div className="text-center justify-content-center py-5">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/campaign.svg" className="product-page-logo" />
            <h1 className="heading">Campaign</h1>
          </div>
          <p className="c-fs-4 mx-auto">Event based automation</p>
          <h2 className="c-fs-2 c-ff-b c-fw-r w-100 mx-auto">
            Boost audience engagement through smart communication and on-time
            delivery.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-3" type="button">
            Get started for Free
          </button>
          <TrustedSec />
        </div>
        <img
          src={"/img/Campaign_flow.svg"}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div> */}

            <div className="container d-flex flex-column flex-sm-row">
                <img src="#" className="col-sm-5 bg-success"></img>
                <img src="#" className="col-sm-5 offset-sm-2 bg-success"></img>
            </div>

            <div className="container text-center justify-content-center p-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <span className="c-fs-2 mx-auto p-5">
                        We empower developers with communication APIs
                        in addition to building tools & supporting ideas that run majorly on communication.
                    </span>
                </div>
            </div>

            <div className="container d-lg-flex flex-row align-items-center mt-5">
                <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
                    <img src="/img/Bootstrap.png" className="rounded-circle feature-img bg-success w-50" />
                </div>
                <div className="col col-lg-7 col-md-5 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
                    <span className="c-fs-1 c-ff-h">
                        Every brand offers its own culture, and this is what we offer you...
                    </span>
                </div>
            </div>

            <div className="container text-center justify-content-center p-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading mx-auto p-5">
                        We believe in
                    </h1>
                </div>
            </div>

            <div class="container row align-items-flex-start mx-auto">
                <div class="col-lg-6 col-md-6 col-sm-12 px-5">
                    <div class="h-100 p-5 bg-white border border-primary rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <h2>Thinking like a Customer</h2>
                        <p>We try to get into your shoes to understand your communication issues and then, solve it with our problem-solving vision.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 px-5">
                    <div class="p-5 bg-white border border-success rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <h2>Our magic Wand is our Innovations</h2>
                        <p>There is no set rule book to follow, we experiment, we fail, we learn and come up stronger. We figure it out, eventually, everyone does; all we do is write it down and start sailling.</p>
                    </div>
                </div>
            </div>

            <div class="container row align-items-flex-start py-5 mx-auto">
                <div class="col-lg-6 col-md-6 col-sm-12 px-5">
                    <div class="h-100 p-5 bg-white border border-danger rounded-3">
                        <img src="../img/Bootstrap.png" className="product-page-logo" />
                        <h2>Uplifting each Other</h2>
                        <p>Liberal thoughts, ideas, solutions, innovation anywhere, everywhere!
                            Our focus is not ME, it is WE.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 px-5">
                    <div class="p-5 bg-white border border-warning rounded-3">
                        <img src="../img/campaign.svg" className="product-page-logo" />
                        <h2>Sustainability</h2>
                        <p>Our quest for sustainability has to transform the way we think about products, technologies, processes and business models.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center py-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading">Our leadership team</h1>
                </div>
                <h2 className="c-fs-2 c-ff-b c-fw-r mx-auto mt-3">
                    The abilities combined with the dedication of our team
                    has resulted in making us the most loved & innovative cloud communication platform.
                </h2>
            </div>

            <div class="container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-auto">
                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Pushpendra Agrawal</p>
                            <p className="c-fs-4 card-text mt-2">Founder & Advisor</p>
                            <p class="c-fs-5 card-text mt-2">Pushpendra is a serial entrepreneur.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Shubhendra Agrawal</p>

                            <p className="c-fs-4 card-text mt-2">Founder & CEO</p>

                            <p class="c-fs-5 card-text mt-2">Shubhendra is an absolute Finance man.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Ravi Dangi</p>

                            <p className="c-fs-4 card-text mt-2">Sales</p>

                            <p class="c-fs-5 card-text mt-2">Mistakenly believed Engineer, he’s actually a sales buff.</p>
                        </div>
                    </div>
                </div>

                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Vipin Sharma</p>

                            <p className="c-fs-4 card-text mt-2">Technology</p>

                            <p class="c-fs-5 card-text mt-2">Mostly found in the gym or at the TT table.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Alisha Chouhan</p>

                            <p className="c-fs-4 card-text mt-2">Global Business</p>

                            <p class="c-fs-5 card-text mt-2">Works hard, has fun, makes a difference.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-sm-4 col-sm-12">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                        <div class="card-body">
                            <p className="c-fs-3 c-fw-m card-text">Chinmay Daga</p>

                            <p className="c-fs-4 card-text mt-2">Operations</p>

                            <p class="c-fs-5 card-text mt-2">The Processes & Partnerships pro.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center p-5">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row p-5">
                    <p className="c-fs-4 mx-auto p-5">Striving to fulfil our vision by hiring passionate people who are willing to push their benchmark, and of the industry, as well.
                        Want to join our vision? <strong>We’re</strong> <strong><a href="https://apply.workable.com/walkover/" target="_blank" rel="nofollow noopener">Hiring!</a></strong></p>
                </div>
            </div>

            <div class="container col-md-12 col-md-12 col-sm-12 mx-auto">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <div className="d-lg-flex flex-row align-items-center justify-content-center">
                        <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
                            <img src="../img/Bootstrap.png" className="product-page-logo w-50" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start ms-5">
                            <h1 className="c-fw-m mb-5">Our Team is Our Strength</h1>
                            <span className=" col-md-6 c-fs-5 mb-2">The team of Superheroes makes us stand out. There are no supernatural powers, just the will and dedication to serve you helps us in delivering eminence.
                            </span>
                            <span className="col-md-6 c-fs-5 mb-3">For any query and suggestion reach out to our Superheroes.
                            </span>
                        </div>
                    </div>
                    <button class="btn btn-outline-secondary" type="button">Contact us</button><span className="mx-4 mt-5">or</span><button class="btn btn-outline-secondary" type="button">Talk to an Expert</button>
                </div>
            </div>

            <div className="container text-center justify-content-center mx-auto">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="heading mx-auto p-5">
                        MSG91 today is
                    </h1>
                </div>
            </div>

            <div class="container row mx-auto text-center ">
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="h-100 p-5 bg-white border-0 rounded-3">
                        <h2>#1</h2>
                        <p className="c-fs-3">A2P communication provider in India, serving clients worldwide.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <h2>1 Billion+</h2>
                        <p className="c-fs-3">OTPs, Transactional & Promotional SMS delivered per month without fail.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <h2>15k</h2>
                        <p className="c-fs-3">Active users globally.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center justify-content-center mx-auto">
                <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                    <h1 className="col-lg-6 col-md-6 col-sm-12 heading mx-auto p-5">
                        We are
                        who our Clients say we are!
                    </h1>
                </div>
            </div>

            <div class="container row mx-auto text-center ">
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="h-100 p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4">MSG91 has been an extremely reliable communication service for us. Their OTP infra has been instrumental in reducing customer drop-outs. Great support too!</p>
                        <div className="d-flex py-5">
                            <img src="../img/Bootstrap.png" className="me-3 product-page-logo" />
                            <div class="client-detail">
                                <h5 class="c-fs-3 c-fw-b">Manan Bajoria</h5>
                                <small class="text-start text-muted c-fs-4">Ixigo</small>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4">You guys have been instrumental in getting our customer connect via SMS trustworthy. Appreciate your technical support services as well. Quite responsive!</p>
                        <div className="d-flex py-5">
                            <img src="../img/Bootstrap.png" className="me-3 product-page-logo" />
                            <div class="client-detail">
                                <h5 class="c-fs-3 c-fw-b">Sushant Khairnar</h5>
                                <small class="text-start text-muted c-fs-4">Policybazaar (former)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 px-2">
                    <div class="p-5 bg-white border-0 rounded-3">
                        <p className="c-fs-4">MSG91 has helped us in delivering great customer experience through consistent communication!</p>
                        <div className="d-flex mt-5 py-5">
                            <img src="../img/Bootstrap.png" className="me-3 product-page-logo" />
                            <div class="client-detail">
                                <h5 class="c-fs-3 c-fw-b">Aditya Sriganesh</h5>
                                <small class="text-start text-muted c-fs-4">IndiaLends</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="container row align-items-flex-start mx-auto">
                <div class="col-lg-6 col-md-6 col-sm-12 px-5">
                    <div class="h-100 p-5 bg-white border border-primary rounded-3">
                        <h2>Thinking like a Customer</h2>
                        <p>We try to get into your shoes to understand your communication issues and then, solve it with our problem-solving vision.</p>
                    </div>
                </div>
            </div> */}

            <div class="container col-md-12 col-md-12 col-sm-12 mx-auto py-5">
                <div class="h-100 p-5 bg-white border border-dark rounded-3">
                    <div className="d-lg-flex flex-row align-items-center justify-content-center">
                        <div className=" col col-lg-4 col-md-8 col-sm-12 flex-column text-center order-lg-2">
                            <img src="../img/Bootstrap.png" className="product-page-logo w-50 ms-5" />
                        </div>
                        <div className="container">
                            <h1 className="col-lg-12 col-md-12 col-sm-12 c-fw-m mb-4">Creating a supportive community</h1>
                            <span className="col-lg-6 col-md-6 col-sm-12 c-fs-4">We believe in empowering and love to get our hands dirty where we can to improve lives and help in making it better.</span>
                            <p className="col-lg-12 col-md-12 col-sm-12 c-fs-4 mt-4">That’s why our social policy provides a push to startups by providing them with communication benefits, support NGO and their amazing work, push budding Developers to think beyond as we’ve the platform built for them and help Organizations like yours to expand their impact using communications technologies.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="container col-md-12 col-md-12 col-sm-12 mx-auto py-5 mt-5">
                <div class="h-100 bg-white rounded-3">
                    <div className="d-lg-flex flex-row align-items-center justify-content-center">
                        <div className=" col col-lg-4 col-md-8 col-sm-12 flex-column text-center order-lg-2">
                            <img src="../img/Bootstrap.png" className="product-page-logo w-50 ms-5" />
                        </div>
                        <div className="container">
                            <h1 className="col-lg-12 col-md-12 col-sm-12 c-fw-b mb-4">Our remote presence all over the world keeps us connected</h1>
                            <span className="col-lg-6 col-md-6 col-sm-12 c-fs-4">We act faster and interact with our customers every day, providing needful solutions, fulfilling local requirements, based on proven best-practices.</span>
                            <p className="col-lg-12 col-md-12 col-sm-12 c-fs-4 c-fw-b mt-4">#remoteworkingteam</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default about_us;
