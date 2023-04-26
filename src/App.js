import "./App.css"
import React, { useState } from "react"
import Menu from "./components/Menu"
import Burger from "./components/Burger.jsx"
import CheesyLabel from "./components/CheesyLabel"

function App() {
    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="App">
            <div className="burger-and-menu">
                <section className="burger-on-plate">
                    <button className="toggle-menu-btn" onClick={toggleMenu}>
                        show/hide ingredients menu
                    </button>
                    <Burger />
                    <div className="plate"></div>
                    <CheesyLabel />
                </section>
                <Menu showMenu={showMenu} />
            </div>
            <div className="table-cloth"></div>
        </div>
    )
}

export default App

//  move cheesy label to component
