import Header from "@/components/header";
import Notification from "@/components/notification";
import HeadTag from "./head";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import Hello from "@/components/jsoncomponent/hello";


export async function getStaticProps(context) {
  const response = await import(`@/pages/content/global.json`);
  const jsonData = await response.default;

  return {
    props: { sid: jsonData },
  }
}

const hello = ({sid}) => {
  // console.log("DATA+>>>",sid);
  return (
    <>
      <HeadTag />
      <Notification />
      <Header />
      <Hello dataa = {sid} />
      <FaqSection />
      <Footer />
    </>
  );
};

export default hello;
