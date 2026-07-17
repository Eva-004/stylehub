"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../cards/ProductCard";

const ProductsContainer = ({ products }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("");

    const categories = [
        "All",
        ...new Set(products.map((product) => product.category)),
    ];

    const filteredProducts = products
        .filter((product) => {
            const matchCategory =
                category === "All" || product.category === category;

            const matchSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            return matchCategory && matchSearch;
        })
        .sort((a, b) => {
            if (sortBy === "low-high") {
                return a.price - b.price;
            }

            if (sortBy === "high-low") {
                return b.price - a.price;
            }

            return 0;
        });

    return (
        <div className="w-11/12 mx-auto py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <p className="text-[#244D3F] font-semibold uppercase tracking-[4px] text-sm">
                    StyleHub Collection
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                    Discover Your Perfect Style
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
                    Browse our latest fashion collection. Search by product name,
                    filter by category, and sort by price to find your perfect look.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full lg:w-80 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#244D3F]"
                />

                <div className="flex flex-col sm:flex-row gap-4">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#244D3F]"
                    >
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#244D3F]"
                    >
                        <option value="">Sort By Price</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            No Products Found
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Try searching with a different keyword or category.
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ProductsContainer;