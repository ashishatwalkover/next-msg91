      

import Link from "next/link";
import Image from "next/image";

const Header =()=> {
  return (
    <>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 header-c" tabindex="-1" >
      <ul className="nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 nav-c z-i-1046">
        <li><Link className="nav-link px-2 " href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Products</Link></li>
        <li><Link className="nav-link px-2 " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas-Learning">Learning Center</Link></li>
        <li><Link href="#" className="nav-link px-2 ">Pricing</Link></li>
      </ul>

      <Link href="/" >
        <Image  src="/img/logo.svg" width={124} height={40}/>                      
      </Link>

      <div className="nav col-md-3 justify-content-end nav-c">
        <li><Link href="#" className="nav-link px-2 link-dark">API Documentations</Link></li>
        <button type="button" className="btn btn-primary ">SIGN UP</button>
      </div> 

    </header>

    </>


  )
};
export default Header;