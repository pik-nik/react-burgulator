const getCheesyLabel = ingredients => {
    const cheeseCount = ingredients.filter(ing => ing === "cheese").length

    return {
        2: "double cheese",
        3: "triple cheese",
        4: "quadruple cheese",
        5: "quintuple cheese",
        6: "maximum cheese",
    }[cheeseCount]
}

export default getCheesyLabel

// const cheesyLabel =
//     cheeseCount <= 1
//         ? ""
//         : cheeseCount === 2
//         ? "double cheese"
//         : cheeseCount === 3
//         ? "triple cheese"
//         : cheeseCount === 4
//         ? "quadruple cheese"
//         : cheeseCount === 5
//         ? "quintuple cheese"
//         : "maximum cheese"
