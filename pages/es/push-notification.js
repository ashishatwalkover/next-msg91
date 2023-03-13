import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import PushNotification from "@/components/jsoncomponent/pushnotification";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/es.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const pushnotification = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <PushNotification datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default pushnotification;
