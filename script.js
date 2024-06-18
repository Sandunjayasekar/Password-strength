var password = document.getElementById('password');
var msg = document.getElementById('text');
var str = document.getElementById('strength');

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
});