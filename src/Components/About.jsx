import { ChefHat, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Made with care",
    description: "Comfort food with bold flavors and thoughtful details.",
  },
  {
    icon: Leaf,
    title: "Something for everyone",
    description: "From cheesy classics to tasty vegetarian favorites.",
  },
  {
    icon: Heart,
    title: "Good food, good company",
    description: "Because the best meals are the ones we share.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 bg-[#171717] px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
            alt="Warm restaurant interior with wooden tables and lighting"
            loading="lazy"
            className="aspect-4/3 w-full rounded-3xl object-cover"
          />

          <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/15 bg-black/75 p-5 backdrop-blur-md">
            <p className="text-xs tracking-[0.2em] text-orange-400">
              THE URBAN BITES IDEA
            </p>
            <p className="mt-2 text-xl font-bold">
              A little comfort. A lot of flavor.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-orange-400">
            OUR STORY
          </p>

          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            More than a meal.
            <br />
            <span className="text-orange-500">A little moment.</span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            Urban Bites is a concept restaurant built around a simple
            idea: make everyday meals feel special. Think bold burgers,
            comforting pizzas, and something refreshing on the side.
          </p>

          <div className="mt-8 space-y-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}