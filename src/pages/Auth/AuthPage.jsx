import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaUser, FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Min 6 characters';
    if (mode === 'register') {
      if (!form.name.trim()) errs.name = 'Name is required';
      if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    if (mode === 'register') {
      toast.success('Account created! You can now sign in.');
      setMode('login');
      setForm({ name: '', email: '', password: '', confirmPassword: '' });
      setSubmitting(false);
      return;
    }
    toast.success('Welcome back!');
    setSubmitting(false);
    navigate('/home');
  };

  const switchMode = () => {
    setMode((m) => (m === 'login' ? 'register' : 'login'));
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-dark flex">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-28 left-6 md:left-12 z-10 text-muted hover:text-white transition-colors flex items-center gap-2 font-body text-sm"
      >
        <FaArrowLeft className="text-xs" /> Back
      </button>

      <div className="hidden lg:flex lg:w-1/2 bg-dark-secondary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 text-center max-w-md px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-compressed text-8xl tracking-wider text-white block mb-4">ZSHOP</span>
            <span className="text-accent font-display italic text-5xl">.</span>
            <p className="text-muted text-sm mt-8 leading-relaxed">
              Step into a world where fashion meets identity. Every piece tells a story — make yours unforgettable.
            </p>
            <div className="mt-12 space-y-3 text-left max-w-xs mx-auto">
              {['Curated Collections', 'Exclusive Drops', 'Free Shipping Over $100'].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-white text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-16 py-32">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-compressed text-6xl md:text-7xl tracking-wider text-white mb-2">
                {mode === 'login' ? 'Welcome Back' : 'Join Us'}
              </h1>
              <p className="text-muted text-sm mb-10">
                {mode === 'login'
                  ? 'Sign in to access your account and order history.'
                  : 'Create an account to start shopping and save your favorites.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {mode === 'register' && (
                  <div className="group">
                    <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60 text-sm" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full bg-dark border pl-11 pr-4 py-3.5 text-white text-sm
                                   placeholder:text-muted/50 transition-all
                                   ${errors.name ? 'border-accent' : 'border-dark-border'}`}
                      />
                      {errors.name && <p className="text-accent text-xs mt-1 font-body">{errors.name}</p>}
                    </div>
                  </div>
                )}

                <div className="group">
                  <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60 text-sm" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full bg-dark border pl-11 pr-4 py-3.5 text-white text-sm
                                 placeholder:text-muted/50 transition-all
                                 ${errors.email ? 'border-accent' : 'border-dark-border'}`}
                    />
                    {errors.email && <p className="text-accent text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                </div>

                <div className="group">
                  <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60 text-sm" />
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) => update('password', e.target.value)}
                      placeholder="••••••••"
                      className={`w-full bg-dark border pl-11 pr-4 py-3.5 text-white text-sm
                                 placeholder:text-muted/50 transition-all
                                 ${errors.password ? 'border-accent' : 'border-dark-border'}`}
                    />
                    {errors.password && <p className="text-accent text-xs mt-1 font-body">{errors.password}</p>}
                  </div>
                </div>

                {mode === 'register' && (
                  <div className="group">
                    <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">Confirm Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60 text-sm" />
                      <input
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) => update('confirmPassword', e.target.value)}
                        placeholder="••••••••"
                        className={`w-full bg-dark border pl-11 pr-4 py-3.5 text-white text-sm
                                   placeholder:text-muted/50 transition-all
                                   ${errors.confirmPassword ? 'border-accent' : 'border-dark-border'}`}
                      />
                      {errors.confirmPassword && <p className="text-accent text-xs mt-1 font-body">{errors.confirmPassword}</p>}
                    </div>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full mt-2"
                  whileHover={submitting ? {} : { scale: 1.01 }}
                  whileTap={submitting ? {} : { scale: 0.99 }}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
                    </span>
                  ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </motion.button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dark-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-dark px-4 text-muted text-xs uppercase tracking-widest">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 border border-dark-border py-3.5
                                   text-muted hover:text-white hover:border-muted/30 transition-all text-sm">
                  <FaGoogle /> Google
                </button>
                <button className="flex items-center justify-center gap-3 border border-dark-border py-3.5
                                   text-muted hover:text-white hover:border-muted/30 transition-all text-sm">
                  <FaApple /> Apple
                </button>
              </div>

              <p className="text-center text-muted text-sm mt-8">
                {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                <button onClick={switchMode} className="text-accent hover:underline underline-offset-4 font-semibold">
                  {mode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
