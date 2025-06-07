import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const confirmationTemplateID = process.env.REACT_APP_EMAILJS_CONFIRMATION_TEMPLATE_ID;


    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
    return emailjs.send(serviceID, confirmationTemplateID, form, userID);
  })
      .then(() => {
        alert('✅ Message sent! We’ve sent you a confirmation email.');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-white shadow-lg rounded-lg mb-[50px]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
