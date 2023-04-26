import { useContext } from "react"
import { BurgerContext } from "../burgerContext"
export default function CheesyLabel() {
    const { burger } = useContext(BurgerContext)

    const cheeseCount = burger.filter(ing => ing === "cheese").length

    const cheesyLabel =
        cheeseCount <= 1
            ? ""
            : cheeseCount === 2
            ? "double cheese"
            : cheeseCount === 3
            ? "triple cheese"
            : cheeseCount === 4
            ? "quadruple cheese"
            : cheeseCount === 5
            ? "quintuple cheese"
            : "maximum cheese"

    return <div className="cheese-label">{cheesyLabel}</div>
}
