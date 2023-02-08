
import HeadTag from "@/components/head";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

const IndexPage =()=> {
  return (
    <div className="body">
      <HeadTag/>
      <Header/>
      <h1 className="styles.h1">Red</h1>
    </div>
  )
};
export default IndexPage;
