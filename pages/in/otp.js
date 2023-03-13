import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Otp from "@/components/jsoncomponent/otp";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/in.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const otp = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Otp datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default otp;
