import Trustedsec from "@/components/trusted_by";
const partnerprogram =()=>{
    return(
        <>
        <div className="container d-flex flex-column align-items-center justify-content-center pt-5 my-5">
            <h1 className="heading">MSG91 Partner Program</h1>
            <p className="c-fs-1 mt-3 text-center w-50">Leverage your communication tactics with the MSG91 CPaaS solution</p>
            <button className="btn btn-primary c-fs-3 mt-3 mb-5">Apply Now</button>
        <Trustedsec className=""/>
        </div>
        <section className="section c-bg-grey">
            <div className="container">
                <h2 className="sub-heading">Partnership Solutions</h2>
                <div className="">
                    <div >
                        <h3 className=" c-fs-2">Integration Partnership</h3>
                        <p className="c-fs-4">If you are a CRM solution, marketing platform, e-commerce builder, or any other SaaS product, You can integrate MSG91 in your platform to enable communication across channels like WhatsApp, Text SMS, Email, Voice, RCS, Telegram etc from right within. As an added perk, you will also be featured here.</p>
                        
                    </div>
                    <img className="" src="/img/integration-partnership-img.svg"></img>

                </div>
            </div>
        </section>

        </>

    );
};
export default partnerprogram;