import BackgroundImageContainer from "./Layout/Containers/BackgroundImageContainer";
import { Products } from "@/lib/Products/constants";
import ProductCard from "./ProductCard/ProductCard";
const FindAPlan = () => {
  return (
    <BackgroundImageContainer className="py-12">
      <div className="w-screen md:max-w-[1200px] justify-center flex flex-col text-center p-6 md:p-0">
        <h1>Find a plan that suits you</h1>
        <div className="flex flex-row flex-wrap">
          {Products.map((product) => {
            if (!product.display) return;
            return <ProductCard key={product.index} {...product} />;
          })}
        </div>
      </div>
    </BackgroundImageContainer>
  );
};

export default FindAPlan;
