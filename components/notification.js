import Image from "next/image";
const Notification = () => {
  return (
    <>
      <div
        class="d-flex justify-content-sm-between align-items-center notification"
        role="alert"
      >
        <div className="d-flex justify-content-sm-between align-items-center ">
          <button type="button" class="btn btn-success btn-sm">
            Small button
          </button>
          <p className="m-y-auto">New campaign version 2.0 is released</p>
        </div>
        <div className="d-flex justify-content-sm-between align-items-end notification-cont">
          <div className="d-flex  align-items-center p-r">
            <Image src="../img/language.svg" width={20} height={20} className="n-ico"/>
            <p className="m-y-auto">India</p>
            <Image src="../img/down.svg" width={20} height={20} className="n-ico"/>
          </div>
          <div className="d-flex  align-items-center">
            <Image src="/img/call.png" width={20} height={20} className="n-ico"/>
            <p className="m-y-auto">Support</p>
          </div>
          <div className="d-flex  align-items-center">
            <p className="m-y-auto">Sign In</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
