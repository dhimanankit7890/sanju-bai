import React from 'react';
import { Mail, Phone, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: <Mail size={20} className="text-[#0A2463]" />,
      title: "Email",
      content: "sanjudhiman141@gmail.com",
      href: "sanjudhiman141@gmail.com"
    },
    {
      icon: <Phone size={20} className="text-[#0A2463]" />,
      title: "Phone",
      content: "+91 9991850096",
      href: "tel:+919991850096"
    },
    {
      icon: <Calendar size={20} className="text-[#0A2463]" />,
      title: "Availability",
      content: "Monday - Friday"
    },
    {
      icon: <Clock size={20} className="text-[#0A2463]" />,
      title: "Hours",
      content: "9:00 AM - 5:00 PM EST"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

      <div className="space-y-8">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start group"
          >
            <div className="bg-[#0A2463]/10 p-3 rounded-full mr-4 group-hover:bg-[#0A2463]/20 transition-colors duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">{item.title}</h4>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-900 hover:text-[#0A2463] transition-colors duration-300"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-900">{item.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 pt-8 border-t border-gray-200"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Location</h4>
        <p className="text-gray-700 mb-2">VPO Balu,</p>
        <p className="text-gray-700 mb-2">District Kaithal</p>
        <p className="text-gray-700">India 136117</p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
