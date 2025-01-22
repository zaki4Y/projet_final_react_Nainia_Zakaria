import React from "react";
import "./contactsection.scss";
import heading1 from "../../../assets/img/heading-pages-06.jpg";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export const Contactsection = () => {
  return (
    <>
      <div className="banner h-[35%] bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
        <p className="text-white text-3xl md:text-4xl lg:text-6xl w-full h-[100%] flex justify-center items-center font-bold">
          Contact
        </p>
      </div>

      <div className="w-full p-4 md:p-10 flex flex-col lg:flex-row justify-center items-start gap-8 bg-white dark:bg-gray-900">
        {/* Map Section */}
        <div className="w-full lg:w-[45%]">
          <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.70261828904!2d-7.586992499999999!3d33.572287499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707922521315!5m2!1sfr!2sma"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[45%] p-6 flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Sending us your message
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>

          <div className="w-full">
            <TextInput
              id="username3"
              placeholder="Your Name"
              addon="@"
              required
              className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="w-full">
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              placeholder="name@flowbite.com"
              required
              className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="w-full">
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
                className="w-full ps-10 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 transition-colors duration-200"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                required
              />
            </div>

            <textarea
              id="message"
              rows={4}
              className="mt-4 w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 transition-colors duration-200 resize-none"
              placeholder="Write your thoughts here..."
            />
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-red-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-[1.02] font-medium"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};
