import { Flame, Leaf } from "lucide-react";
import { formatPrice } from "./menu.js";

export default function FoodCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a] transition duration-300 hover:-translate-y-1 hover:border-orange-500/50">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {item.category}
        </span>

        {item.spicy && (
          <span className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-black">
            <Flame size={14} />
            Spicy
          </span>
        )}

        {item.vegetarian && (
          <span className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-black">
            <Leaf size={14} />
            Vegetarian
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">
          {item.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
          {item.description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <span className="text-xl font-black text-orange-400">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </article>
  );
}