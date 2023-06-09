// Select Elements
const selection1 = document.querySelector("#selection-1")
const selection2 = document.querySelector("#selection-2")
const firstImage = document.querySelector("#first-image")
const secondImage = document.querySelector("#second-image")
const firstFruitName = document.querySelector("#first-fruit-name")
const firstNutritions = document.querySelector("#first-nutritions")
const firstFruitCaloiries = document.querySelector("#first-fruit-caloiries")
const firstFruitFat = document.querySelector("#first-fruit-fat")
const firstFruitSugar = document.querySelector("#first-fruit-sugar")
const firstFruitCarbohydrates = document.querySelector("#first-fruit-carbohydrates")
const firstFruitProtein = document.querySelector("#first-fruit-protein")
const secondFruitName = document.querySelector("#second-fruit-name")
const secondNutritions = document.querySelector("#second-nutritions")
const secondFruitCaloiries = document.querySelector("#second-fruit-caloiries")
const secondFruitFat = document.querySelector("#second-fruit-fat")
const secondFruitSugar = document.querySelector("#second-fruit-sugar")
const secondFruitCarbohydrates = document.querySelector("#second-fruit-carbohydrates")
const secondFruitProtein = document.querySelector("#second-fruit-protein")

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
                firstFruitName.textContent = fruit.name
                firstImage.src = fruit.image
                firstImage.alt = `This is a picture of a ${fruit.name}`
                firstNutritions.textContent = "Nutritions"
                firstFruitCaloiries.textContent = `Calories: ${fruit.nutritions.calories}`
                firstFruitFat.textContent = `Fat: ${fruit.nutritions.fat}`
                firstFruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`
                firstFruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`
                firstFruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`
            }
        })
        selection2.addEventListener("change", event => {
            // console.log(event.target.value)
            if (event.target.value === fruit.name) {
                secondImage.src = fruit.image
                secondImage.alt = `This is a picture of a ${fruit.name}`
                secondNutritions.textContent = "Nutritions"
                secondFruitCaloiries.textContent = `Calories: ${fruit.nutritions.calories}`
                secondFruitFat.textContent = `Fat: ${fruit.nutritions.fat}`
                secondFruitSugar.textContent = `Sugar: ${fruit.nutritions.sugar}`
                secondFruitCarbohydrates.textContent = `Carboydrates: ${fruit.nutritions.carbohydrates}`
                secondFruitProtein.textContent = `Protein: ${fruit.nutritions.protein}`
            }
        })
    });
}
