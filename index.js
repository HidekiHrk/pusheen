var heartnum = 0;

$(() => {
    let audio = document.createElement('audio');
    audio.setAttribute('src', './sound/pop.mp3');

    function removeHearts(){
        audio.play();        
        $(".heart").attr('hidden', true);
        setTimeout(() => {
            audio.play();
            $("#hearts").attr('hidden', false);
            setTimeout(() => {
                audio.play();
                $("#txt").attr('hidden', false);
            }, 1000);
        }, 500);
    }
    ['d', 'y'].forEach(e => {
        $(`#${e}p`).click(() => {
            if(heartnum >= 2){return;}
            let dh = $(`#${e}heart`);
            if(dh.attr('hidden')){
                dh.attr("hidden", false);
                audio.play();
                heartnum++;
                if(heartnum >= 2){
                    setTimeout(removeHearts, 1000);
                }
            }
        })
    });
})