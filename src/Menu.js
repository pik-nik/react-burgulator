export default function Menu(props) {
    return (
        <section className={props.showMenu ? "menu" : "menu hide-menu"}>
            <h1>{props.name}</h1>
            <div className="menu-buttons">
                <h2>Menu</h2>
                <button onClick={() => props.onAdd("cheese")}>cheese</button>
                <button onClick={() => props.onAdd("tomato")}>tomato</button>
                <button onClick={() => props.onAdd("onion")}>onion</button>
                <button onClick={() => props.onAdd("beef-patty")}>
                    beef patty
                </button>
                <button onClick={() => props.onAdd("lettuce")}>lettuce</button>
                <button onClick={() => props.onAdd("top-bun")}>top bun</button>
                <button onClick={() => props.onAdd("bottom-bun")}>
                    bottom bun
                </button>
                <button onClick={props.removeAll}>remove all</button>
                <button onClick={props.makeCarbonator}>
                    Make the carbonator
                </button>
            </div>
            <p className="copyright">&copy; 2023 pik-nik</p>
        </section>
    )
}
