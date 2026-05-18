import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaTruck, FaRedo, FaClock } from 'react-icons/fa';

import img1 from '../../../assets/img/master-slide-02.jpg';
import img2 from '../../../assets/img/master-slide-01.jpg';
import img3 from '../../../assets/img/master-slide-04.jpg';
import img4 from '../../../assets/img/banner-02.jpg';
import img5 from '../../../assets/img/banner-03.jpg';
import img6 from '../../../assets/img/banner-04.jpg';
import img7 from '../../../assets/img/banner-05.jpg';
import img8 from '../../../assets/img/banner-07.jpg';
import img9 from '../../../assets/img/banner-09.jpg';
import img10 from '../../../assets/img/item-10.jpg';
import img11 from '../../../assets/img/item-11.jpg';
import img12 from '../../../assets/img/item-12.jpg';
import img13 from '../../../assets/img/item-13.jpg';
import img18 from '../../../assets/img/banner-08.jpg';
import img20 from '../../../assets/img/blog-01.jpg';
import img21 from '../../../assets/img/blog-02.jpg';
import img22 from '../../../assets/img/blog-03.jpg';

const heroSlides = [
  { img: img1, subtitle: 'Women Collection 2024', title: 'New Arrivals', tag: 'Define Your Style' },
  { img: img2, subtitle: 'Bold Statements', title: 'Express Yourself', tag: 'Shop the Look' },
  { img: img3, subtitle: 'Limited Edition', title: 'Exclusive Drop', tag: 'Get Yours Now' },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function useCountdown(targetDate) {
  const [time, setTime] = useState({ days: 112, hours: 10, mins: 55, secs: 48 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <span className="font-compressed text-accent text-sm tracking-[0.3em] uppercase block mb-2">{subtitle}</span>
      <h2 className="font-compressed text-5xl md:text-7xl lg:text-8xl tracking-wider text-white">{title}</h2>
      <div className="w-16 h-[2px] bg-accent mx-auto mt-4" />
    </motion.div>
  );
}

export const FirstSection = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [tab, setTab] = useState('NEW');
  const countdown = useCountdown();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const blogPosts = [
    {
      title: 'Black Friday Guide: Best Sales & Discount Codes',
      img: img20,
      date: 'Dec 28, 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate.',
    },
    {
      title: 'The White Sneakers Nearly Every Fashion Girls Own',
      img: img21,
      date: 'Dec 28, 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate.',
    },
    {
      title: 'New York SS 2025 Street Style: By Annina Mislin',
      img: img22,
      date: 'Dec 28, 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark">
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[activeSlide].img})`, transform: `translateY(${heroParallax})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/30 to-dark/60" />
            <div className="absolute inset-0 noise-overlay" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center section-padding">
          <motion.div
            key={`text-${activeSlide}`}
            variants={stagger} initial="hidden" animate="show"
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="font-body text-accent text-sm uppercase tracking-[0.3em] block mb-4">
              {heroSlides[activeSlide].subtitle}
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-compressed text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-wider text-white">
              {heroSlides[activeSlide].title}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-display italic text-xl md:text-2xl text-white/70 mt-4 mb-8">
              {heroSlides[activeSlide].tag}
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <motion.button
                onClick={() => navigate('/shop')}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                onClick={() => navigate('/about')}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Discover
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 items-end">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-11 flex items-end"
            >
              <span className={`block transition-all duration-500 ${
                i === activeSlide ? 'bg-accent w-16 h-[3px]' : 'bg-white/30 hover:bg-white/50 w-12 h-[3px]'
              }`} />
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { img: img4, label: 'New In' },
              { img: img5, label: 'Collections' },
              { img: img6, label: 'Accessories' },
              { img: img7, label: 'Footwear' },
              { img: img8, label: 'Outerwear' },
              { img: img9, label: 'Sale' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => navigate('/shop')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/shop')}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="font-compressed text-xl tracking-wider text-white">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-secondary section-padding py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Products" subtitle="Curated For You" />

          <div className="flex justify-center gap-8 mb-12">
            {['NEW', 'OLD'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-body text-sm uppercase tracking-[0.2em] transition-all duration-300 relative pb-1 ${
                  tab === t ? 'text-accent' : 'text-muted hover:text-white'
                }`}
              >
                {t}
                {tab === t && (
                  <motion.div layoutId="tab-line" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { img: img10, title: 'Boxy T-Shirt with Roll Sleeve', price: '$20.00' },
                { img: img11, title: 'Classic Dress', price: '$25.00' },
                { img: img12, title: 'Vintage Inspired Dress', price: '$30.00' },
                { img: img13, title: 'Summer Collection Dress', price: '$35.00' },
              ].map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group cursor-pointer"
                  onClick={() => navigate('/shop')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/shop')}
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full bg-accent text-white py-3 font-body text-xs uppercase tracking-widest
                                         hover:bg-accent/90 transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <h3 className="font-body text-white text-sm font-medium truncate">{product.title}</h3>
                  <p className="font-body text-accent text-sm mt-1 font-semibold">{product.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 section-padding max-w-7xl mx-auto gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden group">
              <img src={img18} alt="The Beauty Lookbook collection" className="w-full transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <span className="font-body text-accent text-sm uppercase tracking-[0.3em] block mb-4">Limited Edition</span>
            <h2 className="font-compressed text-5xl md:text-7xl tracking-wider text-white leading-none">
              The Beauty
              <br />
              <span className="text-accent">LOOKBOOK</span>
            </h2>
            <p className="font-display italic text-white/50 text-lg mt-4 mb-8">
              Discover our latest collection — where elegance meets edge.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hrs', value: countdown.hours },
                { label: 'Mins', value: countdown.mins },
                { label: 'Secs', value: countdown.secs },
              ].map((unit, i) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-dark-card border border-dark-border w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center"
                >
                  <motion.span
                    key={unit.value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-compressed text-3xl md:text-4xl text-white"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted">{unit.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => navigate('/shop')}
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark-secondary section-padding py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Journal" subtitle="Latest Stories" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="relative overflow-hidden mb-5 aspect-[4/3]">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
                </div>
                <span className="font-body text-[11px] uppercase tracking-[0.15em] text-muted">{post.date}</span>
                <h3 className="font-display text-xl text-white mt-2 mb-3 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed line-clamp-2">{post.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 border-t border-dark-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { Icon: FaTruck, title: 'Free Delivery', desc: 'Worldwide shipping on orders over $100' },
              { Icon: FaRedo, title: '30 Days Return', desc: 'Simply return it within 30 days for an exchange' },
              { Icon: FaClock, title: 'Store Opening', desc: 'Shop open from Monday to Sunday' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-2xl mb-4 text-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                  <service.Icon />
                </div>
                <h4 className="font-compressed text-2xl tracking-wider text-white mb-2">{service.title}</h4>
                <p className="font-body text-sm text-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
