// ==UserScript==
// @name        Sibnet Video Downloader
// @version     1.0
// @date        2013-09-29
// @author      Aleksandr Logvinov <aleksandr@logvinov.net>
// @download	http://logvinov.net/files/video.sibnet.ru_save.js
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
	   var video_link=jwplayer('player_container').config.file;
	   var target_div = top.document.getElementById('video_text');
	   target_div.innerHTML = '<p><a href="http://video.sibnet.ru/' + video_link + '" title="Скачать видео">Скачать видео</a></p>'+target_div.innerHTML;
	}, false);
})();