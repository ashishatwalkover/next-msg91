import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Hello from "@/components/jsoncomponent/hello";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/uk.json`);
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
      <Hello datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default campaign;
