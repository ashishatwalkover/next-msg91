import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Files from "@/components/jsoncomponent/filehosting";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/us.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const filehosting = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Files datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default filehosting;
