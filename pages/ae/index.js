import HeadTag from "./head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";
import Footer from "@/components/footer";
import Home from "@/components/home";
import { MdFavorite, MdArrowForward } from "react-icons/md";
import jsondata from "./content.json"
import Link from "next/link";
import Index from "@/components/index";
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