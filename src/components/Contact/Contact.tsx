import React, { useState } from 'react';
import { Mail, Phone, Calendar, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitted: true,
        isError: false,
        message: 'Thank you! Your message has been received. I will be in touch with you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email'
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#0A2463] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Schedule a consultation or send me a message to discuss your financial goals.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0A2463]/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-[#0A2463]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a 
                    href="mailto:s.mitchell@financialfirm.com" 
                    className="text-gray-900 hover:text-[#0A2463] transition-colors duration-300"
                  >
                    s.mitchell@financialfirm.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0A2463]/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-[#0A2463]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-gray-900 hover:text-[#0A2463] transition-colors duration-300"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0A2463]/10 p-3 rounded-full mr-4">
                  <Calendar size={20} className="text-[#0A2463]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Availability</h4>
                  <p className="text-gray-900">Monday - Friday</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0A2463]/10 p-3 rounded-full mr-4">
                  <Clock size={20} className="text-[#0A2463]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Hours</h4>
                  <p className="text-gray-900">9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Location</h4>
              <p className="text-gray-700 mb-2">Atlantic Trust Bank</p>
              <p className="text-gray-700 mb-2">350 Park Avenue, Suite 1200</p>
              <p className="text-gray-700">New York, NY 10022</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {formStatus.isSubmitted ? (
              <div className={`p-4 rounded-lg mb-6 ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {formStatus.message}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all duration-300"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all duration-300"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all duration-300"
                  placeholder="How can I help you with your financial goals?"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;