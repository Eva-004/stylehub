"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Card } from "@heroui/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import useCart from "@/hooks/UseCart";
import CartItem from "@/components/pages/CartItem";
import Order from "@/components/pages/Order";



const CartPage = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <section className="w-11/12 mx-auto py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="max-w-xl mx-auto py-16 px-8 text-center shadow-sm border border-gray-200">

                        <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full bg-[#244D3F]/10 flex items-center justify-center">
                                <HiOutlineShoppingBag
                                    size={40}
                                    className="text-[#244D3F]"
                                />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-6">
                            Your Cart is Empty
                        </h2>

                        <p className="text-gray-500 mt-4 leading-7">
                            Looks like you haven`t added any products yet.
                            Explore our latest collection and find your next
                            favorite outfit.
                        </p>

                        <Link href="/products">
                            <Button
                                className="mt-8 bg-[#244D3F] text-white"
                                size="lg"
                            >
                                Continue Shopping
                            </Button>
                        </Link>

                    </Card>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="w-11/12 mx-auto py-16">

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-[#244D3F] hover:underline"
                >
                    <FaArrowLeft />
                    Continue Shopping
                </Link>

                <p className="uppercase tracking-[4px] text-sm text-[#244D3F] font-medium mt-6">
                    Shopping Cart
                </p>

                <h1 className="text-4xl font-bold mt-2">
                    Review Your Cart
                </h1>

                <p className="text-gray-500 mt-3">
                    Check your selected products before placing your order.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-5">
                    {cart.map((item, index) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            index={index}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>

                <div>

                   <Order totalItems={totalItems} totalPrice={totalPrice} clearCart={clearCart}></Order>

                </div>

            </div>

        </section>
    );
};

export default CartPage;