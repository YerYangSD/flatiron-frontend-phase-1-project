// Select Elements
const selection1 = document.querySelector("#selection-1")
const selection2 = document.querySelector("#selection-2")
const firstImage = document.querySelector("#first-image")
const secondImage = document.querySelector("#second-image")

// Function Calls
getFruitData()

// This function fetches a get request the provided URL to get a Fruit Collection
function getFruitData() {
    return fetch("http://localhost:3000/fruits")
        .then(response => response.json())
        .then(fruitData => {
            // console.log(fruitData)
            renderFruitData(fruitData)
        })
        .catch(error => alert(error))
}

// Displays fruit names to the dropdowns
function renderFruitData(fruitData) {
    fruitData.forEach(fruit => {
        // console.log(fruit)
        const option1 = document.createElement("option")
        option1.textContent = fruit.name
        const option2 = document.createElement("option")
        option2.textContent = fruit.name
        selection1.append(option1)
        selection2.append(option2)

        selection1.addEventListener("change", event => {
            // console.log(event.target.value)
            if (event.target.value === fruit.name) {
                console.log(fruit.nutritions)
                firstImage.src = fruit.image
                firstImage.alt = `This is a picture of a ${fruit.name}`
                console.log(firstImage)
            }
        })
        selection2.addEventListener("change", event => {
            // console.log(event.target.value)
            if (event.target.value === fruit.name) {
                // console.log(fruit.image)
                secondImage.src = fruit.image
                secondImage.alt = `This is a picture of a ${fruit.name}`
            }
        })
    });
}
