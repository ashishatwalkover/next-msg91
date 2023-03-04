import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import TrustedSec from "@/components/trusted_by";
import Link from "next/link";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Segmento from "@/components/jsoncomponent/segmento";

const segmento = () => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Segmento/>
      <FaqSection />
      <Footer />
    </>
  );
};

export default segmento;
