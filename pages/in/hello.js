import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Hello from "@/components/jsoncomponent/hello";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/in.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const hello = ({ dataProps }) => {
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

export default hello;
