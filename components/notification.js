import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import $ from 'jquery';
import { useRouter } from 'next/router';
import countries from 'components/countries.json';
import { InlineWidget } from "react-calendly";

const Notification = () => {
  const router = useRouter();
  var path = router.pathname.split("/")[1];
  var country = 'Global';
  for (let x in countries) {    
    if (path.toUpperCase() === countries[x].abbreviation) {
      country = countries[x].country;
      break;
    }
  }
  useEffect(() => {
    $("#change-country a").on("click", function () {
      var label = $(this).text();
      $("#change-country label").html(label);
    });
  }, []);
  return (
    <>
      <div className="px-2 px-md-5 c-bg-grey c-fs-4">
        <div className="px-0 px-xl-5 py-1">
          <div className="px-3 d-flex flex-md-row flex-column align-items-start   align-items-md-center  justify-content-md-between justify-content-start">
            <p className="c-fs-4">
              The New and Improved Version Awaits :)
            </p>
            <div className=" text-dark d-flex  ">
              <div className="d-flex  align-items-center">
                <div className="dropdown" id="change-country">
                  <button className="btn btn-link dropdown-toggle btn-sm text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <label className="c-fs-4">{country}</label>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link href="/" className="dropdown-item c-fs-4">Global</Link></li>
                    <li><Link href="/in" className="dropdown-item c-fs-4">India</Link></li>
                    <li><Link href="/ae" className="dropdown-item c-fs-4">United Arab Emirates</Link></li>
                    <li><Link href="/ph" className="dropdown-item c-fs-4">Philippines</Link></li>
                    <li><Link href="/sg" className="dropdown-item c-fs-4">Singapore</Link></li>
                    <li><Link href="/es" className="dropdown-item c-fs-4">Spain</Link></li>
                    <li><Link href="/uk" className="dropdown-item c-fs-4">United Kingdom</Link></li>
                    <li><Link href="/us" className="dropdown-item c-fs-4">United States</Link></li>

                  </ul>
                </div>
              </div>
              <span className="ms-5 align-items-center d-flex"><MdCall /><a href="/contact-us"  className="text-dark ms-1">Contact Us</a></span>
              <span className="ms-5 align-items-center d-flex"><a href="https://control.msg91.com/signin/" target="_blank" className="text-dark">Log In</a></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="modal fade" id="support-modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">            
            <div className="modal-body">
              <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
              <ul className="d-flex justify-content-center nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Sales</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Support</button>
                </li>                
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">                  
                  <InlineWidget url="https://calendly.com/sales-msg91/pre-sales" />
                 
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <InlineWidget url="https://calendly.com/support--msg91" />
                </div>                
              </div>
            </div>            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Notification;