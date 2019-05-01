//playlist
const songs = [
	"bensound-creativeminds.mp3",
	"bensound-energy.mp3",
	"bensound-littleidea.mp3",
	"bensound-photoalbum.mp3",
	"bensound-sweet.mp3",
]

const createSongList = () => {
	const list = document.createElement("ul")

for(let i = 0; i < songs.length; i++){
	const item = document.createElement("li")
	item.appendChild(document.createTextNode(songs[i]))
	
	list.appendChild(item)
	}
	return list
}

document.getElementById("songList").appendChild(createSongList())

//currently playing
songList.onclick = (e) =>{
const clickedItem = e.target
const source = document.getElementById("source")
source.src = "audio/" + clickedItem.innerText

document.getElementById("currentlyPlayingSong").innerHTML = "Currently Playing: "
document.getElementById("currentSong").innerHTML = clickedItem.innerText		
player.load()
player.play()
}

//Play and Pause buttons
const playAudio = () => {
	if(player.readyState){
			player.play()
	}
}

const pauseAudio = () => {
			player.pause()
	}

//volume slider
const slider = document.getElementById("volumeSlider")
slider.oninput = (e) => {
const volume = e.target.value
player.volume = volume
}

//progress bar
const updateProgress = () => {

	if(player.currentTime >0){
	const progressBar = document.getElementById("progress")
	progressBar.value = (player.currentTime / player.duration) * 100	
	}
}
