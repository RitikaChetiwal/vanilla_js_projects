let countdownInterval;

function startCountdown() {
  const inputVal = document.querySelector('.pickerInput').value;
  if (!inputVal) return alert('Please select a date and time!');

  const targetDate = new Date(inputVal).getTime();

  if (countdownInterval) clearInterval(countdownInterval); // clear any old intervals

  countdownInterval = setInterval(function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector('.countdown').innerHTML = '<div class="expired">EXPIRED</div>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

const startCountdownBtn = document.querySelector('.startCountdownBtn')
startCountdownBtn.addEventListener('click', startCountdown)