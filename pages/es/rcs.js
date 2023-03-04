import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Rcs from "@/components/jsoncomponent/rcs";

const rcs = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Rcs />
      <FaqSection />
      <Footer />
    </>
  );
};

export default rcs;
