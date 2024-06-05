import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 246,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 937,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 80,
      name: "🫐 Blueberries",
      color: "blue",
    },
    {
      id: 590,
      name: "🍊 Mandarin",
      color: "orange",
    },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </li>
        );
      })}
    </ul>
  );
}
