import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <img src="/yk_logo2.png" alt="YK" className="w-10 h-10 object-contain" />
            <span className="text-white font-bold text-xl">
              YOGESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Khinchi</span>
            </span>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: February 28, 2026</p>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              Welcome to Yogesh Khinchi's portfolio website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. We are committed to protecting your privacy and ensuring you have a positive experience using our site.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Contact us through the contact form</li>
              <li>Email us directly</li>
              <li>Interact with our website</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              The personal information that we collect may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We use the information we collect to: respond to your inquiries, provide customer service, improve our website, and communicate with you about our services. We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these websites and encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website may use "cookies" to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none mt-4 space-y-2 text-gray-400">
              <li>Email: <a href="mailto:yogeshkhinchi7877@gmail.com" className="text-blue-400 hover:underline">yogeshkhinchi7877@gmail.com</a></li>
              <li>Phone: <a href="tel:+917877080701" className="text-blue-400 hover:underline">+91 78770 80701</a></li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="py-8 px-4 border-t border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Yogesh Khinchi. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;