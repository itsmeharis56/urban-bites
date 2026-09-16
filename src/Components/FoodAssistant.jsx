import { useState } from "react";
import { Sparkles, Plus, SearchX } from "lucide-react";
import { menuItems, formatPrice } from "./menu.js";

export default function FoodAssistant({ onAddToCart }) {
  const [budget, setBudget] = useState("1000");
  const [preference, setPreference] = useState("any");
  const [spice, setSpice] = useState("any");
  const [results, setResults] = useState(null);
  const [feedback, setFeedback] = useState("");

  function suggestFood(event) {
    event.preventDefault();

    const matches = menuItems
      .filter((item) => {
        const withinBudget = item.price <= Number(budget);

        const matchesPreference =
          preference === "any" ||
          (preference === "vegetarian" && item.vegetarian) ||
          (preference === "meat" && !item.vegetarian);

        const matchesSpice =
          spice === "any" ||
          (spice === "spicy" && item.spicy) ||
          (spice === "mild" && !item.spicy);

        return withinBudget && matchesPreference && matchesSpice;
      })
      .sort((a, b) => a.price - b.price);

    setResults(matches);
    setFeedback("");
  }

  function clearResults() {
    setResults(null);
    setFeedback("");
  }

  function addSuggestion(item) {
    onAddToCart(item);
    setFeedback(`${item.name} added to your cart.`);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-white/15 bg-[#242424] px-4 py-3 text-white outline-none focus:border-orange-400";

  return (
    <section
      id="assistant"
      className="scroll-mt-24 border-t border-white/10 bg-[#171717] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 text-xs font-bold tracking-widest text-orange-400">
              <Sparkles size={16} />
              YOUR FOOD FINDER
            </span>

            <h2 className="mt-6 text-4xl leading-tight font-black sm:text-5xl">
              Less scrolling.
              <br />
              <span className="text-orange-500">
                More delicious.
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Not sure what to pick? Tell us your budget and taste.
              We will find matching dishes from our menu.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Matches use menu filters. Budget applies to one item,
              not the combined price of all suggestions.
            </p>
          </div>

          <form
            onSubmit={suggestFood}
            onChange={clearResults}
            className="rounded-3xl border border-white/10 bg-[#1c1c1c] p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold">
              What are you craving?
            </h3>

            <div className="mt-6">
              <label htmlFor="food-budget" className="text-sm">
                Maximum price per item (PKR)
              </label>

              <input
                id="food-budget"
                type="number"
                min="1"
                step="1"
                required
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="food-preference" className="text-sm">
                  Food preference
                </label>

                <select
                  id="food-preference"
                  value={preference}
                  onChange={(event) =>
                    setPreference(event.target.value)
                  }
                  className={fieldClass}
                >
                  <option value="any">Anything</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="meat">Meat / Chicken</option>
                </select>
              </div>

              <div>
                <label htmlFor="food-spice" className="text-sm">
                  Spice level
                </label>

                <select
                  id="food-spice"
                  value={spice}
                  onChange={(event) => setSpice(event.target.value)}
                  className={fieldClass}
                >
                  <option value="any">Any spice level</option>
                  <option value="mild">Non-spicy</option>
                  <option value="spicy">Spicy</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-black transition hover:bg-orange-400"
            >
              <Sparkles size={19} />
              Find My Food
            </button>
          </form>
        </div>

        <p role="status" className="mt-6 text-sm text-orange-300">
          {results !== null &&
            `${results.length} matching ${
              results.length === 1 ? "item" : "items"
            } found.`}
        </p>

        {results !== null &&
          (results.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-[#202020] p-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-16/10 w-full rounded-xl object-cover"
                  />

                  <h3 className="mt-4 text-lg font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.vegetarian ? "Vegetarian" : "Meat / Chicken"}
                    {" · "}
                    {item.spicy ? "Spicy" : "Non-spicy"}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-bold text-orange-400">
                      {formatPrice(item.price)}
                    </span>

                    <button
                      type="button"
                      onClick={() => addSuggestion(item)}
                      aria-label={`Add ${item.name} to cart`}
                      className="flex cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-black hover:bg-orange-400"
                    >
                      <Plus size={16} />
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-white/15 p-8 text-center">
              <SearchX
                size={36}
                className="mx-auto text-orange-400"
              />
              <h3 className="mt-4 text-lg font-bold">
                No matching dishes yet
              </h3>
              <p className="mt-2 text-gray-400">
                Try a higher budget or change your preferences.
              </p>
            </div>
          ))}

        <p role="status" className="mt-4 text-sm text-lime-400">
          {feedback}
        </p>
      </div>
    </section>
  );
}