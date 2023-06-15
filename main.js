console.log('main.js connected')
const handleFormInputFocus = async (event) => {
    console.log("focus occured")
    await getMealCategories()
}
const searchTermsInput = document.body.querySelector("#search-terms")
searchTermsInput.addEventListener("focus", handleFormInputFocus)