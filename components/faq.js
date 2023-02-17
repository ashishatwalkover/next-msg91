import Link from "next/link";
const FaqSection = () => {
  return (
    <>
      <div className="accordion container col-lg-8 col-12 my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header " id="headingOne">
            <button
              className="accordion-button c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the communication APIs?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              Built for the communications space, communication APIs define
              rules of the possible interactions between servers and
              communication applications. They also function as the
              communication layer between applications and databases. Easy
              integrations and cost effective solutions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How MSG91 is evolving as a CPaaS leader?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body c-fs-4 c-ff-b c-fw-r">
              Founded in 2010, MSG91 over the years has built a robust product
              portfolio of communication services over a broad set of APIs, all
              available in off-the-shelf modules. We thrive on innovation and
              ease-of-use by constantly upgrading services and features to our
              core offerings making MSG91 one of the most feature-rich CPaaS
              platforms.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              I'm already using other services. How do I switch to your
              solution?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  c-fs-4 c-ff-b c-fw-r">
              You can switch in just a few steps, you need to create your
              account with MSG91. Our Support Superheroes will help you in the
              integration process. You can also refer migration guides to ease
              out the process.
            </div>
          </div>
        </div>
        <Link
          href="#"
          className=" c-fs-4 btn btn-link text-decoration-none py-2 px-3 mx-auto"
        >
          Request a Feature
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right ms-3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
      </div>

    </>
  );
};
 export default FaqSection;