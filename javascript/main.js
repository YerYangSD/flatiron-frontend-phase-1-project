// Select Elements
const selection1 = document.querySelector("#selection-1")
const fruitContainer = document.querySelector("#fruit-container")
const multiDropdown = document.querySelector("#multidropdown")
let fruitArray = []

// Function Calls
getFruitData()

// This function fetches a get request the provided URL to get a Fruit Collection
function getFruitData() {
    return fetch("http://localhost:3000/fruits")
        .then(response => response.json())
        .then(fruitData => {
            buildFruitArray(fruitData);
            renderFruitData(fruitData)
        })
        .catch(error => alert(error))
}

function buildFruitArray(fruitData) {
    fruitData.forEach(fruit => fruitArray.push(fruit))
}

// Displays fruit names to the dropdowns
function renderFruitData(fruitData) {
    fruitData.forEach(fruit => {
        const option1 = document.createElement("option")
        option1.textContent = fruit.name
        selection1.append(option1)
    });
}

multiDropdown.addEventListener("submit", getMultiFruits)

function getMultiFruits(event) {
    event.preventDefault()
    fruitContainer.textContent = ""
    const dropdown = event.target[0]
    const multiFruits = Array.from(dropdown.selectedOptions).map(fruit => fruit.value)
    multiFruits.forEach(fruitString => {
        const fruit = fruitArray.find(fruitObj => fruitObj.name.toLowerCase() === fruitString.toLowerCase())
        renderFruitCard(fruit)
    });
}

function toggleNutritionValues(event, nutritionInfo, button) {
    if (nutritionInfo.style.display === "none") {
        nutritionInfo.style.display = "block"
        button.textContent = "Hide Nutrition Info";
    } else {
        nutritionInfo.style.display = "none"
        button.textContent = "Show Nutrition Info";
    }
}

function renderFruitCard(fruit) {
    const card = document.createElement("div")
    card.classList.add("card")

    const fruitImage = document.createElement("img")
    fruitImage.src = fruit.image
    fruitImage.alt = `This is a picture of a ${fruit.name}`

    const textContainer = document.createElement("div")
    textContainer.classList.add("container")

    const fruitTitle = document.createElement("h3")
    fruitTitle.textContent = fruit.name

    const nutritionInfo = document.createElement("ul")
    nutritionInfo.style.display = "none"

    const fruitCalories = document.createElement("li")
    fruitCalories.textContent = `Calories: ${fruit.nutritions.calories}`

    const fruitFat = document.createElement("li")
    fruitFat.textContent = `Fat: ${fruit.nutritions.fat}`

    const fruitSugar = document.createElement("li")
    fruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`

    const fruitCarbohydrates = document.createElement("li")
    fruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`

    const fruitProtein = document.createElement("li")
    fruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`

    const button = document.createElement("button")
    button.textContent = "Show Nutrition Info"

    button.addEventListener("click", event => toggleNutritionValues(event, nutritionInfo, button))

    nutritionInfo.append(fruitCalories, fruitFat, fruitSugar, fruitCarbohydrates, fruitProtein)

    textContainer.append(fruitTitle, nutritionInfo)

    card.append(fruitImage, textContainer, button)

    fruitContainer.append(card)
}