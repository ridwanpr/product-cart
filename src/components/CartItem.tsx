const CartItem = () => {
  return (
    <div className="flex flex-row justify-between items-center pb-4 mb-4 border-b border-rose-100">
      <div>
        <p className="font-semibold text-rose-900">Classic Tiramisu</p>
        <div className="flex justify-start gap-2 text-sm">
          <span className="text-orange-700 font-semibold">1x</span>
          <span className="text-rose-400">@ $5.50</span>
          <span className="text-rose-500 font-semibold">$5.50</span>
        </div>
      </div>

      <button
        className="flex justify-center items-center h-5 w-5 border border-rose-400 rounded-full group hover:border-rose-900 transition-colors"
        aria-label="Remove item"
      >
        <img
          src="/images/icon-remove-item.svg"
          alt=""
          className="group-hover:brightness-50"
        />
      </button>
    </div>
  );
};

export default CartItem;
