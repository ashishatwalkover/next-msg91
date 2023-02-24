import Link from "next/link";
import { useEffect } from "react";
import ProductMenu from "@/components/productmenu";
import LearningCenter from "@/components/learning_center";
import $ from "jquery";
import { useRouter } from "next/router";
import {GiHamburgerMenu} from "react-icons/gi"
import {MdLogin} from "react-icons/md"

const Header = () => {
  useEffect(() => {
    $("#link-products").on("mouseenter", function () {
      console.log("products");
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

    $("#menu-wrp a").on("click", function () {
      $("body").removeClass("oh");
    });
  }, []);

  const router = useRouter();
  var path = router.pathname.split("/")[1];
  path = path.length == 2 ? "/" + path : "";
  var home = path.length ? path : "/";
  return (
    <div className="px-2  px-md-5" id="menu-wrp">
      <nav className="navbar px-0 px-xl-5 navbar-expand-lg bg-body-tertiary c-fs-3">
        <div className=" w-100 ">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <span
              class="navbar-toggler outline-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu/>
            </span>
            <Link className="navbar-brand d-block d-lg-none" href={`${home}`}>
              <img className=" nav-logo" src="/img/logo.svg" alt="MSG91" />
            </Link>
            <span className="c-fs-1 d-block d-lg-none">
            <MdLogin />
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
                href="#products"
              >
                API Documentations
              </a>
              <button
                className=" btn c-fs-5 btn-primary  d-lg-block d-none"
                href="#products"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ProductMenu />
      <LearningCenter />
      <div id="menu-backdrop"></div>
    </div>
  );
};
export default Header;
