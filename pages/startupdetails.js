import Header from "@/components/header";
import Head from "next/head";


const startupdetails =()=>{
    return(
        <>
        <Head/>
        <Header/>
        <div className="container d-flex  flex-column align-itmes-center justify-content-center mt-5">
            <h1 className="text-center">We’d love to collaborate! Let us know what you’re after.</h1>
            <div className="container d-flex align-itmes-center justify-content-center mt-5">
            <div className="container d-flex flex-column align-items-center">
                <span className="startup-count-cir rounded-circle d-flex align-items-center bg-primary  text-white justify-content-center c-fs-1">1</span>
                <span className="text-primary c-fs-2 ">Personal Info</span>
            </div>
            <div className="container d-flex flex-column align-items-center">
                <span className="startup-count-cir rounded-circle d-flex align-items-center justify-content-center text-primary c-fs-1">2</span>
                <span className="text-primary c-fs-2 ">Startup Info</span>
            </div>
            <div className="container d-flex flex-column align-items-center">
                <span className="startup-count-cir rounded-circle d-flex align-items-center justify-content-center text-primary c-fs-1">3</span>
                <span className="text-primary c-fs-2 ">Other Info</span>
            </div>
            </div>
        </div>
        </>

    );
};
export default startupdetails;