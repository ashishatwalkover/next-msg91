import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Email from "@/components/jsoncomponent/email";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/ae.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const email = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Email datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default email;
