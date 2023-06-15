console.log('main.js connected')

const searchTermsInput = document.body.querySelector("#search-terms")

const getMealCategories = async () => {
    const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    try {
        const response = await fetch(mealCategoriesApiURL)
        const data = response.json()
        console.log('data: ', data)

    } catch (error) {
        console.log(error)
        alert("Something went wrong, try again later")
    }

}

const handleFormInputFocus = async (event) => {
    console.log("focus occured")
    await getMealCategories()
}
const searchTermsInput = document.body.querySelector("#search-terms")
searchTermsInput.addEventListener("focus", handleFormInputFocus)