setTimeout(function(){
    $(document).getElementsByTagName('body')[0].style.height=window.innerHeight+'px';
},20);



function loadMusic() {
    if ($('#music-content')) {
        $('#music-content').append('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=435878441&auto=1&height=430"></iframe>');
    }
}
function toggleMusicPanel(){
    $('#music-content').toggle()
}
loadMusic();
//function toggleMusicPanel(){
//    $('#music-control').onclick(function(){
//        $('#music-content').toggle(loadMusic(),500)
//    })
//}
//var isFirstToggleMusic = true;
//function toggleMusicPanel() {
//    $('#music-control').toggleClass('on');
//    if (isFirstToggleMusic) {
//        _gaq.push(['_trackEvent', 'ToggleMusic', 'InRecent', window.location.pathname]);
//        isFirstToggleMusic = false;
//    }
//}