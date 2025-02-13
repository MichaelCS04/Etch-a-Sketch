
function createDivs(){
    const container = document.getElementById('container');
    container.style.width = '256px';
    container.style.height = '256px';

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div")
        div.classList.add("div")
        div.classList.add("hoverFeature")
        div.addEventListener(
            "mouseover", () => {

                div.style.backgroundColor = rainbow()
            });
        container.appendChild(div)

        
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
