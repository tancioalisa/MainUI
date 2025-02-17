const video = document.getElementById("backdrop-video");
const playPauseBtn = document.getElementById("playPauseBtn");
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");

// Play/Pause button functionality
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶";
  }
});

// Show video on 4 devices (simulation)
showBtn.addEventListener("click", () => {
  sendVisibilityUpdate(true);
});

// Hide video on 4 devices (simulation)
hideBtn.addEventListener("click", () => {
  sendVisibilityUpdate(false);
});

// Simulating sending visibility state to 4 devices
function sendVisibilityUpdate(isVisible) {
  // Assume `sendToDevices` function sends the command to 4 devices
  console.log(isVisible ? "Showing video on 4 devices" : "Hiding video on 4 devices");
  video.style.display = isVisible ? "block" : "none";
}