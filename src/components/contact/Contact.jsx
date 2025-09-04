// import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
import SectionTitle from "../common/SectionTitle";

const SendingMail = () => {
  return <button type="button" class="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400" disabled="disabled">
    <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  Processing…
</button>
}

const initialState = {
    name: '',
    email: '',
    phone_number: '',
    address: '',
    message: '',
  }

const ContactUs = () => {
  const [mailSending, setMailSending] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [responseMsg, setResponseMsg] = useState('');

  const validate = () => {
    let tempErorrs = {};

    if(!formData.name.trim()){
      tempErorrs.name = "Name is required"
    }

    if(!formData.email){
      tempErorrs.email = "Email is required"
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErorrs.email = "Email is invalid";
    }

    if(!formData.phone_number){
      tempErorrs.phone_number = "Phone number is required"
    }
    if(!formData.address){
      tempErorrs.address = "Address is required"
    }

    if(!formData.message){
      tempErorrs.message = "Messages field is required"
    }

    setErrors(tempErorrs);
    return Object.keys(tempErorrs).length === 0;

  }

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validate()) {
      console.log('Sending....');
      setMailSending(true);
      try {
        const response = await fetch("https://ripplesofhope.in/assets/query.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // sending data
        });

        const data = await response.json();
        console.log("✅ Success:", data.status, data.status === 'success');
        if(data.status === 'success') {
          setMailSending(false)
          setFormData(initialState);
          setResponseMsg("Mail send successfully...");
        }else {
          setMailSending(false)
          setResponseMsg("Something went wrong...");
        }
      } catch (error) {
        setMailSending(false);
        setResponseMsg("There is some erorr to sending the mail, try again...");
        console.log("❌ Error:", error);
      }
    }else{
      console.log('Some fields have errors...');
    }

  }

  return (
    <>
      <SectionTitle
        title="Contact Us"
        paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
        mb="44px"
        width="auto"
      />
      <div
        className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
        data-wow-delay=".15s"
      >
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
          Need contact? Please raise the query!
        </h2>
        <p className="mb-12 text-base font-medium text-body-color">
          Our support team will get back to you ASAP via email or call.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                />
                {errors.phone_number && <p style={{ color: "red" }}>{errors.phone_number}</p>}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                />
                {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </div>
            </div>
            <div className="w-full px-4">
              {
                mailSending ? <SendingMail /> :
                <button type="submit" className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400">
                  Submit
                </button>
              }
              {responseMsg && <span className="pl-4" style={{ color: "green" }}>{responseMsg}</span>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
