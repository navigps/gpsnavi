let currentIndex = 0;
const photos = document.querySelectorAll('.photo');

function showPrevious() {
    photos[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    photos[currentIndex].classList.add('active');
}

function showNext() {
    photos[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % photos.length;
    photos[currentIndex].classList.add('active');
}



function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const value = parseFloat(document.getElementById('value').value) || 0;
    const total = quantity * value;
    document.getElementById('total-amount').textContent = total.toFixed(2) + ' TL';
  }
  