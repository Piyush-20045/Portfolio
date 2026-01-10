import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import { BsSend } from "react-icons/bs";

const Form = () => {
  const form = useRef();

  // LOGIC for sending message
  const sendMail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm("portfolio_172301", "template_z27x0vw", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      form.current.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("error in sending message", error);
      toast.error("Error! Message not sent");
    }
  };

  return (
    <form ref={form} onSubmit={sendMail} className="flex flex-col gap-5">
      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Name
        </label>
        <Input type="text" name="user_name" placeholder="Your full name" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Email
        </label>
        <Input
          type="email"
          name="user_email"
          placeholder="your-email@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          placeholder="Your message here..."
          className="block w-full p-3 rounded-lg bg-white dark:bg-neutral-950 border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-700 resize-none"
          required
        ></textarea>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-3 px-6 py-2 flex justify-center items-center gap-3 text-md font-semibold text-white dark:text-gray-950 bg-black dark:bg-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <BsSend />
        Send Message
      </button>
    </form>
  );
};

export default Form;
