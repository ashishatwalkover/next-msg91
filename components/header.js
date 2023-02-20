import Link from "next/link";
import { useEffect } from "react";
import ProductMenu from "@/components/productmenu";
import LearningCenter from "@/components/learning_center";

const Header = () => {
  useEffect(() => {
    const productMenu = document.getElementById("product-menu");
    const learningCenter = document.getElementById("learning-center");
    const menuBackdrop = document.getElementById("menu-backdrop");
    const linkProducts = document.getElementById("link-products");
    const linkLearning = document.getElementById("link-learning");
    const body = document.getElementsByTagName("body")[0];

    const showNav = (e) => {
      productMenu.classList.add("active");
      learningCenter.classList.remove("active");
      menuBackdrop.classList.add("active");
      body.classList.add("oh");
    }
    linkProducts.addEventListener('mouseover', showNav);

    const showLearningCenter = (e) => {
      learningCenter.classList.add("active");
      menuBackdrop.classList.add("active");
      body.classList.add("oh");
    }
    linkLearning.addEventListener('mouseover', showLearningCenter);

    const hideMenu = (e) => {
      productMenu.classList.remove("active");
      menuBackdrop.classList.remove("active");
      learningCenter.classList.remove("active");
      body.classList.remove("oh");
    }
    menuBackdrop.addEventListener('mouseover', hideMenu);

  }, []);

  return (
    <div className="px-0 px-md-5">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand m-auto d-lg-none d-block" href="#"><img src="/img/logo.svg" alt="msg91" /></a>
          <button type="button" className="btn btn-primary c-fs-4 d-lg-none d-block">Sign UP</button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav product-navbar">
              <a className="nav-link c-fs-4 c-fw-r" href="#" id="link-products">Products <span className="sr-only">(current)</span></a>
              <a className="nav-link c-fs-4 c-fw-r" href="#" id="link-learning">Learning Center</a>
              <Link href="/pricing" className="nav-link c-fs-4 c-fw-r" id="link-pricing">Pricing</Link>
            </div>
            
            <Link className="navbar-brand m-auto" href="/"><img className=" d-lg-block d-none" src="/img/logo.svg" alt="MSG91" /></Link>
            
            <div className="navbar-nav product-navbar d-none d-lg-flex">
              <a className="nav-link c-fs-4 c-fw-r" href="#products">API Documentations</a>            
              <a className="c-fs-4 c-fw-r btn btn-primary c-fs-4" href="#products">Sign Up</a>                          
            </div>
          </div>                    
        </div>
      </nav>

      <ProductMenu />
      <LearningCenter />
      <div id="menu-backdrop"></div>
    </div>
  )
};
export default Header;