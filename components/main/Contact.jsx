"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import EarthCanvas from "../sub/Earth";
import { SectionWrapper } from "../../hoc";
// here is hoc
import { slideIn } from "../../utils/motion";

import emailjs from 'emailjs-com';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  emailjs.init("kv40Ya7LARL4c-o-Q"); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // here i use email js

    emailjs
      .send(
        "service_ldtciqf",
        "template_ziq650m",
        {
          from_name: form.name,
          to_name: "Safwan Hossain ",
          from_email: form.email,
          to_email: "safwanhossainmridul@gmail.com",
          message: form.message,
        },
        "kv40Ya7LARL4c-o-Q"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! i will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Oops! something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12  mt-2    xl:mx-28  mx-0  sm:mx-auto  xl:flex-row flex-col-reverse flex gap-10 justify-between overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.1)}
        className="flex-[0.75] bg-black-100 pt-2 sm:p-6 bg-[#100d25] z-40 rounded-2xl"
      >
        <p
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider  opacity-70"
          }
        >
          Get in touch
        </p>
        <h3 className={    " text-slate-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:outline-1 focus:outline-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:outline-1 focus:outline-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 sm:mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="What's on your mind"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:outline-1 focus:outline-white"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary sm:py-3 m-3 sm:px-8 outline-none w-fit text-white  shadow-md shadow-primary rounded-none"
          >
            {loading ?<p className='border border-[#7042f88b] cursor-not-allowed p-3 px-5 rounded-sm'>Sending...</p> : 
            <p className="border border-[#7042f88b] p-3 px-5 hover:bg-[#7042f88b] rounded-sm">Send</p>}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.1)}
        className="xl:flex-1   w-full lg:w-1/2 mx-auto   xl:h-auto md:h-[550px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
