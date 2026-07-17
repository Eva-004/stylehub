"use client";

import { Card, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { toast } from "react-toastify";

const Order = ({ totalItems, totalPrice, clearCart, }) => {
    const handleOrderConfirm = ()=>{
        toast.success("Order Confirm Successfully!")
        clearCart();
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
        >
            <Card className="p-6 border border-gray-200 shadow-sm rounded-2xl">

                <div className="flex items-center gap-2 mb-6">
                    <MdOutlineShoppingBag
                        size={24}
                        className="text-[#244D3F]"
                    />

                    <h2 className="text-2xl font-bold">
                        Order Summary
                    </h2>
                </div>

                <div className="space-y-5">

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Total Items
                        </span>

                        <span className="font-semibold">
                            {totalItems}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Subtotal
                        </span>

                        <span className="font-semibold flex items-center">
                            <FaBangladeshiTakaSign />
                            {totalPrice}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Shipping
                        </span>

                        <span className="text-[#244D3F] font-semibold">
                            Free
                        </span>
                    </div>

                    <hr />

                    <div className="flex justify-between">

                        <span className="text-lg font-bold">
                            Grand Total
                        </span>

                        <span className="text-2xl font-bold flex items-center text-[#244D3F]">
                            <FaBangladeshiTakaSign />
                            {totalPrice}
                        </span>

                    </div>

                </div>

                <Button onClick={handleOrderConfirm}
                    className="mt-8 bg-[#244D3F] text-white hover:bg-[#1d3f33] transition-all duration-300"
                >
                    Confirm Order
                </Button>

                <Button
                    color="danger"
                    variant="bordered"
                    className="mt-3"
                    onClick={clearCart}
                >
                    Cancel Cart
                </Button>

                <div className="mt-8 border-t pt-5">

                    <h3 className="font-semibold">
                        Secure Checkout
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-6">
                        Your order is protected with secure checkout.
                        Review your cart before confirming your purchase.
                    </p>

                </div>

            </Card>
        </motion.div>
    );
};

export default Order;