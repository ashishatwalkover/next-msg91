import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import faqSection from "@/components/faq";

const campaign = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="text-center py-5">
          <p>Event based automation</p>
          <div className="d-flex justify-content-center align-items-center text-center">
            <Image src="../img/campaign.svg" width={60} height={60} />
            <h1 className="heading">Campaign</h1>
          </div>
          <h2 className="sub-heading">
            Boost audience engagement through smart communication and on-time
            delivery.{" "}
          </h2>
          <button className="btn btn-primary btn-lg mt-3" type="button">
            Get started for Free
          </button>
          <p className="mt-3">Trusted by 30,000+ Businesses</p>
          <div className="mt-3">
            <Image src={"/img/ixigo.svg"} alt="#" width={51} height="24" />
            <Image
              src={"/img/unacademy.svg"}
              alt="#"
              width={161}
              height="24"
              className="ms-4"
            />
            <Image
              src={"/img/indeed.svg"}
              alt="#"
              width={89}
              height="24"
              className="ms-4 mb-2"
            />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="mt-3">
          <Image
            src={"/img/Campaign_flow.svg"}
            alt="#"
            width={1198}
            height="610"
          />
        </div>
      </div>
      <div className="container d-flex flex-column align-items-flex-start">
        <span className="text_1 mt-5">Features</span>
      </div>
      <div className="container d-flex flex-row align-items-center">
        <div className="col-6 d-flex flex-column align-items-flex-start">
          <span className="text_2">
            Automate sending messages under defined conditions
          </span>
          <span className="text_3 mt-3">
            Define different messaging parameters like time, region, number of
            messages per day, and more to make sure that your campaigns reach
            your audience under the right circumstances automatically, without
            any delays.
          </span>
        </div>
        <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 ms-5"></div>
      </div>
      <div className="container d-flex flex-row align-items-center mt-5">
        <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 me-5"></div>
        <div className="col-5 d-flex flex-column align-items-flex-start pb-4 ms-5">
          <span className="text_2">
            An all-in-one platform for all your campaigns
          </span>
          <span className="text_3 mt-3">
            Optimise your links and create short links that inspire confidence.
            Include short links in your custom messages with ease.
          </span>
        </div>
      </div>
      <div className="container d-flex flex-row align-items-center mt-5">
        <div className="col-6 d-flex flex-column align-items-flex-start pb-4">
          <span className="text_2">Make your communication more secure</span>
          <span className="text_3 mt-3">
            Now protect your Campaigns with our token-based workflow and a
            robust security framework. Implement best customer-engagement
            practices and shape communication to fit your brand while ensuring
            optimum security through and through.
          </span>
        </div>
        <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 ms-5"></div>
      </div>
      <div className="container d-flex flex-row align-items-center mt-5 mb-5">
        <div className="col-4 flex-column align-items-flex-start p-3 me-4">
          <div className="mt-5 mb-3">
            <Image
              src={"/Img/done_outline.svg"}
              alt="#"
              width={40}
              height="40"
            ></Image>
          </div>
          <span className="text_2 mt-1">
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="text_3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
            </span>
          </div>
        </div>
        <div className="col-4 flex-column align-items-flex-start p-3 me-4">
          <div className="mt-5 mb-3">
            <Image
              src={"/Img/done_outline.svg"}
              alt="#"
              width={40}
              height="40"
            ></Image>
          </div>
          <span className="text_2 mt-1">
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="text_3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
            </span>
          </div>
        </div>
        <div className="col-4 flex-column align-items-flex-start p-3 ms-4">
          <div className="mt-5 mb-3">
            <Image
              src={"/Img/done_outline.svg"}
              alt="#"
              width={40}
              height="40"
            ></Image>
          </div>
          <span className="text_2 mt-1">
            Pre-defined templates for improved productivity
          </span>
          <div>
            <span className="text_3 mt-2">
              Leverage our pre-defined templates to reduce turnaround time for
              your campaigns. Just import & deploy campaigns on the fly within
              minutes.
            </span>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-start ">
        <div className="d-flex flex-row align-items-center">
          <span className="c-fs-2 c-ff-h">More features</span>
        </div>
        <div className="container d-flex align-items-flex-start my-3">
          <div className="d-flex flex-column justify-content-center align-items-flex-start col-6 mt-2">
            <span className="text_4">
              - Automate sending messages under defined conditions
            </span>
            <span className="text_4 mt-1">
              - An all-in-one platform for all your campaigns
            </span>
            <span className="text_4 mt-1">
              - Make your communication more secure
            </span>
            <span className="text_4 mt-1">
              - Pre-defined templates for improved productivity
            </span>
            <span className="text_4 mt-1">
              - Build a hassle-free communication flow
            </span>
            <span className="text_4 mt-1">- Track campaign performance</span>
          </div>
          <div className="need-something c-bg-grey d-flex justify-content-sm-between my-5 align-items-center  px-4">
            <span className="c-fs-2 c-ff-h">Need something else</span>
            <Link
              href="#"
              className=" c-fs-4 btn btn-outline-primary py-2 px-3"
            >
              Request a Feature
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="accordion container col-8 my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header " id="headingOne">
            <button
              className="accordion-button c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the communication APIs?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              Built for the communications space, communication APIs define
              rules of the possible interactions between servers and
              communication applications. They also function as the
              communication layer between applications and databases. Easy
              integrations and cost effective solutions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How MSG91 is evolving as a CPaaS leader?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              Founded in 2010, MSG91 over the years has built a robust product
              portfolio of communication services over a broad set of APIs, all
              available in off-the-shelf modules. We thrive on innovation and
              ease-of-use by constantly upgrading services and features to our
              core offerings making MSG91 one of the most feature-rich CPaaS
              platforms.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              I'm already using other services. How do I switch to your
              solution?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  c-fs-4 c-ff-b c-fw-r">
              You can switch in just a few steps, you need to create your
              account with MSG91. Our Support Superheroes will help you in the
              integration process. You can also refer migration guides to ease
              out the process.
            </div>
          </div>
        </div>
        <Link
          href="#"
          className=" c-fs-4 btn btn-link text-decoration-none py-2 px-3 mx-auto"
        >
          Request a Feature
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right ms-3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
      </div>
      <Footer/>
    </>
  );
};

export default campaign;
