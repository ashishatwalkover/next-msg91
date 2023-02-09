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
          <button className="btn btn-primary btn-lg " type="button">
            Get started for Free
          </button>
          <p>Trusted by 30000+ Businesses</p>
        </div>
      </div>
    </>
  );
};

export default campaign;
