const Trustedsec = () => {
  return (
    <>
      <div className="my-3 d-flex flex-column align-items-center justify-content-center col-12">
        <span className="c-fs-4 mb-2">Trusted by 30,000+ Businesses</span>
        <div className="my-3 col-10 d-flex  gap-5 justify-content-center">
          <img 
          src={"/img/trusted/ixigo.svg"} 
          alt="#" 
          className="trusted-by-logo d-none d-sm-block"/>
          
          <img
            src={"/img/trusted/unacademy.svg"}
            alt="#"
            className="trusted-by-logo "
          />
          <img
            src={"/img/trusted/indeed.svg"}
            alt="#"
           
            className=" trusted-by-logo d-none d-lg-block"
          />
          <img
            src={"/img/trusted/dream11.svg"}
            alt="#"
           
            className=" trusted-by-logo   d-none d-md-block"
          />
          <img
            src={"/img/trusted/housing.svg"}
            alt="#"
           
            className=" trusted-by-logo  "
          />
        </div>
      </div>
    </>
  );
};
export default Trustedsec;
