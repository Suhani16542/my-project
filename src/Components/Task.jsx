import React from "react";
import { CheckCircle, Clock, Shield, Star, FileText, CreditCard, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const Task = () => {
  return (
    <div className="bg-gradient-to-br from-[#4c1d95] via-[#9333ea] to-[#3b82f6] text-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Fill It – Smart Form Filling Services
        </h1>
        <p className="mt-4 text-lg max-w-2xl text-gray-100">
          No stress, no mistakes! Just send your form request and our team fills it accurately and instantly — saving your time and effort.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-[#6d28d9] font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition-all">
          Request a Form Fill
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-[#581c87]/50">
        <h2 className="text-3xl font-bold text-white mb-6">What is Fill It?</h2>
        <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed">
          <b>Fill It</b> is your digital helping hand for all online form tasks. Whether it's an admission form, exam form, or government document — our verified employees fill it for you with precision.  
          You can also schedule a specific date and pay instantly to confirm your slot.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Clock />, title: "Fast & Reliable" },
            { icon: <CheckCircle />, title: "100% Accuracy" },
            { icon: <Shield />, title: "Data Privacy" },
            { icon: <Star />, title: "User Satisfaction" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-[#4c1d95]/60 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="text-[#f9a8d4] mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 text-center bg-[#6d28d9]/50">
        <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Online Form Filling",
              desc: "Just upload your details, and our employee will fill out the form safely and submit it on your behalf.",
            },
            {
              title: "Scheduled Form Booking",
              desc: "Choose a date and time for form submission. We'll handle it exactly when you want it done.",
            },
            {
              title: "Instant Payment & PDF Confirmation",
              desc: "Once the form is filled, you can make an instant payment and instantly download your filled form in PDF format.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-8 bg-[#4c1d95]/60 rounded-2xl shadow-md hover:shadow-pink-300/40 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-pink-200 mb-3">{service.title}</h3>
              <p className="text-gray-100">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center bg-[#3b0764]/50">
        <h2 className="text-3xl font-bold text-white mb-8">How Fill It Works</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Submit Your Request",
            "Employee Assigned",
            "Form Filled Securely",
            "Instant PDF + Payment Confirmation",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-[#581c87]/60 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-2xl text-pink-300 font-bold mb-2">
                {i + 1}.
              </div>
              <p className="text-gray-100">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PDF + Payment Info Section */}
      <section className="py-20 px-6 text-center bg-[#4c1d95]/40">
        <h2 className="text-3xl font-bold text-white mb-6">Download & Payment</h2>
        <p className="max-w-3xl mx-auto text-gray-100 mb-10">
          Once your form is successfully filled, Fill It instantly generates a downloadable PDF copy for your records.  
          You can also complete your payment securely to finalize your booking or service instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="flex items-center gap-2 bg-white text-[#6d28d9] px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all">
            <FileText size={20} /> Download PDF
          </button>
          <button className="flex items-center gap-2 bg-pink-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-500 transition-all">
            <CreditCard size={20} /> Pay Now
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 text-center bg-[#581c87]/50">
        <h2 className="text-3xl font-bold text-white mb-6">Send a Request</h2>
        <form className="max-w-2xl mx-auto bg-[#4c1d95]/60 p-8 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#3b0764] text-white outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#3b0764] text-white outline-none"
          />
          <textarea
            placeholder="Describe your form request..."
            rows="4"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#3b0764] text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-pink-400 text-white font-semibold rounded-lg hover:bg-pink-500 transition-all flex justify-center items-center gap-2"
          >
            <Send size={18} /> Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-600 pb-10">
        
        {/* 1️⃣ About Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">About Fill It</h2>
          <p className="text-sm leading-6 text-gray-400">
            Fill It is an online platform designed to simplify your form-filling process. 
            Whether it’s government, educational, or job application forms — 
            our verified employees ensure quick, accurate, and secure submissions.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ Support & Services */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Support & Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Form Booking</a></li>
            <li><a href="#" className="hover:text-blue-400">Data Privacy</a></li>
            <li><a href="#" className="hover:text-blue-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Contact Us</h2>
          <p className="text-sm text-gray-400 mb-2">📍 Lucknow, India</p>
          <p className="text-sm text-gray-400 mb-2">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-400 mb-4">📧 support@fillit.in</p>

          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Fill It</span>. 
        All Rights Reserved | Designed with ❤ in India.
      </div>
    </footer>
    </div>
  );
};

export default Task;
