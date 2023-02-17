
import HeadTag from "@/components/head";
import Header from "@/components/header";
import Notification from "@/components/notification";
import ProductMenu from "@/components/productmenu";
import LearningCenter from "@/components/learning_center";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Utilities from "@/components/utilities";
import ClintStories from "@/components/clintstories";

const IndexPage =()=> {
  return (
    <>
      <HeadTag/>
      <Notification/>
      <Header/>
      <Home/>
      <ProductMenu/>
      <LearningCenter/>
      <Utilities/>     
      <ClintStories/>
      <Footer/>
    </>    
  )
};
export default IndexPage;
