import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// player.on('timeupdate',throttle(timeTracking,1000));

// function timeTracking (evt) {
// let currentTime = evt.seconds;
// localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
    
// }

// player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay({ seconds }) {  
  localStorage.setItem(STORAGE_KEY, seconds);
}
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
