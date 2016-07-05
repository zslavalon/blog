setTimeout(function(){
    $(document).getElementsByTagName('body')[0].style.height=window.innerHeight+'px';
},20);

setTimeout(loadMusic, 20000);
function loadMusic() {
    if ($('#music-content')) {
        $('#music-content').append('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=49176408&auto=0&height=430"></iframe>')
    }

}
$(document).ready(function(){
    $('$music-control').click(function(){
        $('$music-content').toggle()
    })
});
//var isFirstToggleMusic = true;
//function toggleMusicPanel() {
//    $('#music-control').toggleClass('on');
//    if (isFirstToggleMusic) {
//        _gaq.push(['_trackEvent', 'ToggleMusic', 'InRecent', window.location.pathname]);
//        isFirstToggleMusic = false;
//    }
//}