function createDivs(size=16){
    const container = document.getElementById('container');
    container.innerHTML = ''
    container.style.width = '300px';
    container.style.height = '300px';

    const divSize = 300 / size; // Calculate size of each div

    for (let i = 0; i < size * size; i++) { // Create grid cells
        const div = document.createElement("div");
        div.classList.add("div", "hoverFeature");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = rainbow();
        });
        container.appendChild(div);
    }

    
}
createDivs()

function rainbow(){
    const prod = Math.floor(Math.random() * 7);
    const colorConditions = {
        0: "red",
        1: "orange",
        2: "yellow",
        3: "green",
        4: "blue",
        5: "indigo",
        6: "violet",
    };
    return(colorConditions[prod]);
}

function clearGrid(){
    const divs = document.getElementsByClassName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white"; // Reset background color
    }
}

function changeGrid(){let size = parseInt(prompt("Enter grid size (e.g., 16 for 16x16):"), 10);
    if (size && size > 0 && size <= 100) { // Limit to avoid performance issues
        createDivs(size);
    } else {
        alert("Invalid input. Enter a number between 1 and 100.");
    }
}