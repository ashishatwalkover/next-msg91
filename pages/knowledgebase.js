import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Knowledgebase from "@/components/jsoncomponent/knowledgebase";

const knowledgebase = () => {
  return (
    <>
       <HeadTag /> 
      <Notification />
      <Header />
      <Knowledgebase />
      <FaqSection />
      <Footer />
    </>
  );
};

export default knowledgebase;
