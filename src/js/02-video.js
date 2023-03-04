import Player from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';
const player = new Player('vimeo-player');

player.on('timeupdate', lodashThrottle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player
  .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
