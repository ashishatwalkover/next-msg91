import HeadTag from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";


const startup =()=>{
    return(
        <>
        <HeadTag />
        <Header/>
        <div className="container d-flex justify-content-between">
            <div className="">
                <h1 className="heading">Expand your Vision with Us</h1>
                <p className="c-fs-1">Get a complimentary communication API package for every product Startup.</p>
                <button className="btn btn-primary c-fs-3">Apply Now</button>
            </div>
            <img className="startup-home-img" src="/img/startup-home-img.png"/>
        </div>
        <section className="c-bg-grey p-5 text-center small-heading">"Today we help you, tomorrow we can can change the world together."</section>
        <Footer/>
        </>

    );
    
};
export default startup;