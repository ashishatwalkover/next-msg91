import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
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
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

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
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

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
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  <MdLanguage /> India
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
