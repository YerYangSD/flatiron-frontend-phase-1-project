fetch("http://localhost:3000/fruits")
    .then(response => response.json())
    .then(fruitData => {
        // console.log(fruitData)
        fruitData.forEach(fruit => {
            // console.log(fruit.name)
            const selection1 = document.querySelector("#selection-1")
            const option = document.createElement("option")
            option.textContent = fruit.name
            selection1.append(option)
        });
    })