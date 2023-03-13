const SeccondFooter =()=>{
    return(
        <>
        <div className="mx-auto col-12  my-5 p-0 p-lg-5  d-flex flex-column justify-content-sm-center align-items-center">
            <div className=" c-bg-grey  p-3 p-lg-5  container text-center d-md-flex justify-content-sm-between align-items-center flex-xl-row flex-lg-column flex-sm-column flex-md-column"> 
                <span className="small-heading ">Experience The Awesomeness</span>
                <div className="mt-3 mt-lg-0">
                    <a href="/pricing"><button className="btn btn-outline-primary my-1 c-fs-4 mx-2"> See pricing</button></a>
                   <a target="_blank"
                href="https://control.msg91.com/signup/" ><button className="btn btn-primary ms-lg-4 my-1 c-fs-4 mx-2"> Get started for free</button></a>
                </div>
            </div>
            <div className=" mt-5  d-flex flex-column align-items-center text-center justify-content-center mx-2">
                <p className="c-fs-3 my-2">Have More Questions? We’re always here to help you!</p>
                <button className="btn btn-outline-primary px-3 py-2 c-fs-4 mx-auto">Talk to Sales</button>
            </div>
              
            </div>
        </>

    );
};
export default SeccondFooter;
