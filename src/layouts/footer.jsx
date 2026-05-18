import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export const Footerr = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email');
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  return (
    <footer className="bg-dark-secondary border-t border-dark-border">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <Link to="/home" className="flex items-center gap-1 mb-6">
              <span className="font-compressed text-3xl tracking-wider text-white">ZSHOP</span>
              <span className="text-accent font-display italic text-xl">.</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Curated fashion for those who dare to stand out. Redefining style with bold silhouettes and uncompromising quality.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: '#', label: 'Facebook' },
                { Icon: FaTwitter, href: '#', label: 'Twitter' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaPinterestP, href: '#', label: 'Pinterest' },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-dark-border flex items-center justify-center
                             text-muted hover:text-accent hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h5 className="font-compressed text-xl tracking-wider text-white mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { label: 'Search', to: '#', external: false },
                { label: 'About Us', to: '/about', external: false },
                { label: 'Contact Us', to: '/contact', external: false },
                { label: 'Returns', to: '#', external: false },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-muted hover:text-white text-sm transition-colors duration-300 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h5 className="font-compressed text-xl tracking-wider text-white mb-6">Categories</h5>
            <ul className="space-y-3">
              {['Men', 'Women', 'Dresses', 'Sunglasses'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/shop`}
                    className="text-muted hover:text-white text-sm transition-colors duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h5 className="font-compressed text-xl tracking-wider text-white mb-6">Contact</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-accent text-lg mt-0.5 shrink-0" />
                <span className="text-muted text-sm">8th floor, 379 Hudson St, New York, NY 10018</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-accent text-lg shrink-0" />
                <span className="text-muted text-sm">(+1) 96 716 6879</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-accent text-lg shrink-0" />
                <span className="text-muted text-sm">contact@zshop.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-dark-border"
      >
        <div className="section-padding py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-compressed text-4xl md:text-5xl tracking-wider text-white mb-3">
              Join the Movement
            </h3>
            <p className="text-muted text-sm mb-8 max-w-md mx-auto">
              Subscribe for exclusive drops, early access, and style inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-dark border border-dark-border px-5 py-3.5 text-white text-sm
                           placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
              <motion.button
                type="submit"
                className="bg-accent text-white px-6 py-3.5 flex items-center gap-2
                           font-body font-semibold text-sm uppercase tracking-widest
                           hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hidden md:inline">Subscribe</span>
                <FaArrowRight className="text-xs" />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-dark-border">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} ZSHOP. All rights reserved.
          </p>
          <p className="text-muted/60 text-xs">
            Designed with purpose
          </p>
        </div>
      </div>
    </footer>
  );
};
