"use strict";

var playerContainer = document.querySelector('#player-container'),
    currentPlayBtn = document.querySelector('#current-play-btn'),
    currentPlayBtnIcon = document.querySelector('#play-icon'),
    currentSong = document.querySelector('#current-title'),
    currentSongCurrentTime = document.querySelector('#current-time'),
    currentSongDuration = document.querySelector('#total-time'),
    reverseBtn = document.querySelector('#reverse'),
    forwardBtn = document.querySelector('#forward'),
    progressBar = document.querySelector('#progress-bar'),
    songNumber = document.querySelectorAll('.tunes_contain_player_songs_item_info-number'),
    songTitle = document.querySelectorAll('.tunes_contain_player_songs_item_info-title'),
    songs = ['Chucks', 'definition of insanity', 'emerald', 'Heebie Jeebies (Vinyl)', 'valiant garage command', 'vier'];
var song = new Audio();
var songIndex = 0; // Populate song titles in title divs

for (var i = 0; i < songs.length; i++) {
  songTitle[i].innerHTML = songs[i];
} // Load first song and get duration


song.src = "./mp3/".concat(songs[songIndex], ".wav");
currentSong.innerHTML = "".concat(songs[songIndex]);
song.preload = 'metadata';
song.addEventListener('loadedmetadata', function (e) {
  currentSongDuration.innerHTML = "".concat(formatTime(song.duration));
});
/************** EVENT LISTENERS **************/
// Play Button Listener

currentPlayBtn.addEventListener('click', function (e) {
  if (currentPlayBtnIcon.classList.contains('fa-play')) {
    songNumber[songIndex].innerHTML = '<img src="./images/speaker.png" id="speaker-icon"></img>';
    song.play();
    currentPlayBtnIcon.classList = 'fa fa-pause';
    currentPlayBtnIcon.style.transform = 'none';
  } else {
    song.pause(); // currentSongCurrentTime.innerText = `${song.currentTime}`

    songNumber[songIndex].innerHTML = "".concat(songIndex + 1);
    currentPlayBtnIcon.classList = 'fa fa-play';
  }
}); // Reverse Button Listener

reverseBtn.addEventListener('click', function (e) {
  songNumber[songIndex].innerHTML = "".concat(songIndex + 1);
  progressBar.style.width = "0%";

  if (songIndex > 0) {
    songIndex--;
  } else {
    songIndex = songs.length - 1;
  }

  currentSong.innerHTML = "".concat(songs[songIndex]);
  song.src = "./mp3/".concat(songs[songIndex], ".wav");
  currentPlayBtnIcon.classList = 'fa fa-play';
}); // Forward Button Listener

forwardBtn.addEventListener('click', function (e) {
  songNumber[songIndex].innerHTML = "".concat(songIndex + 1);
  progressBar.style.width = "0%";

  if (songIndex < songs.length - 1) {
    songIndex++;
  } else {
    songIndex = 0;
  }

  currentSong.innerHTML = "".concat(songs[songIndex]);
  song.src = "./mp3/".concat(songs[songIndex], ".wav");
  currentPlayBtnIcon.classList = 'fa fa-play';
}); // Progress Bar Advance

song.addEventListener('timeupdate', function (e) {
  progressBar.style.width = "".concat(Math.round(song.currentTime / song.duration * 100), "%");
  currentSongCurrentTime.innerHTML = "".concat(formatTime(song.currentTime));
}); // Song End Behavior

song.addEventListener('ended', function (e) {
  currentPlayBtnIcon.classList = 'fa fa-play';
  song.currentTime = 0;
  progressBar.style.width = '0%';
  songNumber[songIndex].innerHTML = "".concat(songIndex + 1);
});
/************** FUNCTIONS **************/
// takes seconds as integer returns formatted time string - min:sec

var formatTime = function formatTime(seconds) {
  var time = new Date(0);
  time.setSeconds(seconds);
  var timeString = time.toISOString().substr(15, 4);
  return timeString;
};