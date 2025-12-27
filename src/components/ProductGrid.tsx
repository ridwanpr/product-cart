import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
