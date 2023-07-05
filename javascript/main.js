fetch("http://localhost:3000/fruits")
    .then(response => response.json())
    .then(fruitData => {
        console.log(fruitData)
    })