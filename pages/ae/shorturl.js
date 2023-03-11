import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import ShortUrl from "@/components/jsoncomponent/shorturl";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/ae.json`);
  const jsonData = await response.default;

  return {
    props: { dataProps: jsonData },
  };
}

const shorturl = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <ShortUrl datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default shorturl;
