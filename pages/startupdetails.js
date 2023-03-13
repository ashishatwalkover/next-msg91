import Header from "@/components/header";
import Head from "next/head";
import Footer from "@/components/footer";
import Startupone from "@/components/startup-one";
import Startuptwo from "@/components/startup-two";
import Startupthree from "@/components/startup-three";

const startupdetails = () => {
  return (
    <>
      <Head />
      <Header />
      <div className="container d-flex  flex-column align-itmes-center justify-content-center my-5">
        <h1 className="text-center">
          We’d love to collaborate! Let us know what you’re after.
        </h1>
        <Startupone />
        <Startuptwo />
        <Startupthree />
      </div>
      <Footer />
    </>
  );
};
export default startupdetails;
