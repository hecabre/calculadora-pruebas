import { useState } from "react";
import { BUTTONS } from "./const/buttons";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const expression = input.replace(/(\d+)%(\d+)/g, "($1/100)*$2");
        setInput(Function(`"use strict"; return (${expression})`)().toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 h-screen text-white">
      <div className="bg-neutral-800 px-7 py-4 rounded-lg shadow-lg">
        <div className="w-72 bg-neutral-900/40 text-right font-mono p-6 rounded-lg shadow-lg overflow-hidden">
          <div className="text-3xl" style={{ fontSize: `${input.length > 12 ? "1.5rem" : "3rem"}` }}>
            {input || "0"}
          </div>
        </div>

        {/* Botones */}
        <section className="grid grid-cols-4 gap-2 w-72 mt-5">
          {BUTTONS.map(({ value, important, wide }) => (
            <Button
              key={value}
              value={value}
              important={important}
              wide={wide}
              onClick={() => handleClick(value)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
