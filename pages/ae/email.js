import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Email from "@/components/jsoncomponent/email";

const email = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Email />
      <FaqSection />
      <Footer />
    </>
  );
};

export default email;
