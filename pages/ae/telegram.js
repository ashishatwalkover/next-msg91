import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Telegram from "@/components/jsoncomponent/telegram";

const rcs = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Telegram />
            <FaqSection />
      <Footer />
    </>
  );
};

export default rcs;
