import Ingredient from "./Ingredient.jsx"

export default function Burger({ burger, onRemove: remove }) {
    return (
        <div className="burger">
            {burger.map((ing, idx) => (
                <Ingredient
                    onRemove={remove}
                    key={idx}
                    ing={{ name: ing, id: idx }}
                />
            ))}
        </div>
    )
}
