const body = document.querySelector("body")
const bgButton = document.querySelector(".bgcolor");
const resetButton = document.querySelector(".reset");
const progressCircle = document.querySelector(".progress")
const spectrumContainer = document.querySelector(".spectrum")


bgButton.addEventListener("click", bgColor);
resetButton.addEventListener("click", reset)


let h = 0;

let running = false
let interval
function bgColor() {
    if (!running) {

        running = true;

        bgButton.innerHTML = "stop"

        interval = setInterval(() => {
            if (h >= 350) {
                h = 0
            } else {
                h += 10
            }
            body.style.backgroundColor = "hsl(" + h + " 100% 50%)"

            progressCircle.style.left = h / 3.6 + "%";

        }, 100);

    } else {
        clearInterval(interval)
        running = false
        bgButton.innerHTML = "start"
    }

}

function reset() {
    body.style.backgroundColor = "white";
    h = 0;
    progressCircle.style.left = h / 3.6 + "%";

}

function spectrum() {

    for (let h = 0; h < 360; h += 10) {


        var shade = document.createElement("div");
        shade.style.backgroundColor = "hsl(" + h + " 100% 50%)"
        console.log(h);

        spectrumContainer.appendChild(shade)


    }


}

spectrum();
