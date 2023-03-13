import HeadTag from "./head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Home from "@/components/home";
import Index from "@/components/jsoncomponent/index";

export async function getStaticProps(context) {
  const response = await import(`@/pages/content/uk.json`);
  const jsonData = await response.default;
  return {
    props: { dataProps: jsonData },
  };
}

const IndexPage = ({ dataProps }) => {
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Home />
      <ProductMenu />
      <Index datajson={dataProps} />
      <FaqSection />
      <Footer />
    </>
  );
};
export default IndexPage;
