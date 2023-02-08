
import HeadTag from "@/components/head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";

import Footer from "@/components/footer";
import Home from "@/components/home";

const IndexPage =()=> {
  return (
    <div>
      <HeadTag/>
      <Notification/>
      <Header/>
      <Home/>
      <ProductMenu/>     
      <Footer/>
    </div>    
  )
};
export default IndexPage;
