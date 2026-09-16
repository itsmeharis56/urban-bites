import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import FoodMenu from "./Components/FoodMenu.jsx";
import FoodAssistant from "./Components/FoodAssistant.jsx";
import Cart from "./Components/Cart.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

import { menuItems } from "./Components/menu.js";

const CART_KEY = "urban-bites-cart";

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CART_KEY) || "[]"
    );

    if (!Array.isArray(saved)) return [];

    return menuItems.flatMap((item) => {
      const entry = saved.find(
        (savedItem) => savedItem?.id === item.id
      );

      if (
        !entry ||
        !Number.isSafeInteger(entry.quantity) ||
        entry.quantity < 1
      ) {
        return [];
      }

      return [{ ...item, quantity: entry.quantity }];
    });
  } catch {
    return [];
  }
}

export default function App() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    try {
      const saved = cart.map(({ id, quantity }) => ({
        id,
        quantity,
      }));

      localStorage.setItem(CART_KEY, JSON.stringify(saved));
    } catch {
      // Keep the cart usable if browser storage is unavailable.
    }
  }, [cart]);

  function addToCart(item) {
    setCart((currentCart) => {
      const exists = currentCart.some(
        (entry) => entry.id === item.id
      );

      if (exists) {
        return currentCart.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  }

  function changeQuantity(id, change) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  }

  function removeItem(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FoodMenu onAddToCart={addToCart} />

        <FoodAssistant onAddToCart={addToCart} />

        <Cart
          cart={cart}
          changeQuantity={changeQuantity}
          removeItem={removeItem}
        />

        <About />
        <Contact />
      </main>

      <Footer />

      <a
        href="#cart"
        className="fixed right-5 bottom-5 z-40 rounded-full bg-orange-500 px-6 py-4 font-bold text-black shadow-xl transition hover:bg-orange-400"
      >
        View Cart (
        <span aria-live="polite" aria-atomic="true">
          {cartCount}
        </span>
        )
      </a>
    </>
  );
}