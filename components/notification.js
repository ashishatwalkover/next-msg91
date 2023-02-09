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
          <p className="m-y-auto">Campaign version 2.0 released</p>
        </div>
        <div className="d-flex justify-content-sm-between align-items-end notification-cont">
          <div className="d-flex  align-items-center p-r">
            <MdLanguage/>
            <p className="m-y-auto">India</p>
            <Image
              src="../img/down.svg"
              width={20}
              height={20}
              className="n-ico"
            />
          </div>
          <div className="d-flex  align-items-center">            
            <MdCall/>
            <p className="m-y-auto">Support</p>
          </div>
          <div className="d-flex  align-items-center">
            <p className="m-y-auto">LOG IN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
