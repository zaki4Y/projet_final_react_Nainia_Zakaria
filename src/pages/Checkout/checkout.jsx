import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MyContext } from '../../utils/ContextProvider';
import { FaArrowLeft, FaArrowRight, FaCheck, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';

const steps = ['Information', 'Shipping', 'Payment'];

export const Checkout = () => {
  const { cart } = useContext(MyContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '',
    zipCode: '', country: 'United States', cardNumber: '', expDate: '', cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cart.reduce((t, i) => {
    return t + parseFloat(i.price.replace('$', '')) * i.quantity;
  }, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateStep = (s) => {
    const errs = {};
    if (s === 0) {
      if (!form.firstName.trim()) errs.firstName = 'Required';
      if (!form.lastName.trim()) errs.lastName = 'Required';
      if (!form.email.trim()) errs.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
      if (!form.address.trim()) errs.address = 'Required';
    }
    if (s === 2) {
      if (!form.cardNumber.trim()) errs.cardNumber = 'Required';
      if (!form.expDate.trim()) errs.expDate = 'Required';
    }
    return errs;
  };

  const nextStep = () => {
    const errs = validateStep(step);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const prevStep = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  const placeOrder = async () => {
    const errs = validateStep(2);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success('Order placed successfully!');
    navigate('/shop');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-dark pt-28 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display italic text-2xl text-muted mb-6">Your cart is empty</p>
          <button onClick={() => navigate('/shop')} className="btn-primary">Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate('/cart')} className="text-muted hover:text-white transition-colors" aria-label="Back to cart">
            <FaArrowLeft />
          </button>
          <h1 className="font-compressed text-5xl md:text-6xl tracking-wider text-white">Checkout</h1>
        </div>

        <div className="flex items-center gap-0 mb-12 max-w-xl">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${i <= step ? 'text-accent' : 'text-muted'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold
                  ${i < step ? 'bg-accent border-accent text-white' :
                    i === step ? 'border-accent text-accent' : 'border-dark-border text-muted'}`}>
                  {i < step ? <FaCheck className="text-xs" /> : i + 1}
                </div>
                <span className={`hidden md:inline font-body text-xs uppercase tracking-widest ${i <= step ? 'text-white' : 'text-muted'}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-3 ${i < step ? 'bg-accent' : 'bg-dark-border'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <div className="space-y-6">
                    <h2 className="font-compressed text-3xl tracking-wider text-white mb-6">Contact & Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField label="First Name" value={form.firstName} onChange={(v) => update('firstName', v)} error={errors.firstName} />
                      <InputField label="Last Name" value={form.lastName} onChange={(v) => update('lastName', v)} error={errors.lastName} />
                    </div>
                    <InputField label="Email Address" type="email" value={form.email} onChange={(v) => update('email', v)} error={errors.email} />
                    <InputField label="Street Address" value={form.address} onChange={(v) => update('address', v)} error={errors.address} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <InputField label="City" value={form.city} onChange={(v) => update('city', v)} />
                      <InputField label="ZIP Code" value={form.zipCode} onChange={(v) => update('zipCode', v)} />
                      <InputField label="Country" value={form.country} onChange={(v) => update('country', v)} />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-compressed text-3xl tracking-wider text-white mb-6">Shipping Method</h2>
                    {[
                      { label: 'Standard Shipping', desc: '5-7 business days', price: '$9.99', free: false },
                      { label: 'Express Shipping', desc: '2-3 business days', price: '$19.99', free: false },
                      { label: 'Free Shipping', desc: '7-12 business days', price: '$0.00', free: true },
                    ].map((method, i) => (
                      <label key={i}
                        className={`flex items-center justify-between p-5 border cursor-pointer transition-all duration-300
                          ${i === 1 ? 'border-accent bg-accent/5' : 'border-dark-border hover:border-muted/30'}`}
                      >
                        <div className="flex items-center gap-4">
                          <input type="radio" name="shipping" defaultChecked={i === 1}
                            className="accent-accent w-4 h-4" />
                          <div>
                            <p className="text-white text-sm font-semibold">{method.label}</p>
                            <p className="text-muted text-xs">{method.desc}</p>
                          </div>
                        </div>
                        <span className="font-body text-sm text-white">{method.price}</span>
                      </label>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-compressed text-3xl tracking-wider text-white mb-6">Payment</h2>
                    <div className="flex gap-3 mb-6">
                      {['Visa', 'Mastercard', 'Amex'].map((card) => (
                        <div key={card}
                          className="px-4 py-2 border border-dark-border text-muted text-xs uppercase tracking-widest
                                     font-body bg-dark-card">
                          {card}
                        </div>
                      ))}
                    </div>
                    <InputField label="Card Number" placeholder="1234 5678 9012 3456" value={form.cardNumber}
                      onChange={(v) => update('cardNumber', v)} error={errors.cardNumber} />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField label="Expiration Date" placeholder="MM/YY" value={form.expDate}
                        onChange={(v) => update('expDate', v)} error={errors.expDate} />
                      <InputField label="CVV" placeholder="123" value={form.cvv}
                        onChange={(v) => update('cvv', v)} />
                    </div>
                    <p className="flex items-center gap-2 text-muted text-xs mt-4">
                      <FaLock className="text-accent" />
                      Your payment information is secure
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-10">
              <button onClick={prevStep}
                className={`font-body text-sm uppercase tracking-widest text-muted hover:text-white transition-colors
                  ${step === 0 ? 'invisible' : ''}`}>
                <span className="flex items-center gap-2"><FaArrowLeft className="text-xs" /> Back</span>
              </button>
              <button onClick={step === 2 ? placeOrder : nextStep}
                disabled={submitting}
                className="btn-primary flex items-center gap-3">
                {submitting ? (
                  <span className="flex items-center gap-3">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : step === 2 ? (
                  <>Place Order <FaLock className="text-xs" /></>
                ) : (
                  <>Continue <FaArrowRight className="text-xs" /></>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-dark-card border border-dark-border p-6 lg:sticky lg:top-28">
              <h3 className="font-compressed text-2xl tracking-wider text-white mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-dark-secondary shrink-0 overflow-hidden">
                      <img src={item.images} alt={item.title}
                        className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{item.title}</p>
                      <p className="text-muted text-xs mt-1">Qty: {item.quantity}</p>
                      {item.size && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-dark-border text-muted text-[10px] uppercase tracking-wider">
                          {item.size}
                        </span>
                      )}
                    </div>
                    <p className="text-white text-sm font-semibold shrink-0">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="text-white">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-dark-border pt-2 flex justify-between font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-accent text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function InputField({ label, value, onChange, type = 'text', placeholder = '', error }) {
  return (
    <div className="group">
      <label className="block font-body text-xs uppercase tracking-widest text-muted mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-dark border px-4 py-3.5 text-white text-sm
                   placeholder:text-muted/50 transition-all duration-300
                   ${error ? 'border-accent' : 'border-dark-border'}`}
      />
      {error && <p className="text-accent text-xs mt-1 font-body">{error}</p>}
    </div>
  );
}
