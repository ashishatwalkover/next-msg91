import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Whatsapp from "@/components/jsoncomponent/whatsapp";

const whatsapp = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Whatsapp />
      <FaqSection />
      <Footer />
    </>
  );
};

export default whatsapp;
