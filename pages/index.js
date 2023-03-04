import HeadTag from "./head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Index from "@/components/jsoncomponent/index";
const IndexPage = () => {
  return (
    <div>
      <HeadTag />
      <Notification />
      <Header />
      <Home />
      <ProductMenu />
      <Index/>
      <Footer />
    </div>
  );
};
export default IndexPage;