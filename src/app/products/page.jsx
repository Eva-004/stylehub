import ProductsContainer from "@/components/pages/ProductsContainer";
import { getProductData } from "@/lib/fetchData";

export const metadata = {
    title: 'Products | StyleHub',
}

const ProductsPage = async({ searchParams }) => {
     const params = await searchParams;
    const products = await getProductData();
    console.log(products);
    return (
        <div className="w-11/12 mx-auto">
            <ProductsContainer products={products} defaultCategory={params.category || "All"}/>

        </div>
    );
};

export default ProductsPage;