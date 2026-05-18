import { motion } from 'framer-motion';
import banner14 from '../../../assets/img/banner-14.jpg';

export const Aboutsection = () => {
  return (
    <div className="bg-dark">
      <div className="relative h-56 md:h-64 bg-dark-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-compressed text-7xl md:text-8xl lg:text-9xl tracking-wider text-white">About</h1>
          <p className="font-display italic text-muted text-lg mt-2">Our story, our vision</p>
        </div>
      </div>

      <div className="section-padding py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={banner14}
                  alt="About ZSHOP"
                  className="w-full transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center">
                    <h3 className="font-display text-3xl text-white">Our Story</h3>
                    <p className="font-body text-sm text-white/70">Discover who we are</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="font-body text-accent text-sm uppercase tracking-[0.3em] block">Our Vision</span>
              <h2 className="font-compressed text-5xl md:text-6xl tracking-wider text-white leading-tight">
                Redefining Fashion
                <br />
                <span className="text-accent">For the Bold</span>
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed">
                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque.
                Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque
                bibendum viverra. Vivamus lobortis magna ut interdum laoreet.
              </p>
              <p className="font-body text-muted text-sm leading-relaxed">
                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam
                imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 py-2 my-6">
                <p className="font-display italic text-white text-lg">
                  "Creativity is just connecting things. When you ask creative people how they did something,
                  they feel a little guilty because they didn't really do it, they just saw something."
                </p>
                <footer className="font-body text-sm text-muted mt-2">— Steve Jobs</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-dark-secondary section-padding py-16 md:py-20 border-t border-dark-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '2018', label: 'Founded' },
              { value: '50K+', label: 'Customers' },
              { value: '200+', label: 'Products' },
              { value: '30+', label: 'Countries' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-compressed text-5xl md:text-6xl tracking-wider text-accent">{stat.value}</p>
                <p className="font-body text-sm text-muted mt-2 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
