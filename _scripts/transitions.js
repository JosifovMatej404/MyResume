let i = 0;
let txt = 'Hello world;-My name is Matej.-Welcome!~';
let speed = 100;

async function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) === '~') {
            showButton();
            i++;
        }
        if (txt.charAt(i) === '-') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            document.getElementById("text").innerHTML = " ";
            i++;
        }
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function showButton(){
    document.getElementById("aboutme").style.transition = "1s";
    document.getElementById("aboutme").style.opacity = "100%";
}

function onButtonClick(){
    document.getElementById("indexContent").style.transition = "1s";
    scrollTo(1000,10000);
}