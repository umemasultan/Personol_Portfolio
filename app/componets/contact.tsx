import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-gray-700 body-font">
      <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.142157538!2d66.49600210977367!3d25.191740595358027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1760059274877!5m2!1sen!2s"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Orangi Town, Karachi, Pakistan</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-cd-cyan leading-relaxed">umemasultan11@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+92 31077627913</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-xl shadow p-8">
          <h1
            className="sm:text-4xl text-2xl font-extrabold mb-4 
             bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] 
             text-transparent bg-clip-text 
             transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(70,128,153,0.5)]"
          >
            Contact Me
          </h1>

          <p className="leading-relaxed mb-5 text-gray-600">I'd love to hear from you — send me a message!</p>
          <form>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-cd-cyan focus:ring-2 focus:ring-cd-cyan text-base outline-none text-gray-700 py-2 px-3 leading-8" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-cd-cyan focus:ring-2 focus:ring-cd-cyan text-base outline-none text-gray-700 py-2 px-3 leading-8" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-cd-cyan focus:ring-2 focus:ring-cd-cyan h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6"></textarea>
            </div>
            <button
              className="text-white bg-[#224757] border-0 py-2 px-6 rounded text-lg font-semibold shadow-md 
             hover:bg-gradient-to-r hover:from-[#224757] hover:to-[#468099] 
             focus:outline-none transition-all duration-300 hover:shadow-[0_0_10px_rgba(70,128,153,0.6)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
