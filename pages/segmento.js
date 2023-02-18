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
          <div className="d-flex justify-content-center align-items-center text-center">
            <Image src="../img/campaign.svg" width={60} height={60} alt="#"/>
            <h1 className="heading">Segmento</h1>
          </div>
          <p>target based marketing</p>
          <h2 className="sub-heading">
            Segment your customers according to their action or event
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
            className="img-fluid"
            alt="#"
            width={1198}
            height="610"
          />
        </div>
      </div>
      <div className="container d-flex flex-column align-items-flex-start">
        <span className="text_1 mt-5">Features</span>
      </div>
      
      <div className="container d-lg-flex flex-row align-items-center">
        <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5 ms-lg-5 order-lg-2">
          <img src="/Img/short-url-img.svg" alt="msg91" />
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <h2 className="text_2">
            Personalize Marketing Content
          </h2>
          <span className="text_3 mt-3">
            Generate personalized content for different segments. Subdivide and send relevant content to users, boost up your customer retention by tailoring and segmenting.
          </span>
        </div>
      </div>

      <div className="container d-lg-flex flex-row align-items-center mt-5">
        <div className=" col col-lg-6 col-md-6 col-sm-12 flex-column align-items-flex-start mt-lg-5">
          <img src="/Img/short-url-img.svg" alt="msg91" />
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <h2 className="text_2">
            Run Targeted Campaigns
          </h2>
          <span className="text_3 mt-3">
            Filter out ceasing and inactive customers, personalize information for them, rebuild permanent customers by running targeted campaigns.
          </span>
        </div>
      </div>
      
      <div className="container d-lg-flex flex-row align-items-center mt-5">
        <div className=" col-6 flex-column align-items-flex-start order-2">
          <img src="/Img/short-url-img.svg" alt="msg91" />
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-flex-start">
          <h2 className="text_2">Precise Data Access</h2>
          <span className="text_3 mt-3">
            Slice it off and only access data that you need. Teams can segment data according to their needs by filtering it and take actions accordingly.
          </span>
        </div>        
      </div>         
      
      <div className="container section">
        <h2 className="text_2">“70% of customers say they prefer customized content.”</h2>
        <p className="text_3">When customers don’t get relevant information, it might irritate them. Receiving repetitive messages makes them disinterested and leads to a bad customer experience!
Customer retention increases with customer segmentation and personalization.</p>
      </div>

      <div className="accordion container col-lg-8 col-12 my-5" id="accordionExample">
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
              What is user segmentation?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              <p>Customer or user segmentation is the action of dividing your business’s customer base into multiple groups of individuals who are similar in specific criteria. You can provide a unique value proposition to different user groups while segmenting them. User segmentation is the process of breaking your client base into different groups depending upon their age, gender, behavior, demographic, psychographic, etc.</p>
              <p>Using customer segmentation in your marketing strategy will allow your marketers to target the right group of people with the right pitch regarding your products and services. This, in turn, will marginally boost the success of your marketing campaign because of the personalized targeting approach, where each group sees a product they might be interested in.</p>
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
              How can I improve my client conversations through segmento?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              <p>Send customize messages in order to increase the relevancy of your communications. You can tailor messages for your audience based on their actions and activity on your platform. For improving conversation send important updates, offers that they will likely engage with.</p>
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
              Why should you segment your customers?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  c-fs-4 c-ff-b c-fw-r">
                <p>A good content marketing platform should enable marketing firms and organizations to streamline and centralize their marketing processes from top to bottom. This includes planning and briefing to deployment and approvals. While different Content Marketing Softwares have different purposes for each requirement, their main task is to assist organizational brands to solve challenging coordination difficulties and management problems and encourage business success by providing better content market consumer segmentation for targeted reach. This improves the efficiency of the organization’s content management, increasing the quality and impact of your content while reducing risks to your business.</p>
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
              Why do we need customer segmentation?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  c-fs-4 c-ff-b c-fw-r">
                <p>A good content marketing platform should enable marketing firms and organizations to streamline and centralize their marketing processes from top to bottom. This includes planning and briefing to deployment and approvals. While different Content Marketing Softwares have different purposes for each requirement, their main task is to assist organizational brands to solve challenging coordination difficulties and management problems and encourage business success by providing better content market consumer segmentation for targeted reach. This improves the efficiency of the organization’s content management, increasing the quality and impact of your content while reducing risks to your business.</p>
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
              Why do we need customer segmentation?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  c-fs-4 c-ff-b c-fw-r">
              <p>Customer segmentation in content marketing software enables an organization to effectively allocate their marketing resources and maximize their cross and up-selling opportunities. When a group of customers is sent an email that is specific to their needs, it’s easier for companies to send those customers special offers. Some additional benefits of using customer segmentation include being a step ahead of your business’ competitors as well as being able to identify new products that new, existing or potential customers may be interested in.</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default campaign;
