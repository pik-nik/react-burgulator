import { BurgerContext } from "../burgerContext"
import { useContext } from "react"
export default function Menu(props) {
    const { add, removeAll, makeCarbonator } = useContext(BurgerContext)

    return (
        <section className={props.showMenu ? "menu" : "menu hide-menu"}>
            <h1>BURGULATOR</h1>
            <div className="menu-buttons">
                <h2>Menu</h2>
                <button onClick={() => add("cheese")}>cheese</button>
                <button onClick={() => add("tomato")}>tomato</button>
                <button onClick={() => add("onion")}>onion</button>
                <button onClick={() => add("beef-patty")}>beef patty</button>
                <button onClick={() => add("lettuce")}>lettuce</button>
                <button onClick={() => add("top-bun")}>top bun</button>
                <button onClick={() => add("bottom-bun")}>bottom bun</button>
                <button onClick={removeAll}>remove all</button>
                <button onClick={makeCarbonator}>Make the carbonator</button>
            </div>
            <p className="copyright">&copy; 2023 pik-nik</p>
        </section>
    )
}
