const startupthree = () => {
  return (
    <>
      <div className="container d-flex flex-column  justify-content-center">
        <div className="container d-flex align-itmes-center justify-content-center mt-5">
          <div className="container d-flex flex-column align-items-center">
            <span className="startup-count-cir rounded-circle d-flex align-items-center bg-primary  text-white justify-content-center c-fs-1">
              1
            </span>
            <span className="text-primary c-fs-2 ">Personal Info</span>
          </div>
          <div className="container d-flex flex-column align-items-center">
            <span className="startup-count-cir rounded-circle d-flex align-items-center justify-content-center text-white bg-primary c-fs-1">
              2
            </span>
            <span className="text-primary c-fs-2 ">Startup Info</span>
          </div>
          <div className="container d-flex flex-column align-items-center">
            <span className="startup-count-cir rounded-circle d-flex align-items-center justify-content-center text-white bg-primary c-fs-1">
              3
            </span>
            <span className="text-primary c-fs-2 ">Other Info</span>
          </div>
        </div>
        <span className="startup-count-line mx-auto" />
      </div>

      <div className="container d-flex flex-column">
        <form className="startup-form w-50 mx-auto mt-5 ">
          <div class="d-flex input-box-cont justify-content-between">
            <div class="mb-3 input-box">
              <label for="name" class="form-label c-fs-2">
                Associated Company
              </label>
              <input
                type="text"
                class="form-control"
                id="associated-company"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 input-box">
              <label for="emailid" class="form-label c-fs-2">
                Association Type
              </label>
              <input
                type="text"
                class="form-control"
                id="association-type"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div class="d-flex input-box-cont justify-content-between">
            <div class="mb-3 input-box">
              <label for="yourrelo" class="form-label c-fs-2">
                Incubator’s email
              </label>
              <input
                type="email"
                class="form-control"
                id="yourrole"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 input-box">
              <label for="contact-number" class="form-label c-fs-2">
                Select Service
              </label>
              <input
                type="text"
                class="form-control"
                id="select-service"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div class="d-flex input-box-cont justify-content-between">
            <button type="submit" class="btn btn-outline-primary ">
              Back
            </button>
            <button type="submit" class="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default startupthree;
