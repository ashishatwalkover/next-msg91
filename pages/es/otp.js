import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Otp from "@/components/jsoncomponent/otp";

const otp = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Otp />
      <FaqSection />
      <Footer />
    </>
  );
};

export default otp;
