import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "@/components/head";
import Image from "next/image";
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
          <div className="mt-3"><Image src={"/img/ixigo.svg"} alt="#" width={51} height="24" />
            <Image src={"/img/unacademy.svg"} alt="#" width={161} height="24" className="ms-4" />
            <Image src={"/img/indeed.svg"} alt="#" width={89} height="24" className="ms-4 mb-2" />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
      <div className="mt-3"><Image src={"/img/Campaign_flow.svg"} alt="#" width={1198} height="610"/></div>
      </div>
      <div className="container d-flex flex-column align-items-flex-start">
        <span className="text_1 mt-5">Features</span>
      </div>
      <div className="container d-flex flex-row align-items-center">
        <div className="col-6 d-flex flex-column align-items-flex-start">
          <span className="text_2">Automate sending messages under defined conditions</span>
          <span className="text_3 mt-3">Define different messaging parameters like time, region, number of messages per day, and more to make sure that your campaigns reach your audience under the right circumstances automatically, without any delays.</span>
        </div>
        <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 ms-5"></div>
      </div>
      <div className="container d-flex flex-row align-items-center mt-5">
      <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 me-5"></div>
        <div className="col-5 d-flex flex-column align-items-flex-start pb-4 ms-5">
          <span className="text_2">An all-in-one platform for all your campaigns</span>
          <span className="text_3 mt-3">Optimise your links and create short links that inspire confidence. Include short links in your custom messages with ease.</span>
        </div>
      </div>
      <div className="container d-flex flex-row align-items-center mt-5">
        <div className="col-6 d-flex flex-column align-items-flex-start pb-4">
          <span className="text_2">Make your communication more secure</span>
          <span className="text_3 mt-3">Now protect your Campaigns with our token-based workflow and a robust security framework. Implement best customer-engagement practices and shape communication to fit your brand while ensuring optimum security through and through.</span>
        </div>
        <div className="campaign_Flow_1_1 col-6 flex-column align-items-flex-start mt-5 ms-5"></div>
      </div>
    </>
  );
};

export default campaign;
