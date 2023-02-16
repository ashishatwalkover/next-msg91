import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
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
      <div className=" c-bg-grey">
        <div className="container py-1 d-flex flex-md-row flex-column justify-content-md-between justify-content-start">
          <span className="c-fs-6">
            The New and Improved Version Awaits :)
          </span>
          <div className=" d-flex c-fs-5">
            <div className="d-flex  align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  className="align-items-center"
                  id="dropdown-custom-components"
                >
                  <MdLanguage /> India
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">US</Dropdown.Item>
                  <Dropdown.Item eventKey="2">UK</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    India
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Nepal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
