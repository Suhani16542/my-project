import React from "react";

const LandingPage = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white px-6 py-12">
      <section className="text-center max-w-3xl">
        {/* Hero Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-yellow-300">Your Future</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Empower your ideas with creative design and smart technology.
          Let’s shape something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition">
            Get Started
          </button>
          <button className="border border-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            Learn More
          </button>
        </div>

        {/* Floating Card */}
        <div className="relative mt-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-white text-gray-800 rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Creative Work"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Design that Inspires</h3>
            <p className="text-gray-600 mb-4">
              Our designs don’t just look good — they tell your story and
              connect with your audience.
            </p>
            <a
              href="#"
              className="text-indigo-600 font-medium hover:underline"
            >
              Explore More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;