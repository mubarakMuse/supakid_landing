import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Phone, Calendar } from 'lucide-react';
import logo from '../logo.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="SupaKid Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-800">SupaKid</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Your privacy and your child's safety are our top priorities
            </p>
            <p className="text-blue-200 text-sm mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to SupaKid ("we," "our," or "us"). We are committed to protecting your privacy and the privacy of your children. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a family-focused platform designed for children under 10, we understand the importance of privacy and safety. We comply with applicable privacy laws, including the Children's Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR).
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Contact Information:</strong> Name, email address, and phone number when you sign up for early access</li>
                  <li><strong>Family Information:</strong> Number of children in your family</li>
                  <li><strong>Account Information:</strong> Username, password, and profile information (when the app launches)</li>
                  <li><strong>Child Information:</strong> Age-appropriate information about your children for personalized content (collected with parental consent)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-3">Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Usage Data:</strong> How you and your children interact with our app</li>
                  <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
                  <li><strong>Analytics Data:</strong> App performance and user engagement metrics (anonymized)</li>
                  <li><strong>Location Data:</strong> General location information (if you choose to enable location services)</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide and improve our educational content and services</li>
                  <li>Send you notifications about app updates and new features</li>
                  <li>Personalize content for your children (with your consent)</li>
                  <li>Ensure the safety and security of our platform</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Analyze usage patterns to improve user experience</li>
                </ul>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy (COPPA Compliance)</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Special Protections for Children</h3>
                  <ul className="list-disc pl-6 text-blue-700 space-y-2">
                    <li>We never collect personal information from children under 13 without verifiable parental consent</li>
                    <li>Parents can review, delete, or refuse further collection of their child's information</li>
                    <li>We do not share children's personal information with third parties except as described in this policy</li>
                    <li>We implement appropriate security measures to protect children's information</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  If you believe we have collected information from your child without proper consent, please contact us immediately at <a href="mailto:admin@supakidapp.com" className="text-blue-600 hover:text-blue-800">admin@supakidapp.com</a>.
                </p>
              </section>

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (under strict confidentiality agreements)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data storage with reputable cloud providers</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:admin@supakidapp.com" className="text-blue-600 hover:text-blue-800">admin@supakidapp.com</a>.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We will delete or anonymize your information when it is no longer needed, unless we are required to retain it for legal or regulatory purposes.
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <a href="mailto:admin@supakidapp.com" className="text-blue-600 hover:text-blue-800">
                          admin@supakidapp.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-800">General Inquiries</p>
                        <a href="mailto:admin@supakidapp.com" className="text-blue-600 hover:text-blue-800">
                          admin@supakidapp.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-800">Response Time</p>
                        <p className="text-gray-600">We typically respond within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
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
              href="mailto:admin@supakidapp.com"
              className="text-blue-600 hover:text-blue-800"
            >
              admin@supakidapp.com
            </a>
          </p>
          <p className="text-xs text-gray-500">© 2024 SupaKid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
