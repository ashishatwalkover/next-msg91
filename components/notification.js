import { MdLanguage, MdCall } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import $ from 'jquery';
import { useRouter } from 'next/router';
import countries from 'components/countries.json';

const Notification = () => {
  const router = useRouter();  
  var path = router.pathname.split("/")[1]; 
  var country = 'Global';
  for(let x in countries){
    if(path.toUpperCase() === x){
      country = countries[x];
      break;
    }
  }
  useEffect(() => {
    $( "#change-country a" ).on( "click", function() {
      var label = $(this).text();
      $( "#change-country label").html(label);
    });
  }, []);
  return (
    <>
      <div className="px-0 px-md-5 c-bg-grey c-fs-4">
        <div className="px-0 px-xl-5 py-1">
          <div className="px-3 d-flex flex-md-row flex-column align-items-start   align-items-md-center  justify-content-md-between justify-content-start">
            <p className="c-fs-4">
              The New and Improved Version Awaits :)
            </p>
            <div className=" text-dark d-flex  ">
              <div className="d-flex  align-items-center">              
                <div className="dropdown" id="change-country">
                  <button className="btn btn-link dropdown-toggle btn-sm text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MdLanguage /> <label className="c-fs-4">{country}</label>
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
              <span className="ms-5 align-items-center d-flex"><MdCall /><a href="#" className="text-dark">Support</a></span>
              <span className="ms-5 align-items-center d-flex"><a href="#"className="text-dark">Log In</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;