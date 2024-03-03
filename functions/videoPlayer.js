
const video = document.querySelector(".video");
const play  = document.querySelector(".btn");

function changeSpeed(speed) {
    video.playbackRate = speed;
}

video.addEventListener("timeupdate", () => {

    let current = (video.currentTime / video.duration) * 100;
    if (video.ended) {

        play.style.transform = `scale(150%, 100%) translateX(-25%) rotateZ(45deg)`;
        play.style.backgroundImage = `linear-gradient(to top right,rgb(var(--color4)) 50%,transparent 50%)`;
    }

    document.getElementsByClassName("bar")[0].style.width = `${current}%`;
})



// Pause or Play
function playVideo() {

    if (video.paused) {

        play.style.transform = `scale(100%, 100%) translateX(0) rotateZ(0deg)`;
        play.style.backgroundImage = `linear-gradient(to right, transparent 33.333% , rgb(var(--color7)) 33.333%, rgb(var(--color7)) 66.333%, transparent 66.333%)`;
        video.play();

    } else {

        play.style.transform = `scale(150%, 100%) translateX(-25%) rotateZ(45deg)`;
        play.style.backgroundImage = `linear-gradient(to top right,rgb(var(--color4)) 50%,transparent 50%)`;
        video.pause();
    }
}



// Trigger Fullscreen
function fullScrn(e) {

    e.preventDefault();
    video.requestFullscreen();
}


function rewindSecs() {

    video.currentTime = video.currentTime - ((video.duration/100) * 5);
}

function frwardSecs() {

    video.currentTime = video.currentTime + ((video.duration/100) * 5);
}