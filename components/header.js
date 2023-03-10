import Link from "next/link";
import { useEffect, useState } from "react";
import ProductMenu from "@/components/productmenu";
import LearningCenter from "@/components/learning_center";
import $ from "jquery";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import Mininav from "./mininav";
//import Airtable from "airtable";
const Header = () => {
  //airtable
  /*   const [data, setData] = useState();
  let base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_Airtable_Auth_Key,
  }).base(process.env.NEXT_PUBLIC_Base_Auth_Key);
  var productData = "";
  base("msgone")
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          productData = record.get("product");
        });
        fetchNextPage();
        return productData;

      }      
    ); */

    const [showOverlay, setShowOverlay] = useState(false)

  const toggleOverlay = () => {
    setShowOverlay(true);
    // setShowOverlay(!showOverlay)
  }


  useEffect(() => {
    $("#link-products").on("mouseenter", function () {
      $("#product-menu, #menu-backdrop").addClass("active");
      $("body").addClass("oh");
      $("#learning-center").removeClass("active");
    });

    $("#link-learning").on("mouseenter", function () {
      $("#learning-center, #menu-backdrop").addClass("active");
      $("body").addClass("oh");
    });

    $("#menu-backdrop").on("mouseenter", function () {
      $("#product-menu, #learning-center, #menu-backdrop").removeClass(
        "active"
      );
      $("body").removeClass("oh");
    });

    $("#product-menu, #learning-center").on("click", function () {
      $("body").removeClass("oh");
    });
  }, []);

  const router = useRouter();
  var path = router.pathname.split("/")[1];
  path = path.length == 2 ? "/" + path : "";
  var home = path.length ? path : "/";
  return (
    <>
    {showOverlay== true?<Mininav setFalse={setShowOverlay}/>:""}
{/* <----------------------------------> */}
      
    <div className="px-2  px-md-5" id="menu-wrp">
      <nav className="navbar px-0 px-xl-5 navbar-expand-lg bg-body-tertiary c-fs-3">
        <div className=" w-100 ">
          <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
            <span
              className=" w-25 "
            >
              <span className="d-flex align-items-center justify-content-start"
              onClick={toggleOverlay}
              >

              <GiHamburgerMenu/>
              </span>
              
            </span>
            <Link className="navbar-brand d-block d-lg-none" href={`${home}`}>
              <img className=" nav-logo" src="/img/logo.svg" alt="MSG91" />
            </Link>
            <span className="w-25 d-flex c-fs-5 d-block d-lg-none">
              <button className="ms-auto btn btn-sm  btn-outline-primary">
              Login</button>
            </span>
          </div>
          <div
            className="collapse w-100 navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav px-3 product-navbar navbar-w">
              <a
                className="nav-link c-fs-3 c-fw-r d-lg-block d-none"
                href="#"
                id="link-products"
              >
                Products <span className="sr-only"></span>
              </a>
              <a
                className="nav-link c-fs-3 c-fw-r d-lg-block d-none"
                href="#"
                id="link-learning"
              >
                Learning Center
                {/* {productData} */}
              </a>
              <Link
                href="/pricing"
                className="nav-link c-fs-3 c-fw-r d-lg-block d-none"
                id="link-pricing"
              >
                Pricing
              </Link>
            </div>

            <Link className="navbar-brand m-auto" href={`${home}`}>
              <img
                className=" d-lg-block d-none"
                src="/img/logo.svg"
                alt="MSG91"
              />
            </Link>

            <div className="navbar-nav justify-content-end navbar-w product-navbar align-items-center d-lg-flex">
              <a
                className="nav-link c-fs-3 c-fw-r d-lg-block d-none"
                target="_blank"
                href="https://docs.msg91.com/reference/send-sms"
              >
                API Documentations
              </a>
              <a
                className=" btn c-fs-5 btn-primary  d-lg-block d-none"
                target="_blank"
                href="https://control.msg91.com/signup/"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ProductMenu />
      <LearningCenter />
      <div id="menu-backdrop"></div>
    </div>
    </>
  );
};
export default Header;
