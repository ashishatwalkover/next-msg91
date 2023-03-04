import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
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
