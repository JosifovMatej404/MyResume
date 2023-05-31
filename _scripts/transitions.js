let i = 0;
let speed = 100;
let txt;
let target;

async function typeWriter(text, tr) {
    if (i === 0){
        txt = text;
        target = tr;
}
    if (i < txt.length) {
        if (txt.charAt(i) === '~') {
            showButton();
            i = 0;
            return;
        }
        if (txt.charAt(i) === '-') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            document.getElementById(target).innerHTML = " ";
            i++;
        }
        document.getElementById(target).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function showButton(){
    document.getElementById("button").style.transition = "1s";
    document.getElementById("button").style.opacity = "100%";
    document.getElementById("button").disabled = false;
}

async function onButtonClick(){
    let content =  document.getElementById("indexContent");
    content.style.transition = "1s";
    content.style.translate = "-100%";
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.open("aboutme.html", "_self");
}
