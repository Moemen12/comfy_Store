import { FeaturedProducts, Hero } from "../components";

import { customFetch } from "../utils/index";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryCLient) => async () => {
  const response = await queryCLient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
