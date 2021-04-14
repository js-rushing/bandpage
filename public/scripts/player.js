/************** CONSTANTS **************/
const playerContainer = document.querySelector('#player-container'),
  currentPlayBtn = document.querySelector('#current-play-btn'),
  currentPlayBtnIcon = document.querySelector('#play-icon'),
  currentSong = document.querySelector('#current-title'),
  currentSongCurrentTime = document.querySelector('#current-time'),
  currentSongDuration = document.querySelector('#total-time'),
  reverseBtn = document.querySelector('#reverse'),
  forwardBtn = document.querySelector('#forward'),
  progressBar = document.querySelector('#progress-bar'),
  songNumber = document.querySelectorAll(
    '.tunes_contain_player_songs_item_info-number'
  ),
  songTitle = document.querySelectorAll(
    '.tunes_contain_player_songs_item_info-title'
  ),
  songs = [
    'Chucks',
    'definition of insanity',
    'emerald',
    'Heebie Jeebies (Vinyl)',
    'valiant garage command',
    'vier',
  ],
  song = new Audio()

/************** VARIABLES **************/
var songIndex = 0,
  autoplay = true,
  isPlaying = false

/************** FUNCTIONS **************/
// Loads current song, get song duration, sets current song title
const setCurrentSong = (index) => {
  song.src = `./mp3/${songs[index]}.wav`
  currentSong.innerHTML = `${songs[index]}`
  song.preload = 'metadata'
  song.addEventListener('loadedmetadata', (e) => {
    currentSongDuration.innerHTML = `${formatTime(song.duration)}`
  })
}

// Takes seconds as integer returns formatted time string - min:sec
const formatTime = (seconds) => {
  let time = new Date(0)
  time.setSeconds(seconds)
  let timeString = time.toISOString().substr(15, 4)

  return timeString
}

// Plays current track
const playTrack = () => {
  if (currentPlayBtnIcon.classList.contains('fa-play')) {
    songNumber[songIndex].innerHTML =
      '<img src="./images/speaker.png" id="speaker-icon"></img>'
    song.play()
    isPlaying = true
    currentPlayBtnIcon.classList = 'fa fa-pause'
    currentPlayBtnIcon.style.transform = 'none'
  } else {
    song.pause()
    isPlaying = false
    // currentSongCurrentTime.innerText = `${song.currentTime}`
    songNumber[songIndex].innerHTML = `${songIndex + 1}`
    currentPlayBtnIcon.classList = 'fa fa-play'
  }
}

// Skips to next track, if autoplay is true, plays track
const nextTrack = () => {
  songNumber[songIndex].innerHTML = `${songIndex + 1}`
  progressBar.style.width = `0%`
  songIndex < songs.length - 1 ? songIndex++ : (songIndex = 0)
  currentSong.innerHTML = `${songs[songIndex]}`
  song.src = `./mp3/${songs[songIndex]}.wav`
  currentPlayBtnIcon.classList = 'fa fa-play'
  autoplay && isPlaying
    ? playTrack()
    : (currentPlayBtnIcon.classList = 'fa fa-play')
}

// Skips to previous track, if autoplay is true, plays track
const previousTrack = () => {
  songNumber[songIndex].innerHTML = `${songIndex + 1}`
  progressBar.style.width = `0%`
  songIndex > 0 ? songIndex-- : (songIndex = songs.length - 1)
  currentSong.innerHTML = `${songs[songIndex]}`
  song.src = `./mp3/${songs[songIndex]}.wav`
  currentPlayBtnIcon.classList = 'fa fa-play'
  autoplay && isPlaying
    ? playTrack()
    : (currentPlayBtnIcon.classList = 'fa fa-play')
}

/************** EVENT LISTENERS **************/
// Play Button Listener
currentPlayBtn.addEventListener('click', playTrack)

// Reverse Button Listener
reverseBtn.addEventListener('click', previousTrack)

// Forward Button Listener
forwardBtn.addEventListener('click', nextTrack)

// Progress Bar Advance
song.addEventListener('timeupdate', (e) => {
  progressBar.style.width = `${Math.round(
    (song.currentTime / song.duration) * 100
  )}%`
  currentSongCurrentTime.innerHTML = `${formatTime(song.currentTime)}`
})

// Song End Behavior
song.addEventListener('ended', (e) => {
  if (autoplay) {
    nextTrack()
  } else {
    currentPlayBtnIcon.classList = 'fa fa-play'
    song.currentTime = 0
    progressBar.style.width = '0%'
    songNumber[songIndex].innerHTML = `${songIndex + 1}`
  }
})

// Song Item Click
songTitle.forEach((title) => {
  title.addEventListener('click', (e) => {
    songIndex = songs.indexOf(title.innerHTML)
    setCurrentSong(songIndex)
    playTrack()
  })
})

/********** MAIN **********/
// Populate song titles in title divs
for (let i = 0; i < songs.length; i++) {
  songTitle[i].innerHTML = songs[i]
}

// Load first song and get duration
setCurrentSong(0)
