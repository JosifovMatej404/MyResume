
async function typeWriter(text, tr, i, speed) {
    if (i < text.length) {
        if (text.charAt(i) === '~') {
            showButton();
            i = 0;
            return;
        }
        if (text.charAt(i) === '-') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            document.getElementById(tr).innerHTML = " ";
            i++;
        }
        document.getElementById(tr).innerHTML += text.charAt(i);
        i++;
        setTimeout(function(){typeWriter(text,tr, i, speed)}, speed);
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
