import { ArrowUpRight, Flame, ChefHat, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 text-xs font-bold tracking-widest text-orange-400">
            <Flame size={16} />
            BIG FLAVORS. ZERO BORING BITES.
          </div>

          <h1 className="text-5xl leading-[1.08] font-black tracking-tight sm:text-7xl lg:text-8xl">
            Good food.
            <br />
            Great mood.
            <br />
            <span className="text-orange-500">Every bite.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-400">
            Juicy burgers, cheesy pizzas, and your favorite comfort food.
            Find something delicious and make it your kind of meal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-orange-400"
            >
              Explore Menu
              <ArrowUpRight size={20} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-400"
            >
              Our Story
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <ChefHat size={19} className="text-orange-400" />
              Made with care
            </span>

            <span className="flex items-center gap-2">
              <Leaf size={19} className="text-orange-400" />
              Flavor comes first
            </span>
          </div>
        </div>

        <div className="relative pb-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-orange-950">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"
              alt="Cheeseburger with lettuce, tomato, and a toasted bun"
              fetchPriority="high"
              className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            <Flame size={17} className="text-orange-400" />
            Meet your next craving
          </div>

          <div className="absolute right-4 bottom-0 left-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#1c1c1c] p-5 shadow-xl sm:right-8 sm:left-8">
            <div>
              <p className="mb-1 text-xs tracking-widest text-orange-400">
                THE SIGNATURE
              </p>
              <h2 className="text-xl font-bold">Urban Classic Burger</h2>
              <p className="mt-1 text-sm text-gray-400">
                Big bite. Bigger flavor.
              </p>
            </div>

            <a
              href="#menu"
              aria-label="Explore the food menu"
              className="shrink-0 rounded-full bg-orange-500 p-3 text-black transition hover:bg-orange-400"
            >
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}