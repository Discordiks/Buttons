function hide_btn(btn, time) {
    return function () {
        setTimeout(function () {
            btn.style.visibility = "hidden";
        }, time);

    }
}

function blick_btn(btn) {
    return function () {
        setTimeout(function () {
            setInterval(function () {
                if (btn.style.visibility == 'visible') {
                    btn.style.visibility = 'hidden';
                }
                else {
                    btn.style.visibility = 'visible';
                }
            }, 1000);
        }, 9000);
    }
}
function reset() {
    location.reload();
}

let buttons = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11"]
let i = 0;

for (i = 0; i < buttons.length; i++) {
    if (i < 9) {
        buttons[i] = document.getElementById(buttons[i]);
        buttons[i].addEventListener("click", hide_btn(buttons[i], 1000 * (i + 1)));
    }
    else if (i === 9) {
        buttons[i] = document.getElementById(buttons[i]);
        buttons[i].addEventListener("click", blick_btn(buttons[i]));
    }
    else if (i === 10) {
        buttons[i] = document.getElementById(buttons[i]);
        buttons[i].addEventListener("click", reset);
    }
}