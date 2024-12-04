import React from "react";
import logo from "./logo.png";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <img src={logo} alt="SupaKid Logo" className="w-32 h-auto mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4">Welcome to SupaKid</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Empower your kids with a safe and enriching digital experience.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://forms.gle/sbzCa3JwhjMUVNQWA"
               target="_blank"
               rel="noreferrer"
              className="btn btn-primary px-10 py-4 rounded-lg shadow-lg text-lg bg-green-500 hover:bg-green-600"
            >
              Sign Up
            </a>
            <a
              href="https://go.supakidapp.com"
               target="_blank"
               rel="noreferrer"
              className="btn btn-secondary px-10 py-4 rounded-lg shadow-lg text-lg bg-blue-500 hover:bg-blue-600"
            >
              Go to App
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="card bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-blue-500 mb-4">
                <i className="fas fa-video fa-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated YouTube</h3>
              <p className="text-gray-600">
                Filter channels and videos for a safe viewing experience.
              </p>
            </div>
            <div className="card bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-green-500 mb-4">
                <i className="fas fa-book fa-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Islamic Content</h3>
              <p className="text-gray-600">
                Access handpicked Islamic content and stories for kids.
              </p>
            </div>
            <div className="card bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-yellow-500 mb-4">
                <i className="fas fa-gamepad fa-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Games</h3>
              <p className="text-gray-600">Fun and educational games coming soon.</p>
            </div>
            <div className="card bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-purple-500 mb-4">
                <i className="fas fa-chart-bar fa-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Parental Dashboard</h3>
              <p className="text-gray-600">
                Monitor and control your child’s app usage effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: "1. Sign Up", description: "Create your parent account to get started." },
              { step: "2. Add Your Child", description: "Generate a child code and create their profile." },
              { step: "3. Filter Content", description: "Select approved YouTube channels and videos." },
              { step: "4. Enjoy Safely", description: "Let your child explore in a safe, controlled environment." },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="flex gap-6 overflow-auto">
            {[
              {
                text: "“SupaKid gave me peace of mind. I love how I can control exactly what my kids watch.”",
                author: "Amina S.",
              },
              {
                text: "“The Islamic content library is amazing! My children are learning so much.”",
                author: "Ahmed M.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg flex-shrink-0 w-full md:w-1/3"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <p className="text-gray-800 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            Questions? Contact us at{" "}
            <a
              href="mailto:mubarak@brightertunnel.com"
              className="underline hover:text-blue-300"
            >
              mubarak@brightertunnel.com
            </a>
          </p>
          <p>© 2024 SupaKid. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
