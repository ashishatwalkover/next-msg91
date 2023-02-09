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
    </>
  );
};

export default campaign;
