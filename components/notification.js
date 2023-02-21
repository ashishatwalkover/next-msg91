import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import $ from 'jquery';
const Notification = () => {
  useEffect(() => {
    $( "#change-country a" ).on( "click", function() {
      var label = $(this).text();
      $( "#change-country label").html(label);
    });
  }, []);
  return (
    <>
      <div className="px-0 px-md-5 c-bg-grey">
        <div className="px-3 px-md-5 py-1 d-flex flex-md-row flex-column justify-content-md-between justify-content-start">
          <span className="c-fs-6">
            The New and Improved Version Awaits :)
          </span>
          <div className=" d-flex c-fs-5">
            <div className="d-flex  align-items-center">              
              <div className="dropdown" id="change-country">
                <button className="btn btn-link dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <MdLanguage /> <label>India</label>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/" className="dropdown-item">Global</Link></li>
                  <li><Link href="/in" className="dropdown-item">India</Link></li>
                  <li><Link href="/us" className="dropdown-item">United States</Link></li>                  
                </ul>
              </div>
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
