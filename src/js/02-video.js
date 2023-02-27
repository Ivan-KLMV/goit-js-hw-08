import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');
console.log(player);
player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data);
  // data is an object containing properties specific to that event
}
