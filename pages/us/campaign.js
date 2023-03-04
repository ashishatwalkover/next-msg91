import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Campaign from "@/components/jsoncomponent/campaign";

const campaign = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Campaign />
      <FaqSection />
      <Footer />
    </>
  );
};

export default campaign;
