const ProductCard = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/image-baklava-desktop.jpg"
          alt=""
          className="rounded-xl mb-4"
        />
        <button className="px-8 py-2 gap-2 flex items-center absolute z-10 bottom-0 left-1/2 -translate-x-1/2 border border-rose-300 bg-rose-50 font-semibold rounded-full -mb-5 whitespace-nowrap w-max">
          <img src="/images/icon-add-to-cart.svg" alt="" className="h-4 w-4" />{" "}
          Add to Cart
        </button>
      </div>
      <p className="text-rose-500 pt-4">Waffle</p>
      <p className="font-semibold">Waffle with Berries</p>
      <p className="text-red font-bold">$6.50</p>
    </div>
  );
};

export default ProductCard;
