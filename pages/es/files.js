import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Filehosting from "@/components/jsoncomponent/filehosting";

const files = () => {
  return (
    <>
        <HeadTag /> 
      <Notification />
      <Header />
      <Filehosting />
      <FaqSection />
      <Footer />    </>
  );
};

export default files;
