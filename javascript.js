
function createDivs(){
    const container = document.getElementById('container');
    container.style.width = '256px';
    container.style.height = '256px';

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div")
        div.classList.add("div")
        container.appendChild(div)
      }
}
createDivs()
