import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoPlayer = document.querySelector('#vimeo-player');

const player = new Player(videoPlayer);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const time = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(time);
