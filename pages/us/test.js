import { useState } from 'react'
import Head from 'next/head'

export default function Overlay() {


  return (
    <>
      <div class="dropdown show d-block d-md-none">
        <a
          class=" dropdown-toggle "
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="/terms-of-use">
            <span className="c-fs-3 text-primary">Terms</span>
          </a>
          <a class="dropdown-item" href="privacy-policy">
            <span className="c-fs-3 text-black">Privacy Policy </span>
          </a>
          <a href="gdpr">
            <span className="c-fs-3 text-black">GDPR</span>
          </a>
          <a href="refund-policy">
            <span className="c-fs-3 text-black">Refund Policy</span>
          </a>
          <a href="cookie-policy">
            <span className="c-fs-3 text-black">Cookie Policy</span>
          </a>
          <a href="startup-policy">
            <span className="c-fs-3 text-black">Startup Policy</span>
          </a>
          <a href="fair-using-policy">
            <span className="c-fs-3 text-black">Fair Pricing Policy</span>
          </a>
          <a href="no-spam">
            <span className="c-fs-3 text-black">NO Spam</span>
          </a>
        </div>
      </div>
    </>
  )
}
