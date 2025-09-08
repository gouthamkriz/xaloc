import React from 'react';
import Contact from '../components/sections/Contact';
import MainLayout from '../components/Layout/MainLayout';

const ContactPage = () => {
  return (
    <MainLayout>
      <Contact />
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 max-w-4xl">
            Ready to take your business to the next level? Contact us today to discuss your project.
            Our team is here to help you achieve your digital marketing goals.
          </p>
          {/* Add more detailed contact information here */}
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
