import Trustedsec from "@/components/trusted_by";
import HeadTag from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer-sec";
import { MdDoneOutline , MdArrowForward} from "react-icons/md";
const partnerprogram = () => {
  return (
    <>
      <HeadTag />
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center pt-5 my-5">
        <h1 className="heading">MSG91 Partner Program</h1>
        <p className="c-fs-1 mt-3 text-center w-50">
          Leverage your communication tactics with the MSG91 CPaaS solution
        </p>
        <button className="btn btn-primary c-fs-3 mt-3 mb-5">Apply Now</button>
        <Trustedsec className="" />
      </div>
      <section className="section c-bg-grey">
        <div className="container">
          <h2 className="sub-heading">Partnership Solutions</h2>
          <div className=" d-flex justify-content-between align-items-center my-5 py-5">
            <div className=" partnership-sol-img">
              <h3 className=" c-fs-1 c-fw-m">Integration Partnership</h3>
              <p className="c-fs-3">
                If you are a CRM solution, marketing platform, e-commerce
                builder, or any other SaaS product, You can integrate MSG91 in
                your platform to enable communication across channels like
                WhatsApp, Text SMS, Email, Voice, RCS, Telegram etc from right
                within. As an added perk, you will also be featured here.
              </p>
            </div>
            <img
              className="partnership-sol-img ms-2"
              src="/img/integration-partnership-img.svg"
            ></img>
          </div>
          <div className="flex-row-reverse d-flex justify-content-between align-items-center my-5 py-5">
            <div className=" partnership-sol-img">
              <h3 className=" c-fs-1 c-fw-m">Affiliated Partnership</h3>
              <p className="c-fs-3">
                Turn your referrals into recurring revenue with MSG91 for
                Affiliates Program. Co-sell through our powerful APIs and simply
                monetize existing relationships by referring us to growing
                businesses.
              </p>
            </div>
            <img
              className="partnership-sol-img ms-2"
              src="/img/affiliated-partnership-img.svg"
            ></img>
          </div>
          <div className=" d-flex justify-content-between align-items-center my-5 py-5">
            <div className=" partnership-sol-img">
              <h3 className=" c-fs-1 c-fw-m">Add-on Partnership</h3>
              <p className="c-fs-3">
                Have an idea of building an add-on for us for any market place?
                Let’s talk!
              </p>
            </div>
            <img
              className="partnership-sol-img ms-2"
              src="/img/add-on-partnership-img.svg"
            ></img>
          </div>
          <div className="flex-row-reverse d-flex justify-content-between align-items-center my-5 py-5">
            <div className=" partnership-sol-img">
              <h3 className=" c-fs-1 c-fw-m">MSG91 For Startups</h3>
              <p className="c-fs-3">
                If you are an Incubator, Accelerator, Venture Capital Fund,
                Co-working Space etc, offer our Complimentary Startup Package to
                your portfolio and empower them with the best in class
                communication APIs right from the start.
              </p>
            </div>
            <img
              className="partnership-sol-img ms-2"
              src="/img/msg91-for-startups-img.svg"
            ></img>
          </div>
        </div>
      </section>
      <div className="container d-flex p-5">
        <img
          className="partnership-meet mx-auto"
          src="/img/partnership-meet-img.png"
        ></img>
      </div>
      <section className="section c-bg-grey">
        <div className="container d-flex flex-wrap">
          <div className="w-50 pe-4">
            <MdDoneOutline className="c-fs-1 text-primary" />
            <h2 className="small-heading c-fw-m my-3">Deep Integration</h2>
            <p className="c-fs-3">
              MSG91 APIs enable you to code the services as a part of your own
              product. Allow your users to seamlessly experience the power of
              communication in your tool.
            </p>
          </div>
          <div className="w-50 ps-4">
            <MdDoneOutline className="c-fs-1 text-primary" />
            <h2 className="small-heading c-fw-m my-3">Revenue Sharing</h2>
            <p className="c-fs-3">
              We mean it when we say, it’s your product. Even though the
              customer uses MSG91 APIs, we only charge for our volume cost.
              Remaining revenue remains yours.
            </p>
          </div>
          <div className="w-50 pt-5 pe-4">
            <MdDoneOutline className="c-fs-1 text-primary" />
            <h2 className="small-heading c-fw-m my-3">Service Resilience</h2>
            <p className="c-fs-3">
              We ensure that the APIs see a 99.99% success rate. Challenges we
              face at the backend, are our responsibility. It’s our commitment
              to make your business seamless.
            </p>
          </div>
          <div className="w-50 pt-5 ps-4">
            <MdDoneOutline className="c-fs-1 text-primary" />
            <h2 className="small-heading c-fw-m my-3">Customer Support</h2>
            <p className="c-fs-3">
              We treat your customers as ours when it comes to support. Our
              support team handles their queries and addresses their concerns if
              any.
            </p>
          </div>
        </div>
      </section>
      <div className="container d-flex flex-column py-5 ">
        <h2 className="sub-heading py-4">Hear from our Partners</h2>
        <div className="d-flex justify-content-between h-100">
          <div className=" w-50 pe-4 our-partner h-100">
            <img className="mt-3" src="/img/the-weeky-img.png"/>
            <div className="d-flex flex-column">
            <p className="c-fs-3 my-3">Our long standing Partnership with MSG91 has been very successful. The quality of services and support MSG91 rovides is excellent. We have been treated with a positive response every single time.</p>
            <p className="c-fs-3 c-fw-m">Prateek Agrawal</p>

          </div>
          </div>
          <div className="w-50 h-100 ps-4 our-partner ">
            <img className="mt-3 " src="/img/rixyncs-img.png"/>
          <div className=" d-flex flex-column justify-content-between">
            <p className="c-fs-3 my-3">We are happy partnering with MSG91, the team has been prompt in addressing the queries and taking our partnership ahead. Thank you MSG91</p>
            <p className="c-fs-3 c-fw-m t-auto">Bharat Kumar</p>

          </div>
          </div>
        </div>
        <a className="mx-auto text-primary c-fs-4 c-fw-m " href="#">Explore more partners <MdArrowForward/></a>
      </div>
      <Footer />
    </>
  );
};
export default partnerprogram;
