
import TrustedSec from "@/components/trusted_by";



const hello = (props) => {
  const data = props.datajson;

  // const getData = async() =>{
  //   const response = await axios.get('https://api.airtable.com/v0/appc4wGbR2QjI3yFC/msgone', {
  //       headers: {
  //           'Authorization': 'Bearer pat1bRfY2UL5uouDk.b8baed91ed949d0998455969a115b213c864a533014928999f00a82de5d1dc44'
  //       }
  //     });
  //     // console.log(response?.data?.records)
  // }
  // getData();

  // console.log(data);
  return (
    <>
      <div className="container text-center  overflow-hidden ">
        <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <img src="../img/hello.svg" className="product-page-logo" />
            <h1 className="heading">Hello</h1>
          </div>

          <p className="c-fs-4 text-uppercase col-hello c-ls-20 mx-auto">
            {data?.hello?.smallheading}
          </p>
          <h2 className="small-heading px-3 w-md-75 w-100 mx-auto">
            {data?.hello?.tagline}
          </h2>
          <button className="btn btn-primary btn-lg mt-3 c-fs-2" type="button">
            Get started for Free
          </button>
        </div>
          <TrustedSec />
        <img
          src={data?.hello?.pageimg}
          className="img-fluid product-page-img mx-auto"
          alt="#"
        />
      </div>

      <div className=" c-bg-grey  px-sm-0 d-flex flex-column justify-content-center justift-content-sm-start section ">
        <span className="container sub-heading c-ff-h  pt-4 pt-md-0">Features</span>

        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.hello?.features?.one?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.hello?.features?.one?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.hello?.features?.one?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.hello?.features?.two?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.hello?.features?.two?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.hello?.features?.two?.content}
            </span>
          </div>
        </div>
        <div className="container flex-column d-flex flex-md-row-reverse align-items-center justify-content-between mb-5">
          <div className="  col-12 col-md-7 d-flex">
            <img
              src={data?.hello?.features?.three?.img}
              className="feature-img ms-auto"
            />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column ">
            <span className="c-fs-2 c-fw-m ">
              {data?.hello?.features?.three?.heading}
            </span>
            <span className="c-fs-3  mt-3">
              {data?.hello?.features?.three?.content}
            </span>
          </div>
        </div>
      
      </div>

      <div className="section mx-0 mx-md-5 mt-5 pt-4 pt-md-0">
        <span className="sub-heading px-3 ">More features</span>
        <div className="w-100 d-flex flex-column flex-md-row my-2">
          <div className="container d-flex flex-column justify-content-center align-items-flex-start col-lg-6 mt-2 px-3">
            <span className="c-fs-3">- {data?.hello?.morefeatures?.one}</span>
            <span className="c-fs-3 mt-1">
              - {data?.hello?.morefeatures?.two}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.hello?.morefeatures?.three}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.hello?.morefeatures?.four}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.hello?.morefeatures?.five}
            </span>
            <span className="c-fs-3 mt-1">
              - {data?.hello?.morefeatures?.six}
            </span>
          </div>
          <div className="col-12 col-md-6  my-auto mt-3  px-0 px-md-3  d-flex py-5 c-bg-grey flex-column flex-lg-row justify-content-center">
            <span className="c-fs-2 c-ff-h mx-auto">Looking for more?</span>
            <div className="mx-auto py-4 py-lg-0 ">

            <button className=" d-flex  btn btn-outline-primary c-fs-4 ms-0 ms-md-3 mt-3 mt-md-0">
              {" "}
              Request a Feature
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
                >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
              </svg>
            </button>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hello;
