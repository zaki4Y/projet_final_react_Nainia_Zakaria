import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const Contactsection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitting(false);
  };

  const contactInfo = [
    { icon: HiMail, title: 'Email', content: 'info@zshop.com', link: 'mailto:info@zshop.com' },
    { icon: HiPhone, title: 'Phone', content: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: HiLocationMarker, title: 'Location', content: '123 Fashion St, Casablanca', link: 'https://maps.google.com' },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="bg-dark">
      <div className="relative h-56 md:h-64 bg-dark-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-compressed text-7xl md:text-8xl lg:text-9xl tracking-wider text-white">Contact</h1>
          <p className="font-display italic text-muted text-lg mt-2">Get in touch</p>
        </div>
      </div>

      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="h-72 md:h-80 overflow-hidden border border-dark-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.70261828904!2d-7.586992499999999!3d33.572287499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707922521315!5m2!1sfr!2sma"
                title="ZSHOP location on Google Maps"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-dark-card border border-dark-border p-5 group hover:border-accent/30 transition-all duration-300"
                >
                  <info.icon className="text-xl text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="font-body text-xs uppercase tracking-widest text-muted mb-1">{info.title}</h2>
                  <p className="font-body text-sm text-white">{info.content}</p>
                </motion.a>
              ))}
            </div>

            <div className="bg-dark-card border border-dark-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiClock className="text-xl text-accent" />
                <h2 className="font-body text-sm uppercase tracking-widest text-white">Business Hours</h2>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, i) => (
                  <div key={i} className="flex justify-between font-body text-sm">
                    <span className="text-muted">{schedule.day}</span>
                    <span className="text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-dark-border flex items-center justify-center
                             text-muted hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-dark-card border border-dark-border p-8 md:p-10">
              <h2 className="font-compressed text-4xl md:text-5xl tracking-wider text-white mb-2">Send a Message</h2>
              <p className="font-body text-sm text-muted mb-8">
                Have a question or feedback? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                  <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="123-456-7890" />
                  <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} error={errors.subject} required />
                </div>
                <div className="group">
                  <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={`w-full bg-dark border px-4 py-3.5 text-white text-sm
                               placeholder:text-muted/50 transition-all duration-300 resize-none
                               ${errors.message ? 'border-accent' : 'border-dark-border focus-visible:border-accent'}`}
                  />
                  {errors.message && <p className="text-accent text-xs mt-1 font-body">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full flex items-center justify-center gap-3"
                  whileHover={submitting ? {} : { scale: 1.01 }}
                  whileTap={submitting ? {} : { scale: 0.98 }}
                >
                  {submitting ? (
                    <span className="flex items-center gap-3">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function InputField({ label, name, type = 'text', value, onChange, error, required = false, placeholder = '' }) {
  return (
    <div className="group">
      <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full bg-dark border px-4 py-3.5 text-white text-sm
                   placeholder:text-muted/50 transition-all duration-300
                   ${error ? 'border-accent' : 'border-dark-border'}`}
      />
      {error && <p className="text-accent text-xs mt-1 font-body">{error}</p>}
    </div>
  );
}
