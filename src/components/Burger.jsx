import { useContext } from "react"
import Ingredient from "./Ingredient.jsx"
import { BurgerContext } from "../burgerContext.js"

export default function Burger() {
    const { burger, remove } = useContext(BurgerContext)

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
