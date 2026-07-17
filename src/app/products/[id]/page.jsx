import AddToCart from '@/components/pages/AddToCart';
import { getProductData } from '@/lib/fetchData';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign, FaBoxOpen, FaPalette } from 'react-icons/fa6';
import { MdCategory, MdCheckCircle, MdOutlineStarPurple500 } from 'react-icons/md';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const products = await getProductData();
    const product = products.find((item) => item.id == id);

    return {
        title: `${product.name} | StyleHub`,
    };
}

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const products = await getProductData();
    const expectedProducts = products.find(product => product.id == id);
    
    return (
        <div>
            <div className="w-11/12 mx-auto py-16">
                <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">

                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src={expectedProducts.image}
                                alt={expectedProducts.name}
                                width={700}
                                height={700}
                                className="w-full h-125 object-contain hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="flex flex-col justify-center">

                            <Chip
                                className="w-fit bg-[#244D3F] text-white mb-4"
                                radius="sm"
                            >
                                {expectedProducts.category}
                            </Chip>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {expectedProducts.name}
                            </h1>

                            <div className="flex items-center gap-2 mt-4 text-yellow-500">
                                <MdOutlineStarPurple500 size={22} />
                                <span className="font-medium text-gray-700">
                                    {expectedProducts.rating} / 5
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mt-6 text-3xl font-bold text-[#244D3F]">
                                <FaBangladeshiTakaSign />
                                <span>{expectedProducts.price}</span>
                            </div>

                            <p className="text-gray-600 leading-7 mt-6">
                                {expectedProducts.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                                <div className="flex items-center gap-3">
                                    <MdCategory className="text-2xl text-[#244D3F]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-semibold">{expectedProducts.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaPalette className="text-xl text-[#244D3F]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Colors</p>
                                        <p className="font-semibold">
                                            {expectedProducts.colors.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaBoxOpen className="text-xl text-[#244D3F]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Sizes</p>
                                        <p className="font-semibold">
                                            {expectedProducts.sizes.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdCheckCircle className="text-xl text-[#244D3F]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Availability</p>
                                        <p
                                            className={`font-semibold ${expectedProducts.inStock
                                                ? "text[#244D3F]"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {expectedProducts.inStock ? "In Stock" : "Out of Stock"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <AddToCart expectedProducts={expectedProducts}></AddToCart>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetailsPage;