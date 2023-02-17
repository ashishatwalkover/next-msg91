const faqSection = () => {
  return (
    <>
      <div class="accordion container col-8 " id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header " id="headingOne">
            <button
              class="accordion-button c-fs-4 c-ff-b c-fw-m"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body c-fs-4 c-ff-b c-fw-r">
              Built for the communications space, communication APIs define
              rules of the possible interactions between servers and
              communication applications. They also function as the
              communication layer between applications and databases. Easy
              integrations and cost effective solutions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body c-fs-4 c-ff-b c-fw-r">
              Founded in 2010, MSG91 over the years has built a robust product
              portfolio of communication services over a broad set of APIs, all
              available in off-the-shelf modules. We thrive on innovation and
              ease-of-use by constantly upgrading services and features to our
              core offerings making MSG91 one of the most feature-rich CPaaS
              platforms.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed  c-fs-4 c-ff-b c-fw-m"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body  c-fs-4 c-ff-b c-fw-r">
              You can switch in just a few steps, you need to create your
              account with MSG91. Our Support Superheroes will help you in the
              integration process. You can also refer migration guides to ease
              out the process.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 export default faqSection;