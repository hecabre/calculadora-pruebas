import { useState } from "react";
import { BUTTONS } from "./const/buttons";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput(""); // Borra la expresión
    } else if (value === "=") {
      try {
        setInput(Function(`"use strict"; return (${input})`)().toString()); // Evalúa seguro
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value); // Construye la operación
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white">
      {/* Pantalla de la calculadora */}
      <div className="w-72 bg-neutral-800 text-right text-4xl font-mono p-6 rounded-lg shadow-lg">
        {input || "0"}
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
    </main>
  );
}

export default App;
