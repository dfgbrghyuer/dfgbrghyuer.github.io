const alertBox = document.getElementById('alertBox');
const alertMessage = document.getElementById('alertMessage');
const alertAnimation = document.getElementById('alertAnimation');

function playSound(type) {
    const audio = new Audio();
    if (type === 'morning') {
        audio.src = 'morning_sound.mp3'; // صدای شاد صبح
    } else if (type === 'sleep') {
        audio.src = 'sleep_sound.mp3'; // صدای آرامش‌بخش خواب
    } else if (type === 'rest') {
        audio.src = 'rest_sound.mp3'; // صدای آرام‌بخش استراحت
    } else if (type === 'urgent') {
        audio.src = 'urgent_sound.mp3'; // صدای هشدار فوری
    }
    audio.play();
}

function triggerAlert(type) {
    alertBox.style.display = 'flex';

    if (type === 'morning') {
        alertMessage.textContent = 'صبح بخیر! روز جدید آغاز شده است.';
        alertAnimation.style.animation = 'wakeUp 1s ease-in-out';
        playSound('morning');
    } else if (type === 'sleep') {
        alertMessage.textContent = 'وقت خواب است. به آرامی بخوابید.';
        alertAnimation.style.animation = 'sleep 1.5s ease-in-out';
        playSound('sleep');
    } else if (type === 'rest') {
        alertMessage.textContent = 'وقت استراحت است. نفس عمیق بکشید.';
        alertAnimation.style.animation = 'rest 2s infinite';
        playSound('rest');
    } else if (type === 'urgent') {
        alertMessage.textContent = 'هشدار! اقدامی فوری نیاز است.';
        alertAnimation.style.animation = 'urgent 1s infinite';
        playSound('urgent');
    }
}

alertBox.addEventListener('click', () => {
    alertBox.style.display = 'none';
});
