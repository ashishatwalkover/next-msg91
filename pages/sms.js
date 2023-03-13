import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Sms from "@/components/jsoncomponent/sms";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/global.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const sms = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Sms datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default sms;
