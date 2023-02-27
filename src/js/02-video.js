import Player from '@vimeo/player';
import lodash from 'lodash.throttle';
const player = new Player('vimeo-player');
const iframe = document.querySelector('iframe');
console.log(iframe);
player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', lodash(onPlay, 1000));
function onPlay(data) {
  console.log(data);
  // data is an object containing properties specific to that event
}
