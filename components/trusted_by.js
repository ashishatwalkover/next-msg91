const Trustedsec = () => {
  return (
    <>
      <div className="my-3 d-flex flex-column align-items-center justify-content-center col-12">
        <span className="c-fs-4 mb-2">Trusted by 30,000+ Businesses</span>
        <div className="my-3 col-10 col-sm-8 d-flex  justify-content-between">
          <img 
          src={"/img/ixigo.svg"} 
          alt="#" 
          width={51} 
          height="24" />
          <img
            src={"/img/unacademy.svg"}
            alt="#"
            width={161}
            height="24"
            className=""
          />
          <img
            src={"/img/indeed.svg"}
            alt="#"
            width={89}
            height="24"
            className="ms-4 mb-2 d-none d-sm-block"
          />
        </div>
      </div>
    </>
  );
};
export default Trustedsec;
