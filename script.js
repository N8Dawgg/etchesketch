
const SIZE_X = 16;
const SIZE_Y = 16;

const VBOX = document.querySelector(".vbox");
let bits;

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
    bits.forEach((bit) => bit.addEventListener('click', bitClicked));
}

function bitClicked(e){
    e.target.classList.toggle("dark");
}

start()