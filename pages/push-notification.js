import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Pushnotification from "./ae/push-notification";

const rcs = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Pushnotification />
            <FaqSection />
      <Footer />
    </>
  );
};

export default rcs;
