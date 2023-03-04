import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Hello from "@/components/jsoncomponent/hello";

const hello = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Hello />
      <FaqSection />
      <Footer />
    </>
  );
};

export default hello;
