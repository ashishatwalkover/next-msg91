import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Voice from "@/components/jsoncomponent/voice";

const voice = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Voice />
      <FaqSection />
      <Footer />
    </>
  );
};

export default voice;
