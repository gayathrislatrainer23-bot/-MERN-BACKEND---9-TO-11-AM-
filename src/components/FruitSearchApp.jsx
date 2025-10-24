//  Parent component renamed

import { useCallback, useState } from "react";
import FruitImage from "./FruitImage";

const fruits = {
  apple: "https://cdn-icons-png.flaticon.com/128/415/415733.png",
  banana: "https://cdn-icons-png.flaticon.com/128/2909/2909765.png",
  mango: "https://cdn-icons-png.flaticon.com/128/135/135620.png",
};

export default function FruitSearchApp() {
 const [query, setQuery] = useState("");

  //  useCallback ensures same function reused for same fruit
  const getFruit = useCallback(() => {
    return fruits[query] || null;
  }, [query]);

  return (
    <div >
      <h2> Fruit Search</h2>
      <input
        type="text"
        placeholder="Type fruit name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FruitImage getFruit={getFruit} />
    </div>
  );
}