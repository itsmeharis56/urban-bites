import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "./menu.js";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section
      id="cart"
      className="scroll-mt-24 border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold tracking-[0.25em] text-orange-400">
          YOUR NEXT GREAT MEAL
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Your cart<span className="text-orange-500">.</span>
        </h2>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-white/20 p-12 text-center">
            <ShoppingBag
              size={42}
              className="mx-auto text-orange-400"
            />
            <p className="mt-4 text-gray-400">
              Your cart is waiting for something delicious.
            </p>
            <a
              href="#menu"
              className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 font-bold text-black"
            >
              Explore Menu
            </a>
          </div>
        ) : (
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a] p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-orange-400">
                      {formatPrice(item.price)} each
                    </p>

                    <div className="mt-3 inline-flex items-center gap-4 rounded-full bg-white/5 p-1">
                      <button
                        type="button"
                        disabled={item.quantity === 1}
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name} quantity`}
                        className="rounded-full p-2 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                        className="rounded-full p-2 hover:bg-white/10"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="mt-3 rounded-lg p-2 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
              <h3 className="text-xl font-bold">Cart Summary</h3>

              <div className="mt-6 flex justify-between text-gray-400">
                <span>Items</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="mt-5 flex justify-between border-t border-white/10 pt-5 text-xl font-bold">
                <span>Total</span>
                <span className="text-orange-400">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                Demo cart only. Orders and payments are not processed.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}