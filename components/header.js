      

import Link from "next/link";
import Image from "next/image";

const Header =()=> {
  return (
    <>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 header-c" >
      <ul class="nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 nav-c ">
        <li><Link class="nav-link px-2 "data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Products</Link></li>
        <li><Link href="#" class="nav-link px-2 ">Learning Center</Link></li>
        <li><Link href="#" class="nav-link px-2 ">Pricing</Link></li>

      </ul>
      <Link href="/" >
        <Image  src="/img/logo.svg" width={124} height={40}/>                      
      </Link>


      <div class="nav col-md-3 justify-content-end nav-c">

        <li><Link href="#" class="nav-link px-2 link-dark">API Documentations</Link></li>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div> 

    </header>

    </>


  )
};
export default Header;