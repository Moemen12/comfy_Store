import SectionTitle from "./SectionTitle";

import ProductsGrid from "./ProductsGrid";
const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products"></SectionTitle>
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
