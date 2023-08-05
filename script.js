let songIndex = 0;
let audioElement = new Audio('songs/3.mp3')
let play = document.getElementById('play')
let seek = document.getElementById('seek')
let next = document.getElementById('next');
let pre = document.getElementById('pre');
let vol = document.getElementById('vol');
let songItem = document.getElementsByClassName('songItem')
let songs = [
    { songName: 'Aha Re __ আহারে ', filepath: 'songs/1.map3', coverpath: 'cover/1.jpg' },
    { songName: 'BROWN MUNDE - AP DHILLON ', filepath: 'songs/2.map3', coverpath: 'cover/2.jpg' },
    { songName: 'Calvin Harris_ Dua Lipa - One Kiss ', filepath: 'songs/3.map3', coverpath: 'cover/3.jpg' },
    { songName: 'DIPANNITA _ Sorry Dipannita ', filepath: 'songs/4.map3', coverpath: 'cover/4.jpg' },
    { songName: 'Dusshopno - Odd Signature', filepath: 'songs/5.map3', coverpath: 'cover/5.jpg' },
    { songName: 'Eminem - Stan', filepath: 'songs/6.map3', coverpath: 'cover/6.jpg' },
    { songName: 'MINAR RAHMAN _ JHOOM ', filepath: 'songs/7.map3', coverpath: 'cover/7.jpg' },
    { songName: 'Sia - Cheap Thrills  ', filepath: 'songs/8.map3', coverpath: 'cover/8.jpg' },
    { songName: 'পুনর্জন্ম _ PunorJonmo', filepath: 'songs/9.map3', coverpath: 'cover/9.jpg' },
]


// listen to events
play.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')

    } else {
        audioElement.pause()
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
    }
})

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    seek.value = progress
    console.log('timeupdate')
})

songItem.forEach(element => {
    element.getElementsByClassName('')[0].src = songs[i].songName;
});



// volume control
audioElement.setVolume(vol.value);