const toyToFind = 3

const toys = [
    {
        id: 1,
        name: "Stuffed Animal",
        materials: ["felt", "plush", "fleece"],
        inStock: true,
        color: "Red",
        weight: 0.5,
        price: 6,
    },
    {
        id: 2,
        name: "Toy Car",
        materials: ["plastic", "lead", "rubber"],
        inStock: true,
        color: "Blue",
        weight: 0.2,
        price: 2,
    },
    {
        id: 3,
        name: "Music Box",
        materials: ["wood", "porcelain", "metal"],
        inStock: false,
        color: "Brown",
        weight: 0.3,
        price: 8,
    },
]

const actionFigure = {
    id: 4,
    name: "Action Figure",
    materials: ["plastic", "felt"],
    color: ["blue", "red"],
    weight: 0.2,
    price: 2,
}

const toyKeyboard = {
    id: 5,
    name: "Toy Keyboard",
    materials: ["plastic", "batteries", "electronics"],
    color: ["black", "white"],
    weight: 2,
    price: 12,
}

// New Toys
toys.push(actionFigure)
toys.push(toyKeyboard)

const windUpSoldier = {
    name: "Wind-Up Soldier",
    materials: ["plastic", "metal"],
    color: ["red", "white"],
    weight: 0.3,
    price: 3,
}

const inventoryAddToy = (toy) => {
    const lastIndex = toys.length -1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id 
    const idForNewToy = maxId + 1

    toy.id = idForNewToy
    toys.push(toy)

}
inventoryAddToy(windUpSoldier)

// Inflation + ID Search
for (const toy of toys) {
toy.price = toy.price*1.05
console.log(`This toy is a ${toy.color} ${toy.name}, ID#${toy.id} made out of ${toy.materials}
it costs $${toy.price}`)
}