
const SIZE_X = 16;
const SIZE_Y = 16;

const VBOX = document.querySelector(".vbox");
let bits;
let mouseHeld = false;
let darkDrag = false;

function start() {
    for (let y=0;y<SIZE_Y;y++){
        let newHBox = document.createElement('div');
        newHBox.classList.add('hbox');
        VBOX.append(newHBox);
        for (let x=0;x<SIZE_X;x++){
            let newBit = document.createElement('div');
            newBit.classList.add('bit');
            newHBox.append(newBit);
        }

    }

    bits = document.querySelectorAll(".bit");
    bits.forEach((bit) => bit.addEventListener('mouseenter', bitMoused));
    bits.forEach((bit) => bit.addEventListener('mousedown', bitClicked));
    document.querySelector("body").addEventListener("mouseup", mouseUp);
}

function bitMoused(e){
    if (!mouseHeld) {
        return;
    }
    if (darkDrag) {
        e.target.classList.add("dark");
    } else {
        e.target.classList.remove("dark");
    }
    
}

function bitClicked(e){
    darkDrag = !e.target.classList.contains("dark");
    e.target.classList.toggle("dark");
    mouseHeld = true;
}

function mouseUp() {
    mouseHeld = false;
}

start()