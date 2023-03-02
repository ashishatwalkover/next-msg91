import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
const startuptwo = () => {
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
            <span className="startup-count-cir rounded-circle d-flex align-items-center justify-content-center bg-white text-primary c-fs-1">
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
                Startup Name
              </label>
              <input
                type="text"
                class="form-control"
                id="startup-name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 input-box">
              <label for="emailid" class="form-label c-fs-2">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                id="date"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div class="d-flex input-box-cont justify-content-between">
            <div class="mb-3 input-box">
              <label for="yourrelo" class="form-label c-fs-2">
                Registered Name
              </label>
              <input
                type="text"
                class="form-control"
                id="registered-name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 d-flex justify-content-between input-box">
              <div class="mb-3 input-box">
                <label for="contact-number" class="form-label c-fs-2">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 input-box">
                <label for="contact-number" class="form-label c-fs-2">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="contact-number"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <div class="d-flex input-box-cont justify-content-between">
            <div class="mb-3 input-box">
              <label for="name" class="form-label c-fs-2">
                Registered Address
              </label>
              <input
                type="text"
                class="form-control"
                id="startup-name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 input-box">
              <label for="emailid" class="form-label c-fs-2">
                Country
              </label>
              <input
                type="text"
                class="form-control"
                id="emailid"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div class="d-flex input-button-cont justify-content-between">
            <button type="submit" class="btn btn-outline-primary c-fs-4 ">
             <MdChevronLeft className='c-fs-2'/> Back
            </button>
            <button type="submit" class="btn btn-primary c-fs-4">
              Submit <MdChevronRight className='c-fs-2'/>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default startuptwo;
