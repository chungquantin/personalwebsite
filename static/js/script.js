
function buttonclose(card_id){
    document.getElementById(card_id).style.visibility = 'hidden';
    document.getElementById(card_id).style.width = '0%';
    document.getElementById(card_id).style.opacity='0';
    var video = document.getElementById("myVideo");
    video.pause();
}
function single_slide_down(card_name_open){
    document.getElementById(card_name_open).style.visibility = 'visible';
    document.getElementById(card_name_open).style.width = '100%';
    document.getElementById(card_name_open).style.opacity='1';
    var video = document.getElementById("myVideo");
    video.play();
}


//slide-toogle
