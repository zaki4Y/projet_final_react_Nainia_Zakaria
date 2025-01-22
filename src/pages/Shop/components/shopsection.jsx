import React, { useState, useEffect } from "react";
import "./shopsection.scss";
import { Label, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/img/master-slide-02.jpg";
import img2 from "../../../assets/img/master-slide-01.jpg";
import img3 from "../../../assets/img/master-slide-04.jpg";
import img4 from "../../../assets/img/banner-02.jpg";
import img5 from "../../../assets/img/banner-03.jpg";
import img6 from "../../../assets/img/banner-04.jpg";
import img7 from "../../../assets/img/banner-05.jpg";
import img8 from "../../../assets/img/banner-07.jpg";
import img9 from "../../../assets/img/banner-09.jpg";
import img10 from "../../../assets/img/item-10.jpg";
import img11 from "../../../assets/img/item-11.jpg";
import img12 from "../../../assets/img/item-12.jpg";
import img13 from "../../../assets/img/item-13.jpg";
import img14 from "../../../assets/img/item-03.jpg";
import img15 from "../../../assets/img/item-04.jpg";
import img16 from "../../../assets/img/item-15.jpg";
import img17 from "../../../assets/img/item-07.jpg";
import img18 from "../../../assets/img/banner-08.jpg";
import img19 from "../../../assets/img/shop-item-09.jpg";
import img20 from "../../../assets/img/blog-01.jpg";
import img21 from "../../../assets/img/blog-02.jpg";
import img22 from "../../../assets/img/blog-03.jpg";

export const Shopsection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products] = useState([
    {
      id: 1,
      title: "Boxy T-Shirt with Roll Sleeve Detail",
      images: img10,
      price: 20.00,
      category: "old",
    },
    {
      id: 2,
      title: "Boxy1 T-Shirt with Roll Sleeve Detail",
      images: img11,
      price: 20.00,
      category: "old",
    },
    {
      id: 3,
      title: "Boxy3 T-Shirt with Roll Sleeve Detail",
      images: img12,
      price: 30.00,
      category: "old",
    },
    {
      id: 4,
      title: "Boxy4 T-Shirt with Roll Sleeve Detail",
      images: img13,
      price: 10.00,
      category: "New",
    },
    {
      id: 5,
      title: "Boxy5 T-Shirt with Roll Sleeve Detail",
      images: img14,
      price: 30.00,
      category: "New",
    },
    {
      id: 6,
      title: "Boxy6 T-Shirt with Roll Sleeve Detail",
      images: img15,
      price: 20.00,
      category: "New",
    },
  ]);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filtered = filtered.filter(
        (item) => item.price >= min && item.price <= max
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, searchQuery, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handlePriceChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="bannerr h-[35vh] bg-gray-800 dark:bg-gray-800">
        <p className="text-white text-6xl w-full h-[100%] flex justify-center items-center">
          PRODUCT
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-5 gap-8">
        <div className="w-full md:w-[20%] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <div>
              <h1 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">Categories</h1>
              <div className="space-y-2">
                {["all", "old", "new"].map((category) => (
                  <h3
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-red-500 font-semibold"
                        : "text-gray-600 dark:text-gray-400"
                    } hover:text-gray-900 dark:hover:text-white transition-colors`}
                  >
                    {category.toUpperCase()}
                  </h3>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">Price</h1>
              <div className="space-y-3">
                {[
                  { value: "all", label: "All Prices" },
                  { value: "0-20", label: "$0 - $20" },
                  { value: "20-40", label: "$20 - $40" }
                ].map((range) => (
                  <div key={range.value} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="price-range"
                      value={range.value}
                      checked={selectedPriceRange === range.value}
                      onChange={handlePriceChange}
                      className="w-4 h-4 text-red-600 rounded border-gray-300 dark:border-gray-600"
                    />
                    <label className="text-gray-700 dark:text-gray-300">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600 text-gray-900 dark:text-white"
                placeholder="Search..."
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-2">
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Category: {selectedCategory.toUpperCase()}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedPriceRange !== "all" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Price: ${selectedPriceRange}
                    <button
                      onClick={() => setSelectedPriceRange("all")}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Showing {filteredProducts.length} of {products.length} items
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/shop/${product.id}`, { 
                  state: { 
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    images: product.images,
                    category: product.category
                  } 
                })}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="w-full h-64 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500 hover:bg-red-500 hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-playfair text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 font-poppins">
                      ${product.price.toFixed(2)}
                    </p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.category.toLowerCase() === "new"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {product.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold font-playfair text-gray-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-poppins">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
