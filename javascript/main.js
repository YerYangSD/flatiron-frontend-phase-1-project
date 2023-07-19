// Select Elements
const selection1 = document.querySelector("#selection-1")
const selection2 = document.querySelector("#selection-2")
const fruitContainer = document.querySelector("#fruit-container")
const secondImageContainer = document.querySelector("#second-image-container")
// const firstImage = document.querySelector("#first-image")
const secondImage = document.querySelector("#second-image")
// const firstFruitName = document.querySelector("#first-fruit-name")
// const firstNutritions = document.querySelector("#first-nutritions")
// const firstFruitCaloiries = document.querySelector("#first-fruit-caloiries")
// const firstFruitFat = document.querySelector("#first-fruit-fat")
// const firstFruitSugar = document.querySelector("#first-fruit-sugar")
// const firstFruitCarbohydrates = document.querySelector("#first-fruit-carbohydrates")
// const firstFruitProtein = document.querySelector("#first-fruit-protein")
const secondFruitName = document.querySelector("#second-fruit-name")
const secondNutritions = document.querySelector("#second-nutritions")
const secondFruitCaloiries = document.querySelector("#second-fruit-caloiries")
const secondFruitFat = document.querySelector("#second-fruit-fat")
const secondFruitSugar = document.querySelector("#second-fruit-sugar")
const secondFruitCarbohydrates = document.querySelector("#second-fruit-carbohydrates")
const secondFruitProtein = document.querySelector("#second-fruit-protein")
const firstSearchBar = document.querySelector("#first-search-bar")
const secondSearchBar = document.querySelector("#second-search-bar")
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
// console.log(fruitArray)

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

        // selection1.addEventListener("change", event => {
        //     // console.log(event.target.value)
        //     if (event.target.value === fruit.name) {
        //         firstFruitName.textContent = fruit.name
        //         firstImage.src = fruit.image
        //         firstImage.alt = `This is a picture of a ${fruit.name}`
        //         firstNutritions.textContent = "Nutritions"
        //         firstFruitCaloiries.textContent = `Calories: ${fruit.nutritions.calories}`
        //         firstFruitFat.textContent = `Fat: ${fruit.nutritions.fat}`
        //         firstFruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`
        //         firstFruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`
        //         firstFruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`
        //     }
        // })

        // selection2.addEventListener("change", event => {
        //     // console.log(event.target.value)
        //     if (event.target.value === fruit.name) {
        //         secondImage.src = fruit.image
        //         secondImage.alt = `This is a picture of a ${fruit.name}`
        //         secondNutritions.textContent = "Nutritions"
        //         secondFruitCaloiries.textContent = `Calories: ${fruit.nutritions.calories}`
        //         secondFruitFat.textContent = `Fat: ${fruit.nutritions.fat}`
        //         secondFruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`
        //         secondFruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`
        //         secondFruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`
        //     }
        // })

    });
}

firstSearchBar.addEventListener("search", event => {
    const fruitName = event.target.value
    const lowercasedFruitName = fruitName.toString().toLowerCase()
    const results = fruitArray.filter(fruit => fruit.name.toLowerCase().includes(lowercasedFruitName))
    renderFruits(results)
})

function renderFruits(results) {
    if (results.length === 0) {
        alert("No Fruits Found")
    } else {
        results.forEach(fruit => renderFruit(fruit))
    }
}

function renderFruit(fruit) {
    const fruitName = document.createElement("h2")
    const fruitImage = document.createElement("img")
    const nutritionInfo = document.createElement("ul")
    const fruitCaloiries = document.createElement("li")
    const fruitFat = document.createElement("li")
    const fruitSugar = document.createElement("li")
    const fruitCarbohydrates = document.createElement("li")
    const fruitProtein = document.createElement("li")
    const button = document.createElement("button")

    fruitName.textContent = fruit.name
    fruitImage.src = fruit.image
    fruitImage.alt = `This is a picture of a ${fruit.name}`
    button.type = "button"
    button.textContent = "Hide Nutrition Info"
    fruitCaloiries.textContent = `Calories: ${fruit.nutritions.calories}`
    fruitFat.textContent = `Fat: ${fruit.nutritions.fat}`
    fruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`
    fruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`
    fruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`
    nutritionInfo.append(fruitCaloiries, fruitFat, fruitSugar, fruitCarbohydrates, fruitProtein)
    fruitContainer.append(fruitName, fruitImage, button, nutritionInfo)
    // console.log(fruitContainer)

    button.addEventListener("click", event => toggleNutritionValues(event, nutritionInfo, button))
}

multiDropdown.addEventListener("submit", getMultiFruits)

function getMultiFruits(event) {
    event.preventDefault()
    fruitContainer.textContent = ""
    const dropdown = event.target[0]
    const multiFruits = Array.from(dropdown.selectedOptions).map(fruit => fruit.value)
    // console.log(multiFruits)
    multiFruits.forEach(fruitString => {
        const fruit = fruitArray.find(fruitObj => fruitObj.name.toLowerCase() === fruitString.toLowerCase())
        renderFruit(fruit)
        // console.log(fruit)
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