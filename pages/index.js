
import HeadTag from "@/components/head";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

const IndexPage =()=> {
  return (
    <div>
      <HeadTag/>
      <Header/>
      
      <div class="text-center py-5">
        <h1 class="fw-bold heading">Cloud communication platform</h1>
        <p class="sub-heading">Customer conversation, segmentation, verification, notification. The All-In-One CPaaS Platform.</p>
        <button class="btn btn-primary btn-lg" type="button">Get started for Free</button>
      </div>

    </div>
  )
};
export default IndexPage;
