import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Rcs from "@/components/jsoncomponent/rcs";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/sg.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const rcs = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Rcs datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default rcs;
