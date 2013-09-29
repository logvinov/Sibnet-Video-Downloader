// ==UserScript==
// @name        Sibnet Video Downloader
// @version     1.0
// @date        2013-09-29
// @author      Aleksandr Logvinov <aleksandr@logvinov.net>
// @download	https://github.com/logvinov/Sibnet-Video-Downloader/raw/master/Sibnet-Video-Downloader.user.js
//
// @grant       none
// @include http://video.sibnet.ru/video*
// @include http://video.sibnet.ru/*/video*
// ==/UserScript==
/**********************************************************************************************
	Cкрипт добавляет на странице с видео ссылку для его (видео) закачки.
	Страница скрипта: http://logvinov.net/2009/08/video-sibnet-ru_save-js.html
**********************************************************************************************/

(function(){
	document.addEventListener('DOMContentLoaded', function(){
	   if (jwplayer('player_container') != undefined) {
	       var video_link='<p><a href="http://video.sibnet.ru/' + jwplayer('player_container').config.file + '" title="Скачать видео">Скачать видео</a></p>';
	       var target_div = top.document.getElementById('video_text');
	       if (target_div == undefined) {
	           target_div = top.document.getElementById('video');
	           target_div.innerHTML = target_div.innerHTML + video_link;
	       }
	       else {
	           target_div.innerHTML = video_link + target_div.innerHTML;
	       }
	   }
	}, false);
})();
