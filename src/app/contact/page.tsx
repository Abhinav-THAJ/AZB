import React from 'react';

export const metadata = {
  title: 'Contact Us - AZB Store',
};

export default function ContactPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }}></div>
      </div>

      <div className="flex md:flex-col gap-12">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted mb-8">
            Have a question about a product, your order, or just want to say hi? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-gold mb-1">Customer Support</h3>
              <p>support@azbstore.com</p>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-1">Business Inquiries</h3>
              <p>business@azbstore.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-1">Headquarters</h3>
              <p>123 Luxury Avenue, Cyber City<br />Gurugram, Haryana 122002<br />India</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-warm-neutral p-8 rounded-lg shadow-sm">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="form-input" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="form-input" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="form-textarea" style={{ height: '150px' }} placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-2">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
