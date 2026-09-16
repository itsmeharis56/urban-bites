import { useState } from "react";
import { Search, SearchX } from "lucide-react";
import { menuItems } from "./menu.js";
import FoodCard from "./FoodCard.jsx";

const categories = ["All", "Burgers", "Pizza", "Sides", "Drinks"];

export default function FoodMenu({ onAddToCart })  {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;

    const searchText =
      `${item.name} ${item.description}`.toLowerCase();

    const matchesSearch = searchText.includes(
      search.trim().toLowerCase()
    );

    return matchesCategory && matchesSearch;
  });

  function resetFilters() {
    setActiveCategory("All");
    setSearch("");
  }

  return (
    <section
      id="menu"
      className="scroll-mt-24 border-t border-white/10 bg-[#141414] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-orange-400">
              PICK YOUR NEXT CRAVING
            </p>

            <h2 className="text-4xl font-black text-white sm:text-5xl">
              The good stuff
              <span className="text-orange-500">.</span>
            </h2>

            <p className="mt-4 text-gray-400">
              From the first bite to the last sip.
            </p>
          </div>

          <label className="flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 focus-within:border-orange-400 lg:w-80">
            <Search
              size={20}
              aria-hidden="true"
              className="shrink-0 text-orange-400"
            />

            <span className="sr-only">Search the menu</span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your favorite food..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </label>
        </div>

        <div
          role="group"
          aria-label="Filter by food category"
          className="mt-9 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-orange-500 bg-orange-500 text-black"
                  : "border-white/15 text-gray-300 hover:border-orange-400 hover:text-orange-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p role="status" className="mt-6 text-sm text-gray-400">
          {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "item" : "items"} found
        </p>

        {filteredItems.length > 0 ? (
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
           
           <FoodCard
  key={item.id}
  item={item}
  onAddToCart={onAddToCart}
/>

            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <SearchX
              size={44}
              className="mx-auto mb-4 text-orange-400"
            />

            <h3 className="text-xl font-bold text-white">
              No bites found
            </h3>

            <p className="mt-2 text-gray-400">
              Try another food name or category.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 cursor-pointer rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400"
            >
              Show All Food
            </button>
          </div>
        )}
      </div>
    </section>
  );
}