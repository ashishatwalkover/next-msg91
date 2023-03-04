import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Pushnotification from "@/components/jsoncomponent/pushnotification";

const pushnotification = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Pushnotification/>
      <FaqSection />
      <Footer />
    </>
  );
};

export default pushnotification;
