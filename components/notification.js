import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState } from "react";
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          data-netlify="true"
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const Notification = () => {
  return (
    <>
      <div className="px-0 px-md-5 c-bg-grey">
        <div className="px-3 px-md-5 py-1 d-flex flex-md-row flex-column justify-content-md-between justify-content-start">
          <span className="c-fs-6">
            The New and Improved Version Awaits :)
          </span>
          <div className=" d-flex c-fs-5">
            <div className="d-flex  align-items-center">
              <MdLanguage /> India              
            </div>
            <span className="ms-5"><MdCall /><a href="#">Support</a></span>
            <span className="ms-5"><a href="#">Log In</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
