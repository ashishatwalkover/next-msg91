import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Telegram from "@/components/jsoncomponent/telegram";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/es.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const telegram = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Telegram datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default telegram;
