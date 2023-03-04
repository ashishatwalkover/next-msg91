import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Sms from "@/components/jsoncomponent/sms";

const Email = () => {
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

export default Email;
