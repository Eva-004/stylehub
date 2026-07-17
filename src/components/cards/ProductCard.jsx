import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import { PiStarLight } from "react-icons/pi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductCard = ({ product }) => {
    return (
        <Card
            className="group overflow-hidden rounded-2xl border border-gray-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <Chip
                    size="sm"
                    className="absolute top-4 left-4 bg-[#244D3F] text-white transition-transform duration-300 group-hover:scale-110"
                >
                    NEW
                </Chip>
            </div>

            <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-gray-500">
                    {product.category}
                </p>

                <h3 className="text-lg font-semibold mt-2 min-h-14 line-clamp-2">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between ">
                    <span className="flex items-center gap-1 text-yellow-500 font-medium">
                        <PiStarLight />
                        {product.rating}
                    </span>

                    <span className="flex items-center gap-1 text-xl font-bold text-[#244D3F]">
                        <FaBangladeshiTakaSign />
                        {product.price}
                    </span>
                </div>

                <Link
                    href={`/products/${product.id}`}
                    className="mt-auto"
                >
                    <Button
                        radius="md"
                        className="w-full mt-6 bg-[#244D3F] text-white transition-all duration-300 group-hover:bg-[#1d3f33]"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default ProductCard;