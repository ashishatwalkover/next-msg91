import HeadTag from "./head";
import Header from "@/components/header";
import Footer from "@/components/footer";
const partners = () => {
  return (
    <>
      <HeadTag />
      <Header />

      <div className="container text-center  overflow-hidden ">
        <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h1 className="heading">Integrations & Add-ons</h1>
          </div>
          <h2 className="small-heading px-3 w-md-75 w-100 mx-auto">
            Add-ons that enable SMS notifications in your application with a
            single click.
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get your API key
          </button>
        </div>
      </div>
      <section className="w-100 py-5 c-bg-grey">
        <div className="text-center">
          <h2 className="sub-heading">
            MSG91 Add-ons for your preferred Platform
          </h2>
          <p className="c-fs-3">
            Note – For paid plugins you will receive free credits, depending on
            the policy.
          </p>
        </div>
        <div className="container mt-5 text-center">
          <h2 className="small-heading">
            Don’t see the Add-on or Plugin you are looking for?
          </h2>
          <div className="col-12">
            <div className="col-12">
              <h3>Why Build MSG91 Plugins?</h3>
              <div className="">
                <span className="">c</span>
                <span className="">
                  All the revenues on the plugin will be yours and it will be
                  your plugin.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default partners;
