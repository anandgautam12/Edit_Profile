// Filter Function
function filterVideos(category) {
  let items = document.querySelectorAll('.portfolio-item');
  let buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if(category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
      item.style.opacity = 0;
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transition = "opacity 0.5s ease-in-out";
      }, 100);
    } else {
      item.style.opacity = 0;
      setTimeout(() => { item.style.display = 'none'; }, 300);
    }
  });
}

// Lightbox
const items = document.querySelectorAll('.portfolio-item');
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const videoDescription = document.getElementById('videoDescription');

items.forEach(item => {
  const video = item.querySelector('video');
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxVideo.src = video.src;
    lightboxVideo.play();
    videoDescription.textContent = item.getAttribute('data-description');
  });

  // Hover Preview
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxVideo.pause();
  lightboxVideo.src = "";
}

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) closeLightbox();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape") closeLightbox();
});