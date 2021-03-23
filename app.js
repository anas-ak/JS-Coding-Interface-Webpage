function type(o) {
    for(var j = 0; j < o.length; j++) {
        o[j].parentNode.style.display = "none";
    }
    i = 0;
    typewrite(o, i);
}

function typewrite(o, i) {

    var c = o[i].innerHTML,
    p = 1;

    var v = window.setInterval(function() {
        o[i].parentNode.style.display = "block";
        
        if(p === c.length) {
            o[i].innerHTML = c;
            window.clearInterval(v);

            if(i < o.length - 1) {
                typewrite(o, i+1);
            }
        } else {
            o[i].innerHTML = c.substr(0, p) + "<span class='blink'>_</span>";
            p++;
        }
    }, 20);
}

type(document.querySelectorAll(".menu>a, .sup>span, .blink>span"));