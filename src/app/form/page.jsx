"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions";

const Form = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact({
        username: formData.get("username"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        content: formData.get("message"),
      });

      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <section className="flex flex-col md:text-start text-center" id="contact">
        <div className="px-20 py-4">
          <h1 className="text-5xl font-bold text-black py-4">Contact Us</h1>
          <p className="text-3xl text-gray-500">
            Get In touch As We’d Love To Hear From You.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 mx-20 my-10">
          <div className="w-full px-10 py-10 rounded-lg overflow-hidden items-center">
            <div>
              <iframe
                src="https://www.google.com/maps/embed"
                className="w-full min-h-[50vh]"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>

            <div className="bg-white flex flex-wrap flex-col rounded-b shadow-md px-6 py-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="pb-5">
                1st Floor, colony, Street 1, City, Wolrd
              </p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed pb-5">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                PHONE
              </h2>
              <p className="leading-relaxed">000111222333</p>
            </div>
          </div>

          {/*FORM */}
          <div className="lg:w-[33%] bg-[#778AC5] px-10 py-10 flex flex-col rounded-[10px] items-center justify-center">
            <form action={handleSubmit}>
              <div className="mb-4">
                <input
                  type={"name"}
                  id="username"
                  name="username"
                  // onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type={"name"}
                  id="email"
                  name="email"
                  // onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type={"name"}
                  id="phone-number"
                  name="phone"
                  // onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  // onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  cols="30"
                  rows="10"
                  placeholder="Say Something"
                  required
                ></textarea>
              </div>
              <div className="text-center">
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
