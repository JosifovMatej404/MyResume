let position = 0;
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
        if(event.keyCode === 37) {
            position += 0.5;
            content.style.translate = position.toString() + '%';
            player.style.translate = '-30%';
        }
        else if(event.keyCode === 39) {
            position -= 0.5;
            content.style.translate = position.toString() + '%';
            player.style.translate = '30%';
        }
    });
    document.addEventListener('keyup', function(event) {
        let player = document.getElementById('player');
        player.style.transition = "0.5s";
        if(event.keyCode === 37 || event.keyCode === 39) {
            player.style.translate = '0%'
        }
    });
}
