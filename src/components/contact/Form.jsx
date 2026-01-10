import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
    <form ref={form} onSubmit={sendMail}>
      <div className="flex flex-col ">
        <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg focus:outline-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg  focus:outline-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          placeholder="Your message here..."
          className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg resize-none focus:outline-blue-600"
          required
        ></textarea>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-5 px-6 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
