var password = document.getElementById('password');
var msg = document.getElementById('text');
var str = document.getElementById('strength');

password.addEventListener('input', () => {


    if (password.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
    if (password.value.length == 0) {
        msg.style.display = 'none';
        str.innerHTML = '';
        password.style.border = '2px solid #ccc';
        
    } else if(password.value.length < 4) {
        str.innerHTML = 'Weak';
        str.style.color = 'red';
        password.style.border = '2px solid red';
    } else if(password.value.length < 7) {
        str.innerHTML = 'Medium';
        str.style.color = 'orange';
        password.style.border = '2px solid orange';
    } else if(password.value.length < 10) {
        str.innerHTML = 'Strong';
        str.style.color = 'seagreen';
        password.style.border = '2px solid seagreen';
    } else {
        str.innerHTML = 'Very Strong';
        str.style.color = 'green';
        password.style.border = '2px solid green';
    }
});