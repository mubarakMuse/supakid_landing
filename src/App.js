import React from "react";
import logo from "./logo.png";

const LandingPage = () => {
  const featureIcon1 = "💡";
  const featureIcon2 = "📘";
  const featureIcon3 = "🛡️";
  const featureIcon4 = "🌟";
  const testimonialImage = "https://via.placeholder.com/150"; // Placeholder image

  const features = [
    { icon: featureIcon1, title: "Filtered YouTube", description: "Choose safe, educational channels for your kids." },
    { icon: featureIcon2, title: "Brain-Boosting Games", description: "Fun, non-addictive games that promote learning." },
    { icon: featureIcon3, title: "Parental Dashboard", description: "Monitor and customize your child's digital usage." },
    { icon: featureIcon4, title: "Future Tools", description: "More tools to shape safe digital experiences coming soon." },
  ];

  const steps = [
    { step: "1. Sign Up", description: "Create your parent account." },
    { step: "2. Add Child", description: "Set up profiles for your kids." },
    { step: "3. Customize Settings", description: "Tailor content to your preferences." },
    { step: "4. Enjoy Together", description: "Explore a safe digital world." },
  ];

  const plans = [
    {
      title: "Monthly Plan",
      price: "$6.99/month",
      description: [
        "✔ Curated content for kids",
        "✔ Activity monitoring",
        "✔ Priority support",
      ],
      link: "https://buy.stripe.com/3cs8xH7kJ7x7eI04gi",
    },
    {
      title: "Annual Plan",
      price: "$59.99/year ($4.99/month)",
      description: [
        "✔ Save 30% with annual billing",
        "✔ All monthly features included",
        "✔ Exclusive future perks",
      ],
      link: "https://buy.stripe.com/dR6dS1eNbeZzgQ8003",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="SupaKid Logo" className="w-32 h-auto" />
          <button
            onClick={() => window.open("https://go.supakidapp.com", "_blank")}
            className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
          >
            Go To App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Take Back Control</h1>
          <p className="text-lg mb-6">
            Supa Kid is a suite of tools for parents to take back control over their children's digital experience.
          </p>
          <div className="space-y-4 lg:space-x-4">
            <button
              onClick={() =>
                document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white rounded-md text-lg font-medium hover:bg-yellow-600 transition"
            >
              Get Started
            </button>
            <button
              onClick={() =>
                document.getElementById("features").scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 rounded-md text-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose SupaKid?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{feature.icon || "🔧"}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-lg mb-6">
            Our goal is to continue improving the app and add more tools to help parents gain control over their children's digital experiences.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing Plans</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-lg font-semibold mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  {plan.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.open(plan.link, "_blank")}
                  className="px-6 py-3 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-4">
            Questions? Contact us at{" "}
            <a
              href="mailto:mubarak@brightertunnel.com"
              className="underline hover:text-gray-300"
            >
              mubarak@brightertunnel.com
            </a>
          </p>
          <p className="text-sm">© 2024 SupaKid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
