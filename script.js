console.log("welcome to spotify clone");
let audioElement = new Audio()
let progressBar = document.getElementById("progressBar")
let masterPlay = document.getElementById("masterPlay")
let songItemImage = Array.from(document.getElementsByClassName("songItemImage"))
let songName = Array.from(document.getElementsByClassName("songName"))
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))
let masterSongText = document.getElementById("masterSongText")

let songIndex = 0;



let songsArray = [{ songgName: "Godzila (Eminem)", coverPath: "covers/1.jpg", filePath: "songs/1.mp3" },
{ songgName: "Channa Meraya(Arjit Singh)", coverPath: "covers/2.jpg", filePath: "songs/2.mp3" },
{ songgName: "Let me love you(Justin Bieber)", coverPath: "covers/3.jpg", filePath: "songs/3.mp3" },
{ songgName: "Kesariya", coverPath: "covers/4.jpg", filePath: "songs/4.mp3" },
{ songgName: "Mann Meri Jaan", coverPath: "covers/5.jpg", filePath: "songs/5.mp3" },
{ songgName: "Eenie Meenie (Justin Bieber)", coverPath: "covers/6.jpg", filePath: "songs/6.mp3" },
{ songgName: "Raatan Lambiyan (Jubin Nautiyal)", coverPath: "covers/7.jpg", filePath: "songs/7.mp3" },
{ songgName: "Heeriye Heeriye ", coverPath: "covers/8.jpg", filePath: "songs/8.mp3" },
{ songgName: "The Breakup song", coverPath: "covers/9.jpg", filePath: "songs/9.mp3" },
{ songgName: "Calm Down", coverPath: "covers/10.jpg", filePath: "songs/10.mp3" }
]

// changing covers and text of song names
for (let index in songItemImage) {
    songItemImage[index].src = songsArray[index].coverPath
    songName[index].innerText = songsArray[index].songgName

}



// code for master play area
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        audioElement.play();
        gif.style.opacity = 1
    }
    else {
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = 0
    }

})

audioElement.addEventListener("timeupdate", () => {

    // setting value of progress bar audioElement.currentTime gives current time of audio and audioElement.duration gives total duration of audio
    let progressInPercentage = (audioElement.currentTime / audioElement.duration) * 100
    progressBar.value = progressInPercentage
})

// seeking audio with progress bar 
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100
})
const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}
// for each item how to play and how to react upon click
songItemPlay.forEach((element) => {
    element.addEventListener("click", (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id)
        masterSongText.innerText = songsArray[songIndex].songgName

      

        audioElement.src = `songs/${songIndex + 1}.mp3`
        
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.currentTime = 0;
            audioElement.play()
            masterPlay.classList.remove("fa-circle-play")
            masterPlay.classList.add("fa-circle-pause")
            e.target.classList.remove("fa-circle-play")
            e.target.classList.add("fa-circle-pause")
            
            gif.style.opacity = 1

        }
        else {
            masterPlay.classList.remove("fa-circle-pause")
            masterPlay.classList.add("fa-circle-play")
            e.target.classList.remove("fa-circle-pause")
            e.target.classList.add("fa-circle-play")
            audioElement.pause();
            gif.style.opacity = 0
        }

    })
})
// how to  react on previous button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 9
    }
    else {
        songIndex -= 1
    }
    masterSongText.innerText = songsArray[songIndex].songgName
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")

})
// how to reach on next button 
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    masterSongText.innerText = songsArray[songIndex].songgName
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")

})
