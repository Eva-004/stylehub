"use client";

import Link from "next/link";
import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import {
  FaShirt,
  FaBagShopping,
} from "react-icons/fa6";
import {
  GiAmpleDress,
  GiRunningShoe,
  GiTrousers,
} from "react-icons/gi";
import { PiTShirt } from "react-icons/pi";

const categories = [
  {
    id: 1,
    name: "T-Shirt",
    icon: <PiTShirt size={38} />,
  },
  {
    id: 2,
    name: "Shirt",
    icon: <FaShirt size={38} />,
  },
  {
    id: 3,
    name: "Jeans",
    icon: <GiTrousers size={38} />,
  },
  {
    id: 4,
    name: "Kurti",
    icon: <GiAmpleDress size={38} />,
  },
  {
    id: 5,
    name: "Shoes",
    icon: <GiRunningShoe size={38} />,
  },
  {
    id: 6,
    name: "Bags",
    icon: <FaBagShopping size={38} />,
  },
];

const PopularCategories = ({products}) => {
  return (
    <section className="w-11/12 mx-auto py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="uppercase tracking-[4px] text-sm font-medium text-[#244D3F]">
          Shop By Category
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Popular Categories
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover fashion essentials by exploring your favorite categories.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((category, index) => (

          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
          >

            <Link
              href={`/products?category=${category.name}`}
            >
              <Card className="group h-44 flex items-center justify-center cursor-pointer border border-gray-200 hover:border-[#244D3F] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="flex flex-col items-center">

                  <div className="w-16 h-16 rounded-full bg-[#244D3F]/10 flex items-center justify-center text-[#244D3F] group-hover:bg-[#244D3F] group-hover:text-white transition-all duration-300">

                    {category.icon}

                  </div>

                  <h3 className="font-semibold text-lg mt-5">
                    {category.name}
                  </h3>

                </div>

              </Card>
            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default PopularCategories;