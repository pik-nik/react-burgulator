import { v4 as uuidv4 } from "uuid"
export default function Ingredient({ ing, onRemove }) {
    const ingredientClass = `${ing.name} ingredient ${
        ing.id === 0 ? "bounce-in-top" : ""
    }`
    return (
        <div
            key={uuidv4()}
            onClick={() => onRemove(ing.id)}
            className={ingredientClass}
        ></div>
    )
}
