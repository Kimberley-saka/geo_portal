import { useState } from "react";
import validator from "validator";


export default function ContactUsPage() {
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("")
    } else {
      setMessage("Please, enter valid email")
    }
  }

    return(
      <div className="flex flex-col justify-center px-8 md:px-24 md:my-16 md:flex-row">

        <div className="flex flex-col gap-4 px-8 pt-8 w-full text-white bg-sky-500 md:w-2/3">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-extrabold">
              Get in Touch</p>

            <p>
            Have any questions, suggestions, or just want to say hello? 
            We would love to hear from you. Getting in touch with us is easy
            simply use one of the methods below, or the form and we will 
            get back to you as soon as possible.

            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <div className=" flex h-6">
            <img src="/icons/email.png"></img>
            </div>
            <p> kimberleysaka@gmail.com</p>
          </div>

          </div>


        <div className="px-8 py-8 w-full bg-white">
          <form className="flex gap-5 flex-col ">
            <input className="h-10 pl-4 outline-none border-2 border-gray-300 rounded-md" 
            type="text" placeholder="Enter your Full Name" />

            <input className="h-10 pl-4 outline-none border-2 border-gray-300 rounded-md" 
            type="email" placeholder="Enter your Email Addres" />

            <input className="h-10 pl-4 outline-none border-2 border-gray-300 rounded-md"
            type="text" placeholder="Enter Subject"
            onChange={(email) => validateEmail(email)}
            />

            <input className="h-24 pl-4 outline-none border-2 border-gray-300 rounded-md"
            type="text" placeholder="Enter your Message" />
            <button className="bg-sky-500 w-20 h-10 text-white rounded-md"
            >Submit</button>
          </form>
        </div>
      </div>
    )
  }