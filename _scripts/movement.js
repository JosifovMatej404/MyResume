let position = 0;
let playerPosition = 0;
let textVisibility = [false];
let textCount;

function playerFall() {
    let player = document.getElementById('player');
    player.style.bottom = '20%';
    player.style.transitionTimingFunction = 'ease-in';
    player.style.transition = '0.8s';
}

function movePlayer(){
    document.addEventListener('keydown', function(event) {

        let content = document.getElementById('indexContent');
        let player = document.getElementById('player');
        content.style.transition = "0.2s";
        player.style.transition = "0.5s";
        if(position < -32 || position > 0) {
            player.style.transition = "0.2s";
            content.style.transition = "0.5s";
            if (event.keyCode === 37 && playerPosition > -720) {
                position+=0.5;
                playerPosition -= 20;
                player.style.translate = playerPosition.toString() + '%';
            } else if (event.keyCode === 39) {
                position-=0.5;
                playerPosition += 20;
                player.style.translate = playerPosition.toString() + '%';
            }
        }
        else{
            if (event.keyCode === 37) {
                position += 0.5;
                content.style.translate = position.toString() + '%';
            } else if (event.keyCode === 39) {
                position -= 0.5;
                content.style.translate = position.toString() + '%';
            }
        }
        if(position < -4 && !textVisibility[0]){
        typeWriter(' Game Engines I specialize in: Unity (using C#), Godot (using GDScript and C#), SFML (using C++) and OpenGL (using C++).', 'secondText', 0, 30);
        textVisibility[0] = true;
        textCount++;
        }
        if(position < -16 && !textVisibility[1]){
            typeWriter('For Web Development I use: Html, CSS and JavaScript.', 'thirdText', 0, 30);
            textVisibility[1] = true;
            textCount++;
        }
        if(position <= -32 && !textVisibility[2]){
            typeWriter('Continue to portfolio ==>', 'fourthText', 0, 30);
            textVisibility[2] = true;
            textCount++;
        }
    });
}
