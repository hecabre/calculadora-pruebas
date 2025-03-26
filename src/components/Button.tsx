import { ButtonInterface } from "../interfaces/ButtonInterface";

function Button({ onClick, value, important, wide }: ButtonInterface) {
    return (
        <button
            className={`w-16 h-16 text-2xl font-medium rounded-lg transition-all duration-200 cursor-pointer 
        ${important ? "bg-indigo-500 text-white hover:bg-indigo-400" : "bg-neutral-700 text-white hover:bg-neutral-600"}
        ${wide ? "col-span-3 w-full" : ""}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Button;
