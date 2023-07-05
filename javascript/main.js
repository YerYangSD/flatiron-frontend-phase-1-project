fetch("http://localhost:3000/fruits")
    .then(response => response.json())
    .then(fruitData => {
        // console.log(fruitData)
        fruitData.forEach(fruit => {
            console.log(fruit.name)
        });
    })