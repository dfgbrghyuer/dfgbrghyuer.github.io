function startFiltering() {
    const userId = document.getElementById('user-id').value.trim();
    if (!userId) {
        alert('لطفاً آیدی کاربر را وارد کنید.');
        return;
    }

    // نمایش پیام "در حال فیلتر کردن"
    document.getElementById('status-message').style.display = 'block';
    document.getElementById('server-message').style.display = 'none';

    // پس از 1 تا 2 دقیقه، نمایش پیغام "سرور خاموش است"
    setTimeout(() => {
        document.getElementById('status-message').style.display = 'none';
        document.getElementById('server-message').style.display = 'block';
    }, Math.random() * (120000 - 60000) + 60000);  // بین 1 تا 2 دقیقه (60 تا 120 ثانیه)
}
