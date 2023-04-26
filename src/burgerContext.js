import { useState, createContext } from "react"

export const BurgerContext = createContext()

export function BurgerProvider(props) {
    const [burger, setBurger] = useState([
        // "top-bun",
        // "lettuce",
        // "tomato",
        // "onion",
        // "cheese",
        // "beef-patty",
        // "bottom-bun",
    ])

    const add = ing => {
        setBurger([ing, ...burger])
    }

    const remove = idxTarget => {
        setBurger(burger.filter((ing, idx) => idx !== idxTarget))
    }

    const removeAll = () => {
        setBurger([])
    }

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

    const value = { burger, add, remove, removeAll, makeCarbonator }

    return (
        <BurgerContext.Provider value={value}>
            {props.children}
        </BurgerContext.Provider>
    )
}
