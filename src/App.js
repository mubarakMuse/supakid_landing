import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.jpg";
import appPreview from "./sc.png";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import { insertLead } from "./lib/supabase";
import LeadsAdmin from "./components/LeadsAdmin";
import PrivacyPolicy from "./components/PrivacyPolicy";

const MinimalLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfKids: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send data to Supabase
      const result = await insertLead(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        console.log('Lead saved successfully:', result.data);
      } else {
        setSubmitError('Failed to save your information. Please try again.');
        console.error('Error saving lead:', result.error);
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
      console.error('Error in form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your information and will notify you as soon as SupaKid is available for download.
          </p>
          <p className="text-sm text-gray-500">
            Keep an eye on your email for updates and early access!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SupaKid Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-gray-800">
              SupaKid
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
      {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Safe Videos for Kids
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Educational content for children under 10. Coming soon to mobile.
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>📱</span>
                <span>Coming Soon</span>
        </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Get Early Access
          </h2>
              <p className="text-gray-600">
                Be notified when SupaKid launches on mobile.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="text-red-500 mr-2">⚠️</div>
                    <span className="font-medium text-sm">{submitError}</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Full Name *"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Email Address *"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Phone Number *"
                  />
                </div>

                {/* Number of Kids Field */}
                <div>
                  <select
                    name="numberOfKids"
                    value={formData.numberOfKids}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                    <option value="5+">5+ Children</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing Up...</span>
                  </>
                ) : (
                  <>
                    <span>Get Early Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* App Preview */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">See SupaKid in Action</h2>
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <img 
                  src={appPreview} 
                  alt="SupaKid App Preview - Mobile app screenshots showing welcome screen, settings menu, and activity history"
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              SupaKid brings safe, fun, and educational content to your child's fingertips.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            {[
              { icon: "🛡️", title: "Safe", desc: "Parent-approved content" },
              { icon: "📚", title: "Educational", desc: "Learning-focused videos" },
              { icon: "⏰", title: "Screen Time", desc: "Healthy limits" },
              { icon: "👨‍👩‍👧‍👦", title: "Family", desc: "For all ages" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <img src={logo} alt="SupaKid Logo" className="w-6 h-6" />
            <span className="text-lg font-bold text-gray-800">SupaKid</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Questions? Contact us at{" "}
            <a
              href="mailto:admim@SupaKidApp.com"
              className="text-blue-600 hover:text-blue-800"
            >
              admim@SupaKidApp.com
            </a>
          </p>
          <p className="text-xs text-gray-500 mb-3">© 2024 SupaKid. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-4">
            <Link 
              to="/privacy-policy" 
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/leads" 
              className="inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Shield className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinimalLanding />} />
        <Route path="/leads" element={<LeadsAdmin />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
