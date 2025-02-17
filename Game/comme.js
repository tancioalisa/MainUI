const video = document.getElementById('backdrop-video');

// Listen for keydown events
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'f': // Press 'f' to toggle fullscreen
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
            break;
        case 'p': // Press 'p' to play/pause
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;
        case 'ArrowRight': // Press right arrow to skip forward
            video.currentTime += 5; // Skip forward 5 seconds
            break;
        case 'ArrowLeft': // Press left arrow to skip backward
            video.currentTime -= 5; // Skip backward 5 seconds
            break;
    }
});
