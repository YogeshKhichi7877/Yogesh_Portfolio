import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: February 28, 2026</p>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, videos, and code, is the intellectual property of Yogesh Khinchi unless otherwise stated. You may not reproduce, distribute, modify, or use any content from this website without prior written permission.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Use License</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Permission is granted to temporarily use this website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You may NOT: modify or copy the materials, use the materials for any commercial purpose or public display, attempt to reverse engineer any software contained on the website, or transfer the materials to another person or entity.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">4. User Contributions</h2>
            <p className="text-gray-400 leading-relaxed">
              This website may include user-generated content, comments, or other materials. We do not endorse or guarantee the accuracy of any user contributions. You understand that by using this website, you may be exposed to content that you may find offensive.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer</h2>
            <p className="text-gray-400 leading-relaxed">
              The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              In no event shall Yogesh Khinchi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Links to Third-Party Sites</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these sites and assume no responsibility for their content or accuracy.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;