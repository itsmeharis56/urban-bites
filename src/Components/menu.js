export const menuItems = [
  {
    id: 1,
    name: "Urban Classic Burger",
    category: "Burgers",
    price: 650,
    description: "Grilled beef, melted cheese, and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    spicy: false,
    vegetarian: false,
  },
  {
    id: 2,
    name: "Spicy Chicken Burger",
    category: "Burgers",
    price: 590,
    description: "Crispy chicken, spicy mayo, and fresh lettuce.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80",
    spicy: true,
    vegetarian: false,
  },
  {
    id: 3,
    name: "Classic Margherita",
    category: "Pizza",
    price: 1100,
    description: "Tomato sauce, mozzarella, and fresh basil.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    spicy: false,
    vegetarian: true,
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 1450,
    description: "Beef pepperoni, mozzarella, and chili flakes.",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80",
    spicy: true,
    vegetarian: false,
  },
  {
    id: 5,
    name: "Golden Fries",
    category: "Sides",
    price: 290,
    description: "Crispy golden fries with a sprinkle of sea salt.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    spicy: false,
    vegetarian: true,
  },
  {
    id: 6,
    name: "Iced Coffee",
    category: "Drinks",
    price: 390,
    description: "Chilled coffee with milk, served over ice.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
    spicy: false,
    vegetarian: true,
  },
];

export function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}