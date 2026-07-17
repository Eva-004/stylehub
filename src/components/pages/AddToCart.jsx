'use client'

import useCart from '@/hooks/UseCart';
import { Button } from '@heroui/react';

const AddToCart = ({expectedProducts}) => {
    const { addToCart } = useCart();

    return (
        <Button onClick={() => addToCart(expectedProducts)}
            className={`mt-10 w-full md:w-56 transition-all duration-300 ${expectedProducts.inStock
                ? "bg-[#244D3F] text-white hover:bg-[#1d3f33] hover:scale-105 hover:shadow-lg"
                : "bg-gray-400 text-black cursor-not-allowed"
                }`}
            size="lg"
            isDisabled={!expectedProducts.inStock}  >
            {expectedProducts.inStock ? "Add to Cart" : "Not Available"}
        </Button>
    );
};

export default AddToCart;