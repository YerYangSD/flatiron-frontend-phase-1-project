console.log('main.js connected')
const handleFormInputFocus = (event) => {
    console.log("focus occured")
}
const searchTermsInput = document.body.querySelector("#search-terms")
searchTermsInput.addEventListener("focus", handleFormInputFocus)