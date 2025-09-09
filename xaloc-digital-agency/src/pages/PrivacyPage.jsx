import React from 'react';
import MainLayout from '../components/Layout/MainLayout';

const PrivacyPage = () => {
  return (
    <MainLayout>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="glass-dark p-8 rounded-2xl text-gray-300 leading-relaxed">
              <p className="mb-6">
                <strong>Effective Date:</strong> October 10, 2023
              </p>

              <p className="mb-6">
                At Xaloc Media ("Company," "we," "our," "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://xaloc.in/ (the "Site") or use our services. By accessing or using our Site, you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide when contacting us or using our services.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our Site, including IP address, browser type, pages visited, and time spent on our Site.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about our services, updates, and promotions</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze and improve our Site and services</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>With service providers who assist us in operating our Site and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer, such as a merger or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-6">
                We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our Site.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to or restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p className="mb-6">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="mb-6">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>By email: xalocmediaparters@gmail.com</li>
                <li>By phone: +91 8590940911</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPage;
