import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setPlaybackPosition();

player.on('timeupdate', throttle(savePlyingTime, 1000));
// console.log('played the video!');

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

function savePlyingTime(data) {
  const onPlay = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(onPlay));
}

function setPlaybackPosition() {
  const saveData = localStorage.getItem('videoplayer-current-time');
  console.log(saveData);

  try {
    const parsedData = JSON.parse(saveData);
    console.log(parsedData);

    if (saveData) {
      player.setCurrentTime(parsedData);
      // player.play();
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
