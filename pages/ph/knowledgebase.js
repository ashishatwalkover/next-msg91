import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import KnowladgeBase from "@/components/jsoncomponent/knowledgebase";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/ph.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const knowladgeBase = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <KnowladgeBase datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default knowladgeBase;
