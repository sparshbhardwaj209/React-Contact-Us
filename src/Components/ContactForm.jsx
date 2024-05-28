import React, { useState } from "react";
import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);    
  };

  return (
    <div className="px-8 flex flex-row py-2 w-full">
      <div className="left-div flex flex-col gap-3 w-1/2 px-1 shadow-md">
        <div className="flex flex-row gap-2">
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button text="VIA CALL" icon={<IoMdCall />} />
        </div>
        <div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoIosMail />} />
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col relative">
            <label
              className="text-sm bg-white px-2 absolute -top-2 left-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="px-2 h-9 border-2 border-black"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="text-sm bg-white px-2 absolute -top-2 left-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="px-2 h-9 border-2 border-black"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="text-sm bg-white px-2 absolute -top-2 left-2"
              htmlFor="text"
            >
              Text
            </label>
            <textarea
              name="text"
              className="p-2 border-2 border-black"
              rows="3"
            />
          </div>
          <div className="">
            <Button onSubmit={onSubmit} className="" text="Submit" />
          </div>
        </form>
      </div>

      <div className="right-div w-1/2 px-1">
        <img
          className="h-96 w-11/12"
          src="/src/assets/coding.png"
          alt="coding photo"
        />
      </div>
    </div>
  );
};

export default ContactForm;
