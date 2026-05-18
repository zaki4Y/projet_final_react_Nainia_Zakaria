import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiX } from 'react-icons/hi';

import img10 from '../../../assets/img/item-10.jpg';
import img11 from '../../../assets/img/item-11.jpg';
import img12 from '../../../assets/img/item-12.jpg';
import img13 from '../../../assets/img/item-13.jpg';
import img14 from '../../../assets/img/item-03.jpg';
import img15 from '../../../assets/img/item-04.jpg';

const productsData = [
  { id: 1, title: 'Boxy T-Shirt with Roll Sleeve Detail', images: img10, price: 20.00, category: 'old' },
  { id: 2, title: 'Boxy1 T-Shirt with Roll Sleeve Detail', images: img11, price: 20.00, category: 'old' },
  { id: 3, title: 'Boxy3 T-Shirt with Roll Sleeve Detail', images: img12, price: 30.00, category: 'old' },
  { id: 4, title: 'Boxy4 T-Shirt with Roll Sleeve Detail', images: img13, price: 10.00, category: 'New' },
  { id: 5, title: 'Boxy5 T-Shirt with Roll Sleeve Detail', images: img14, price: 30.00, category: 'New' },
  { id: 6, title: 'Boxy6 T-Shirt with Roll Sleeve Detail', images: img15, price: 20.00, category: 'New' },
];

function ProductCard({ product, index }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: y * -12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/shop/${product.id}`, {
        state: {
          id: product.id,
          title: product.title,
          price: `$${product.price}`,
          images: product.images,
          category: product.category,
        },
      })}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/shop/${product.id}`, {
        state: {
          id: product.id,
          title: product.title,
          price: `$${product.price}`,
          images: product.images,
          category: product.category,
        },
      })}
    >
      <motion.div
        style={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-dark-card border border-dark-border overflow-hidden"
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.images}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-accent text-white py-3 font-body text-xs uppercase tracking-widest
                               hover:bg-accent/90 transition-colors">
              Quick View
            </button>
          </div>
          {product.category.toLowerCase() === 'new' && (
            <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              New
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-body text-white text-sm font-medium truncate">{product.title}</h3>
          <p className="font-compressed text-2xl tracking-wider text-accent mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const Shopsection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    let filtered = [...productsData];
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter((item) => item.price >= min && item.price <= max);
    }
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  const clearAll = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
  };

  const hasFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || searchQuery;

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="relative h-48 md:h-56 bg-dark-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-compressed text-7xl md:text-8xl lg:text-9xl tracking-wider text-white">Products</h1>
          <p className="font-display italic text-muted text-lg mt-2">Curated for the bold</p>
        </div>
      </div>

      <div className="section-padding py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 shrink-0">
            <div className="bg-dark-card border border-dark-border p-6 lg:sticky lg:top-28">
              <h2 className="font-compressed text-2xl tracking-wider text-white mb-6">Filters</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-muted mb-3">Category</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'old', label: 'Old' },
                      { value: 'new', label: 'New' },
                    ].map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`block w-full text-left font-body text-sm py-1.5 transition-colors duration-200 ${
                          selectedCategory === cat.value ? 'text-accent font-semibold' : 'text-muted hover:text-white'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-dark-border pt-6">
                  <h3 className="font-body text-xs uppercase tracking-widest text-muted mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: '0-20', label: '$0 — $20' },
                      { value: '20-40', label: '$20 — $40' },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={selectedPriceRange === range.value}
                          onChange={(e) => setSelectedPriceRange(e.target.value)}
                          className="accent-accent w-4 h-4"
                        />
                        <span className="font-body text-sm text-muted group-hover:text-white transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-dark-border pt-6">
                  <div className="relative">
                    <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50 text-sm" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full bg-dark border border-dark-border pl-9 pr-3 py-2.5 text-white text-sm
                                 placeholder:text-muted/30 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                {hasFilters && (
                  <button
                    onClick={clearAll}
                    className="w-full text-center font-body text-xs uppercase tracking-widest text-accent hover:text-white transition-colors pt-2"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <FilterTag label={`Category: ${selectedCategory}`} onRemove={() => setSelectedCategory('all')} />
                )}
                {selectedPriceRange !== 'all' && (
                  <FilterTag label={`Price: $${selectedPriceRange}`} onRemove={() => setSelectedPriceRange('all')} />
                )}
              </div>
              <p className="font-body text-sm text-muted shrink-0">
                <span className="text-white">{filteredProducts.length}</span> / {productsData.length} items
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="font-display italic text-2xl text-muted mb-4">No products found</p>
                  <p className="font-body text-sm text-muted/60 mb-6">Try adjusting your filters</p>
                  <button onClick={clearAll} className="btn-primary">Reset Filters</button>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

function FilterTag({ label, onRemove }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="inline-flex items-center gap-2 bg-dark-card border border-dark-border px-3 py-1.5 font-body text-xs text-muted"
    >
      {label}
      <button onClick={onRemove} className="text-muted hover:text-accent transition-colors" aria-label={`Remove ${label} filter`}>
        <HiX className="text-sm" />
      </button>
    </motion.span>
  );
}
