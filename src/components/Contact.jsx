import React, { useState } from 'react';
import PageBanner from './PageBanner';

function Contact({ bannerTitle = 'Contact Us' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form tại đây
    alert('Thank you for contacting us!');
  };

  return (
    <div>
      <PageBanner
        title={bannerTitle}
        subtitle={`Motion Memory / ${bannerTitle}`}
      />
      <div className="min-h-screen bg-white flex flex-col items-center px-2 py-8">
        <h1 className="text-5xl md:text-6xl font-banner text-[#06302c] text-center mb-8">
          How can we help ?
        </h1>
        <div className="w-full max-w-2xl mb-12">
          <div className="bg-[#06604c] rounded-lg p-6 text-white text-center">
            <div className="text-2xl font-banner mb-2">
              Have Any Questions ?
            </div>
            <div className="text-base">
              <span className="font-bold">At Motion Memory</span>, we're here to
              ensure you have the best experience possible. Whether you need
              assistance with your digital frame, have questions about your
              order, or simply want to share your feedback -{' '}
              <span className="font-bold">we're happy to help!</span>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-banner text-[#06302c] text-center mb-8">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 border rounded-lg px-4 py-3 text-lg outline-none"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email *"
              className="flex-1 border rounded-lg px-4 py-3 text-lg outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full border rounded-lg px-4 py-3 text-lg outline-none"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            className="w-full border rounded-lg px-4 py-3 text-lg outline-none min-h-[100px]"
            value={form.comment}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#06604c] text-white font-bold text-xl px-10 py-2 rounded-lg mt-4 hover:bg-[#06302c] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
