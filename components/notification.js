import Image from "next/image";
import { MdLanguage, MdCall } from "react-icons/md";

const Notification = () => {
  return (
    <>
      <div className="container-fluid c-bg-grey">
        <div
          className="container d-flex justify-content-sm-between align-items-center c-bg-grey notification"
          role="alert"
        >
          <div className="d-flex justify-content-sm-between align-items-center ">
            <span className="badge badge-pill badge-dark">New</span>
            <span className="m-y-auto">Campaign version 2.0 released</span>
          </div>
          <div className="d-flex justify-content-sm-between align-items-end notification-cont">
            <div className="d-flex  align-items-center">
              <MdLanguage />
              <div class="dropdown">
                <span
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  India
                </span>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </div>
              </div>
             
            </div>
            <div className="d-flex  align-items-center">
              <MdCall />
              <span className="m-y-auto">Support</span>
            </div>
            <div className="d-flex  align-items-center">
              <span className="m-y-auto">LOG IN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
