import React from 'react';
import MainLayout from '../components/Layout/MainLayout';

const TermsPage = () => {
  return (
    <MainLayout>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
              Terms & Conditions
            </h1>

            <div className="glass-dark p-8 rounded-2xl text-gray-300 leading-relaxed">
              <p className="mb-6">
                <strong>Effective Date:</strong> October 10, 2023
              </p>

              <p className="mb-6">
                Welcome to Xaloc Media ("Company," "we," "our," "us"). These Terms & Conditions ("Terms") govern your use of our website https://xaloc.in/
                (the "Site") and our services. By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our Site or services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Company Information</h2>
              <p className="mb-6">
                Xaloc Media is a business entity registered in Kerala, India.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
              <p className="mb-4">
                We provide digital marketing services including but not limited to:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>META Ads Management</li>
                <li>Google Ads</li>
                <li>GMB Handling</li>
                <li>SEO & Indexing</li>
                <li>Video Editing & Videography</li>
                <li>Website Creation & Maintenance</li>
                <li>Brand Promotions</li>
                <li>Poster Creation</li>
                <li>24/7 Support & Consultation</li>
              </ul>
              <p className="mb-6">
                We may introduce additional services, subscription plans, or features at any time.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="mb-6">
                We currently do not allow users to create accounts on our Site.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. User Content</h2>
              <p className="mb-6">
                Users may provide content (e.g., text, images, reviews, feedback) when interacting with our services. By submitting content, you grant us a worldwide, royalty-free, and perpetual license to use, reproduce, adapt, and display such content for business purposes.
              </p>
              <p className="mb-6">
                You are responsible for ensuring that your content is accurate, legal, and does not violate any third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Purchases & Subscriptions</h2>
              <p className="mb-6">
                We do not currently sell goods or products directly through our website.
              </p>
              <p className="mb-6">
                We may offer subscription-based services (e.g., ongoing marketing or support packages). Subscription details, pricing, and renewal terms will be provided at the time of subscription.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="mb-6">
                All content, trademarks, graphics, logos, and materials displayed on the Site are the exclusive property of Xaloc Media, unless otherwise stated. You may not copy, reproduce, or distribute our content without prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Feedback & Suggestions</h2>
              <p className="mb-6">
                If you provide us with ideas, feedback, or suggestions, you agree that we may use them for any purpose without obligation to compensate or credit you.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Promotions & Contests</h2>
              <p className="mb-6">
                From time to time, we may run promotions, contests, or marketing campaigns. Participation in such promotions will be subject to separate terms and conditions provided at the time of the campaign.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="mb-6">
                We strive to provide accurate and reliable services, but we cannot guarantee uninterrupted or error-free operation. Xaloc Media is not liable for:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits, data, or opportunities</li>
                <li>Issues caused by third-party services (e.g., ad platforms, hosting providers)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="mb-6">
                We reserve the right to suspend or terminate access to our services if you violate these Terms or engage in unlawful or harmful behavior.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed by and construed in accordance with the laws of Kerala, India. Any disputes shall be subject to the jurisdiction of the courts in Kerala.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="mb-6">
                We may update these Terms from time to time. Updated versions will be posted on this page, and continued use of our Site constitutes acceptance of the revised Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms & Conditions, you can contact us:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>By email: xalocmediaparters@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsPage;
