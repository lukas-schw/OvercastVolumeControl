// ==UserScript==
// @name         Overcast Volume Control
// @namespace    https://schwitzgebel.dev
// @version      0.1
// @description  Adds volume vontrol to the Overcast webplayer
// @author       Lukas Schwitzgebel
// @match        https://overcast.fm/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

function setVolume(volume) {
    $('#audioplayer').prop('volume', volume);
    GM_setValue('volume', volume);
}

$(document).ready(function() {
    if($('#playcontrols_container').length) {
        GM_addStyle('#vol-input {-webkit-appearance: none; display: block; width: 100%; border-radius: 9px; background: #ffdbc1; border: none; height: 15px; outline: none;}\
#vol-input::-webkit-slider-thumb {-webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #fc7e0f; cursor: pointer;}\
#vol-input::-moz-range-thumb {width: 20px; height: 20px; border-radius: 50%; background: #fc7e0f; cursor: pointer;}');
        $('#playcontrols_container').after('<div id="vol-control"><div class="smallcaps centertext">Volume</div><input id="vol-input" type="range" min="0" max="1" step="0.01"></input></div>');
        var volume = GM_getValue('volume', 0.5);
        setVolume(volume);
        $('#vol-input').val(volume);
        $('#vol-input').on('change mousemove', function() {
            setVolume($(this).val());
        })
    }
});