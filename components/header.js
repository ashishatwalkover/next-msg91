import Link from "next/link";
import { useEffect } from "react";
import ProductMenu from "@/components/productmenu";
import LearningCenter from "@/components/learning_center";
import $ from 'jquery'

const Header = () => {
  useEffect(() => {
    $( "#link-products" ).on( "mouseenter", function() { console.log('products');
      $("#product-menu, #menu-backdrop").addClass("active");
      $("body").addClass("oh");
      $("#learning-center").removeClass("active");
    });
    
    $( "#link-learning" ).on( "mouseenter", function() {
      $("#learning-center, #menu-backdrop").addClass("active");
      $("body").addClass("oh");      
    });    
    
    $( "#menu-backdrop" ).on( "mouseenter", function() {
      $("#product-menu, #learning-center, #menu-backdrop").removeClass("active");      
      $("body").removeClass("oh");      
    });
        
    $( "#product-menu a" ).on( "click", function() {
      $("body").removeClass("oh");
    });
  }, []);

  return (
    <div className="px-0    px-md-5">

      <nav className="navbar px-0 px-md-4 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand m-auto d-lg-none d-block" href="#"><img src="/img/logo.svg" alt="msg91" /></a>
          <button type="button" className="btn btn-primary c-fs-4 d-lg-none d-block">Sign UP</button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-w product-navbar">
              <a className="nav-link c-fs-4 c-fw-r" href="#" id="link-products">Products <span className="sr-only"></span></a>
              <a className="nav-link c-fs-4 c-fw-r" href="#" id="link-learning">Learning Center</a>
              <Link href="/pricing" className="nav-link c-fs-4 c-fw-r" id="link-pricing">Pricing</Link>
            </div>
            
            <Link className="navbar-brand m-auto" href="/"><img className=" d-lg-block d-none" src="/img/logo.svg" alt="MSG91" /></Link>
            
            <div className="navbar-nav justify-content-end navbar-w product-navbar d-none d-lg-flex">
              <a className="nav-link c-fs-4 c-fw-r" href="#products">API Documentations</a>            
              <button className=" btn  c-fs-4 btn-primary " href="#products">Sign Up</button>                          
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