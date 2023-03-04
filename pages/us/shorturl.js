import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Shorturl from "@/components/jsoncomponent/shorturl";

const shorturl = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Shorturl />
      <Footer />
    </>
  );
};

export default shorturl;
