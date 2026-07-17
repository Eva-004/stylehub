'use client'
import React from 'react';
import ProductCard from '../cards/ProductCard';
import { motion } from "framer-motion";

const NewArrivals =  ({newArrivals}) => {
    return (
        <div className="w-11/12 mx-auto py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <p className="text-[#244D3F] font-medium uppercase tracking-[3px] text-sm">
                    New Collection
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    New Arrivals
                </h2>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Explore our latest collection with modern styles, premium quality,
                    and everyday comfort.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {newArrivals.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default NewArrivals;