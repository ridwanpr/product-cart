import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import ConfirmButton from "./components/ConfirmButton";
import DeliveryNote from "./components/DeliveryNote";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  return (
    <div className="container mx-auto p-8 grid gap-6 md:grid-cols-[3fr_1fr] md:h-screen md:overflow-hidden">
      <main className="md:overflow-y-auto md:pr-4">
        <h1 className="font-bold text-4xl mb-4">Desserts</h1>
        <ProductGrid />
      </main>
      <aside className="bg-white p-4 h-fit rounded-xl" id="cart">
        <h2 className="text-red font-bold text-2xl mb-4">
          Your Cart <span>(7)</span>
        </h2>

        <CartItem />
        <CartItem />
        <CartItem />

        <CartSummary />
        <DeliveryNote />

        <ConfirmButton />
      </aside>
    </div>
  );
};

export default App;
