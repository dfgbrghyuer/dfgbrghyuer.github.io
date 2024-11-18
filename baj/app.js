const correctPassword = "Dr.Sadeghi"; // رمز عبور صحیح
const messageBox = document.getElementById('messageBox');
const passwordInput = document.getElementById('passwordInput');

function checkPassword() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    alert("رمز عبور صحیح است. خارج می‌شوید.");
    window.location.href = 'https://web.rubika.ir/'; // یا هر صفحه‌ای که بخواهید کاربر به آنجا هدایت شود.
  } else {
    alert("رمز عبور اشتباه است. نمی‌توانید خارج شوید.");
  }
}
