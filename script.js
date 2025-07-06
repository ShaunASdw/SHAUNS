document.querySelectorAll('.img-wrapper').forEach(wrapper => {
  let shakeInterval = null;
  let shakeDuration = 0.5;

  wrapper.addEventListener('mouseenter', () => {
    shakeDuration = 0.5;
    wrapper.classList.add('shake');
    wrapper.style.animationDuration = shakeDuration + 's';
    shakeInterval = setInterval(() => {
      shakeDuration = Math.max(0.08, shakeDuration * 0.8);
      wrapper.style.animationDuration = shakeDuration + 's';
    }, 1000);
    wrapper.querySelector('.hover-text').style.opacity = 1;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('shake');
    clearInterval(shakeInterval);
    wrapper.style.animationDuration = '';
    wrapper.querySelector('.hover-text').style.opacity = 0;
  });

  wrapper.addEventListener('click', () => {
    const modal = document.getElementById('popup-modal');
    document.getElementById('popup-img').src = wrapper.dataset.img;
    document.getElementById('popup-img').alt = wrapper.dataset.title;
    document.getElementById('popup-title').textContent = wrapper.dataset.title;
    document.getElementById('popup-desc').textContent = wrapper.dataset.desc;
    document.getElementById('popup-link').href = wrapper.dataset.link;
    modal.style.display = 'flex';
    document.body.classList.add('blur-bg');
  });
});

document.querySelector('#popup-modal .close-btn').onclick = function () {
  document.getElementById('popup-modal').style.display = 'none';
  document.body.classList.remove('blur-bg');
};

document.getElementById('popup-modal').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
    document.body.classList.remove('blur-bg');
  }
});
document.querySelectorAll('.img-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const modal = document.getElementById('popup-modal');
    document.getElementById('popup-img').src = wrapper.dataset.img;
    document.getElementById('popup-img').alt = wrapper.dataset.title;
    document.getElementById('popup-title').textContent = wrapper.dataset.title;
    document.getElementById('popup-desc').textContent = wrapper.dataset.desc;
    document.getElementById('popup-link').href = wrapper.dataset.link;
    modal.style.display = 'flex';
    document.body.classList.add('blur-bg');
  });
});

document.querySelector('#popup-modal .close-btn').onclick = function() {
  document.getElementById('popup-modal').style.display = 'none';
  document.body.classList.remove('blur-bg');
};

document.getElementById('popup-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
    document.body.classList.remove('blur-bg');
  }
});
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering the container click
    const parent = button.closest('.img-wrapper');
    const title = parent.dataset.title;
    alert(`Added "${title}" to your library!`);
    // Here you can also add actual logic to update the library
  });
});
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop the container click

    const parent = button.closest('.img-wrapper');
    const item = {
      title: parent.dataset.title,
      desc: parent.dataset.desc,
      link: parent.dataset.link,
      img: parent.dataset.img
    };

    // Get existing library or empty array
    let library = JSON.parse(localStorage.getItem('library')) || [];

    // Check for duplicates (optional)
    if (!library.some(entry => entry.title === item.title)) {
      library.push(item);
      localStorage.setItem('library', JSON.stringify(library));
      alert(`Added "${item.title}" to your library!`);
    } else {
      alert(`"${item.title}" is already in your library!`);
    }
  });
});
// Add Remove button functionality
wrapper.querySelector('.remove-btn').addEventListener('click', (e) => {
  e.stopPropagation(); // Stop opening modal
  const updatedLibrary = library.filter(entry => entry.title !== item.title);
  localStorage.setItem('library', JSON.stringify(updatedLibrary));
  location.reload(); // Refresh page to update list
});
const removeBtn = wrapper.querySelector('.remove-btn');

removeBtn.addEventListener('mouseenter', () => {
  wrapper.classList.add('shake');
});

removeBtn.addEventListener('mouseleave', () => {
  wrapper.classList.remove('shake');
});
