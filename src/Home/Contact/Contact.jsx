import { toast } from "react-toastify";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvojeyvv");
  state.succeeded && toast.success("Form Submitted. Will be in touch soon");
  return (
    <section className="" name="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-12">
        <div className="w-full text-center space-y-4 text-xl md:col-span-2">
          <p>
            Email:{" "}
            <a
              href="mailto:nur.diu.2791@gmail.com"
              className="font-semibold hover:text-orange-500 hover:underline">
              nur.diu.2791@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+8801792471014">+880 1792-471014</a>
          </p>
          <p>Address: Savar, Dhaka</p>
        </div>
        <div className="bg-orange-200 rounded-lg md:col-span-3">
          <form onSubmit={handleSubmit} className="p-6 space-y-3">
            <input
              type="text"
              name="Name"
              placeholder="Full Name"
              className="w-full bg-white text-black border-2 px-3 py-2 rounded-lg"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full bg-white text-black border-2 px-3 py-2 rounded-lg"
              required
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="w-full bg-white text-black border-2 px-3 py-2 rounded-lg"
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              className="w-full bg-white text-black border-2 px-3 py-2 rounded-lg h-32"></textarea>
            <input
              type="submit"
              value="Send"
              className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 duration-75 text-white font-semibold"
            />
            <input
              type="reset"
              value="Reset"
              className="ms-2 px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 duration-75 text-white font-semibold"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
