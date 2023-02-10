import Image from "next/image";
import { MdLanguage, MdCall } from "react-icons/md";

const Notification = () => {
  return (
    <>
      <div
        class="d-flex justify-content-sm-between align-items-center notification"
        role="alert"
      >
        <div className="d-flex justify-content-sm-between align-items-center ">
        <span class="badge badge-pill badge-dark">New</span>
          <span className="m-y-auto">Campaign version 2.0 released</span>
        </div>
        <div className="d-flex justify-content-sm-between align-items-end notification-cont">
          <div className="d-flex  align-items-center p-r">
            <MdLanguage/>
            <span className="m-y-auto">India</span>
            <Image
              src="../img/down.svg"
              width={20}
              height={20}
              className="n-ico"
            />
          </div>
          <div className="d-flex  align-items-center">            
            <MdCall/>
            <span className="m-y-auto">Support</span>
          </div>
          <div className="d-flex  align-items-center">
            <span className="m-y-auto">LOG IN</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
