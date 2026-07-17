import { Card, Skeleton } from "@heroui/react";

const ProductCardSkeleton = () => {
    return (
        <Card className="overflow-hidden rounded-2xl border border-gray-200 h-full">
            
            <div className="relative">
                <Skeleton className="w-full h-72 rounded-none" />

                <Skeleton className="absolute top-4 left-4 w-14 h-6 rounded-full" />
                <Skeleton className="absolute top-4 right-4 w-20 h-6 rounded-full" />
            </div>

           
            <div className="p-5 flex flex-col flex-1">
                <Skeleton className="w-20 h-4 rounded-lg" />

                <Skeleton className="w-full h-6 rounded-lg mt-4" />
                <Skeleton className="w-3/4 h-6 rounded-lg mt-2" />

                <div className="flex justify-between items-center mt-6">
                    <Skeleton className="w-14 h-5 rounded-lg" />
                    <Skeleton className="w-20 h-6 rounded-lg" />
                </div>

                <Skeleton className="w-full h-11 rounded-xl mt-6" />
            </div>
        </Card>
    );
};

export default ProductCardSkeleton;