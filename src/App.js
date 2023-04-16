import "./App.css"
import React, { useState } from "react"
import Menu from "./Menu"
import Burger from "./Burger.jsx"

function App() {
    const [burger, setBurger] = useState([
        // "top-bun",
        // "lettuce",
        // "tomato",
        // "onion",
        // "cheese",
        // "beef-patty",
        // "bottom-bun",
    ])
    const [showMenu, setShowMenu] = useState(true)

    const add = ing => {
        setBurger([ing, ...burger])
    }

    const remove = idxTarget => {
        setBurger(burger.filter((ing, idx) => idx !== idxTarget))
    }

    const removeAll = () => {
        setBurger([])
    }

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

    const makeCarbonator = () => {
        setBurger([
            "top-bun",
            "bottom-bun",
            "bottom-bun",
            "bottom-bun",
            "bottom-bun",
            "bottom-bun",
            "bottom-bun",
        ])
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="App">
            <div className="burger-and-menu">
                <Menu
                    name="BURGULATOR"
                    onAdd={add}
                    showMenu={showMenu}
                    removeAll={removeAll}
                    makeCarbonator={makeCarbonator}
                />
                <section className="burger-on-plate">
                    <button className="toggle-menu-btn" onClick={toggleMenu}>
                        show/hide ingredients menu
                    </button>
                    <Burger burger={burger} onRemove={remove} />
                    <div className="plate"></div>
                    <div className="cheese-label">{cheesyLabel}</div>
                </section>
            </div>
            <div className="table-cloth"></div>
        </div>
    )
}

export default App
