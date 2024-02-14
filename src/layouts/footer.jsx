import React from 'react';
import "./footer.scss";

export  const Footerr = () => {
    return (
        <>
           <footer
    className="bg-slate-200 text-center w-[100%] p-5 dark:bg-neutral-600 lg:text-left">
    <div className="container p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {/* <!--First links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase  text-neutral-800 dark:text-neutral-200">
            Git In Touch
          </h5>
          <p className='w-[20vw]'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>

         
        </div>

        {/* <!--Second links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            CATEGORIES
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Men</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Women</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Dresses</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Sunglasses</a>
            </li>
          </ul>
        </div>

        {/* <!--Third links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase bg text-neutral-800 dark:text-neutral-200">
            Links
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Search</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >About Us</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Contact Us</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Returns</a>
            </li>
          </ul>
        </div>
        

        

        {/* <!--Fourth links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Help
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Track Order</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Returns</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Shipping</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >FAQs</a>
            </li>
          </ul>
        </div>
      
      </div> 
       
    </div>

   

    {/* <!--Copyright section--> */}
    <div
      className="p-4  bg-slate-200 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      >TW Elements</a>
    </div>
  </footer>


        </>
    );
};

