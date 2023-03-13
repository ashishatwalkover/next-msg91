import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Voice from "@/components/jsoncomponent/voice";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/es.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const voice = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Voice datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default voice;
