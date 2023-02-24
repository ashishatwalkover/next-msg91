
const errorPage=()=>{
    return(
        <>
        <div className="pageerror w-100 d-flex c-bg-grey">
            <div className="m-auto d-flex flex-column flex-lg-row"> 
            <div className="d-flex flex-column justify-content-center me-5">
                <h1 className="c-fs-1 c-ff-b">ERROR 404</h1>
                <p className="c-fs-4 mt-2">The page you are looking for, Dosen't Exist.</p>
                <button href="/" className="btn btn-primary px-4 py-1 c-fs-4 mt-4 w-50">Go to Home</button>
            </div>
            <img src="/img/error-page-gif.gif" className="error-page-gif mt-5 mt-lg-0"/>
            </div>
        </div>
        </>

    );
};
export default errorPage;