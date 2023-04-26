import { useContext } from "react"
import { BurgerContext } from "../burgerContext"
import getCheesyLabel from "../getCheesyLabel"

export default function CheesyLabel() {
    const { burger } = useContext(BurgerContext)
    return <div className="cheese-label">{getCheesyLabel(burger)}</div>
}
