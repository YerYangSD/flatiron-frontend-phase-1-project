// Selects html elements and set the variable called "fruitArray" to an empty array
const selection = document.querySelector("#selection")
const fruitContainer = document.querySelector("#fruit-container")
const multiDropdownForm = document.querySelector("#multi-dropdown-form")
let fruitArray = []

// Calls the function that fetches a get request.
getFruitData()

// This function fetches a get request to the provided URL to get a fruit collection(HTMLcollection that looks like an array of objects), builds a fruit array, displays fruit name, and alert an error message if it exist.
function getFruitData() {
    return fetch("http://localhost:3000/fruits")
        .then(response => response.json())
        .then(fruitData => {
            buildFruitArray(fruitData);
            displaysFruitName(fruitData)
        })
        .catch(error => alert(error))
}

// This function iterate through the fruitData and push each fruit to the empty array assigned by the variable name fruitArray.
function buildFruitArray(fruitData) {
    fruitData.forEach(fruit => fruitArray.push(fruit))
}

// Displays fruit names to mult-dropdown
function displaysFruitName(fruitData) {
    fruitData.forEach(fruit => {
        const option1 = document.createElement("option")
        option1.textContent = fruit.name
        selection.append(option1)
    });
}

// Adds submit event to mult-dropdown form
multiDropdownForm.addEventListener("submit", getMultiFruits)

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

// This function shows the nutrition info if it is not displaying and set the button content to "Hide Nutrition Info."
// If nutrition info is displaying, hide nutrition info and set button content to "Show Nutrition info."
function toggleNutritionValues(event, nutritionInfo, button) {
    if (nutritionInfo.style.display === "none") {
        nutritionInfo.style.display = "block"
        button.textContent = "Hide Nutrition Info";
    } else {
        nutritionInfo.style.display = "none"
        button.textContent = "Show Nutrition Info";
    }
}

// This function creates a card which holds a fruit image, text container and a button.
// The text container holds the fruit name as the fruit title and nutrition info.
// The button shows or hides nutrition info with each click event.
// The card then gets append to the fruit container, so it can be rendered to the DOM.
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