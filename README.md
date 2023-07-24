# Flatiron-Frontend-Phase-1-Project

## How Does this Webpage Work?

This is a simple webpage I have created called "FruitNutriGuide." Users can use it as a guide to choosing fruits they may want to eat by comparing nutrition values. Users can select one fruit or more by holding down the control key (command key on Mac) and left-clicking multiple fruit names from the dropdown. Once the fruit(s) have been selected, the users can click the submit button to display the results below. The fruit image(s) will be displayed along with a toggle button. The nutrition information will be hidden at first. To show it, click the "Show Nutrition Info" button. To hide it, click the "Hide Nutrition Info" button.

## Installation

Since this webpage has not been deploy to the public, it cannot be accessed like others, such as _google.com_ or _facebook.com_. It has to be **forked** from **GitHub** and **cloned** to a local computer first. Once it has been cloned locally, navigate to the file and open it in an Integrated Development Environment (IDE) such as Visual Studio Code. As this webpage fetches data from `http://localhost:3000/fruits`(local server), run the command line `json-server --watch db.json` in the terminal to excute json-server tool, allowing it to watch the json file for changes. Then, run the command line `explorer.exe index.html` in the terminal to open the document in a defualt browser. From there, the webpage can be accessed.

## Resources

All data used in the creation of the JSON data for this webpage are from the GitHub public API sourced from [fruityvice.com](https://www.fruityvice.com/).

All images stored in the JSON data for this webpage are royalty-free images sourced from [pexels.com](https://www.pexels.com/).

Credits to Bruno Joseph, Ingo Joseph and Daniel Frese from [pexels.com](https://www.pexels.com/) for providing the royalty-free images used on the FruitNutriGuide webpage.
