import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later: EmailJS / Backend API
  };

  return (
    <section id="contact" className="relative  min-h-screen text-white py-20">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-fuchsia-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-center uppercase">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Touch
          </span>
        </h2>

        <p className="text-center text-slate-400 max-w-xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to send a
          message — I’ll respond as soon as possible.
        </p>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Your Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Message
              </label>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-slate-500"
                />
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder:text-slate-500 resize-none"
                />
              </div>
            </div>

            {/* Button */}
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
