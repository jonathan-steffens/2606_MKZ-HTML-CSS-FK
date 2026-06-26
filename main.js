document.querySelector(".bg-color").addEventListener("click", bgColor);
document.querySelector(".timeout").addEventListener("click", timeout)

let h = 0;
function bgColor() {
    if (h >= 360) {
        h = 0
    } else {
        h += 10
    }
    document.querySelector("body").style.backgroundColor = "hsl(" + h + " 100% 70%)"
    console.log(h);

}

let running = false
let interval
function timeout() {
    if (!running) {

        running = true;
        interval = setInterval(() => {
            if (h >= 360) {
                h = 0
            } else {
                h += 10
            }
            document.querySelector("body").style.backgroundColor = "hsl(" + h + " 100% 70%)"
        }, 100);

    } else {
        clearInterval(interval)
        running = false
    }

}
