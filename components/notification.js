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
      <div className="px-0 px-md-5 c-bg-grey">
        <div className="px-3 px-md-5 py-1 d-flex flex-md-row flex-column align-items-start   align-items-md-center  justify-content-md-between justify-content-start">
          <p className="c-fs-6 ">
            The New and Improved Version Awaits :)
          </p>
          <div className=" text-dark d-flex c-fs-5">
            <div className="d-flex  align-items-center">              
              <div className="dropdown" id="change-country">
                <button className="btn btn-link dropdown-toggle btn-sm text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <MdLanguage /> <label>{country}</label>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/" className="dropdown-item">Global</Link></li>
                  <li><Link href="/in" className="dropdown-item">India</Link></li>
                  <li><Link href="/ph" className="dropdown-item">Philippines</Link></li>
                  <li><Link href="/sg" className="dropdown-item">Singapore</Link></li>
                  <li><Link href="/es" className="dropdown-item">Spain</Link></li>
                  <li><Link href="/ae" className="dropdown-item">United Arab Emirates</Link></li>
                  <li><Link href="/uk" className="dropdown-item">United Kingdom</Link></li>
                  <li><Link href="/us" className="dropdown-item">United States</Link></li>
                  
                </ul>
              </div>
            </div>
            <span className="ms-5 align-items-center d-flex"><MdCall /><a href="#" className="text-dark">Support</a></span>
            <span className="ms-5 align-items-center d-flex"><a href="#"className="text-dark">Log In</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;