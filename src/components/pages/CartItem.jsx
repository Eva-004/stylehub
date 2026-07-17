"use client";

import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";
import { PiStarLight } from "react-icons/pi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartItem = ({item,index,increaseQuantity,decreaseQuantity,removeFromCart,}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.08,
            }}
        >
            <Card className="p-5 border border-gray-200 shadow-sm rounded-2xl">

                <div className="flex flex-col md:flex-row gap-6">

                    <Image
                        src={item.image}
                        alt={item.name}
                        width={250}
                        height={250}
                        className="w-full md:w-48 h-56 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                        <p className="text-sm text-[#244D3F] font-medium">
                            {item.category}
                        </p>

                        <h2 className="text-2xl font-bold mt-1">
                            {item.name}
                        </h2>

                        <p className="text-gray-500 mt-3">
                            {item.description}
                        </p>

                        <div className="flex items-center gap-1 mt-4 text-yellow-500">
                            <PiStarLight />
                            {item.rating}
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-8 gap-6">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Price
                                </p>

                                <h3 className="flex items-center text-2xl font-bold text-[#244D3F]">
                                    <FaBangladeshiTakaSign />
                                    {item.price}
                                </h3>
                            </div>

                            <div>

                                <p className="text-sm text-gray-500 mb-2">
                                    Quantity
                                </p>

                                <div className="flex items-center border rounded-lg overflow-hidden">

                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="w-10 h-10 hover:bg-gray-100 transition"
                                    >
                                        -
                                    </button>

                                    <span className="w-12 text-center">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="w-10 h-10 bg-[#244D3F] text-white"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>


                            <div>

                                <p className="text-sm text-gray-500">
                                    Total
                                </p>

                                <h3 className="flex items-center text-2xl font-bold text-[#244D3F]">
                                    <FaBangladeshiTakaSign />
                                    {item.price * item.quantity}
                                </h3>

                            </div>


                            <Button
                                color="danger"
                                variant="bordered"
                                onPress={() => removeFromCart(item.id)}
                            >
                                Remove
                            </Button>

                        </div>

                    </div>

                </div>

            </Card>
        </motion.div>
    );
};

export default CartItem;