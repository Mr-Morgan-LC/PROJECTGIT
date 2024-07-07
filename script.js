function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    document.getElementById('heart-container').appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove the heart after 7 seconds
  }
  
  setInterval(createHeart, 500); // Create a new heart every 0.4 seconds
  