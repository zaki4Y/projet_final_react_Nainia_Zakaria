import React from "react";
import "./contactsection.scss";
import heading1 from "../../../assets/img/heading-pages-06.jpg";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export const Contactsection = () => {
  return (
    <>
      <div className="banner h-[35%]">
        <p className="text-white text-6xl w-full h-[100%] flex justify-center items-center">
          Contact
        </p>
      </div>

      
      <div className="w-[100%] p-10 flex justify-center items-center ">
        <div className="w-[45%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.70261828904!2d-7.586992499999999!3d33.572287499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707922521315!5m2!1sfr!2sma"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[45%] text-2xl p-5 flex  justify-between gap-3 flex-col">
          <div>
            <h1>Sending us your message</h1>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block"></div>
            <TextInput
              id="username3"
              placeholder="Your Name"
              addon="@"
              required
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block"></div>
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              rightIcon={HiMail}
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <form className="w-[72%] ">
              <label
                htmlFor="phone-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required=""
                />
              </div>
            </form>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-[72%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              defaultValue={""}
            />
            
          </div>
          <button
  type="button"
  className="text-white w-[20%]  hover:text-white border border-black hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-black  bg-black font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white   dark:hover:bg-black  dark:focus:ring-gray-800"
>
  Send
</button>
        </div>
    
      </div>
    </>
  );
};
