const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");



menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})




// Get all the video elements
const videos = document.querySelectorAll('video');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Check if the video is in the viewport
    if (entry.intersectionRatio > 0) {
      // Play the video
      entry.target.play();
    } else {
      // Pause the video
      entry.target.pause();
    }
  });
});

// Observe each video element
videos.forEach(video => {
  observer.observe(video);
});
