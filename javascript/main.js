fetch("http://localhost:3000/fruits")
    .then(response => response.json())
    .then(fruitData => {
        // console.log(fruitData)
        fruitData.forEach(fruit => {
            // console.log(fruit.name)
            const selection1 = document.querySelector("#selection-1")
            const selection2 = document.querySelector("#selection-2")
            const option1 = document.createElement("option")
            const option2 = document.createElement("option")
            option1.textContent = fruit.name
            option2.textContent = fruit.name
            selection1.append(option1)
            selection2.append(option2)
        });
    })