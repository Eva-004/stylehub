import Banner from "@/components/homePage/Banner";
import NewArrivals from "@/components/homePage/NewArrivals";
import { getProductData } from "@/lib/fetchData";



export default async function Home() {
  const products = await getProductData();
    const newArrivals = products.slice(0, 4);
    console.log(newArrivals);
  return (
   <div className="max-w-7xl mx-auto">
        <Banner/>
        <NewArrivals newArrivals={newArrivals}/>
   </div>
  );
}
