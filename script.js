var password = document.getElementById('password');
var msg = document.getElementById('text');
var str = document.getElementById('strength');

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        msg.innerHTML = 'Password must be at least 8 characters';
        str.style.color = '#ff0000';
    } else {
        msg.innerHTML = 'Password Strength: <span id="strength"></span>';
        str.style.color = '#fff';
        checkStrength(password.value);
    }
});