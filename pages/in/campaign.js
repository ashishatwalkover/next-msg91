import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Page from "@/components/jsoncomponent/campaign";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/global.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const campaign = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Page datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default campaign;
