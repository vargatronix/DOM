
const form = document.getElementsById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});


function checkInputs() {
   const usernameValue = username.value.trim();
   const passwordValue = password.value.trim();
    
if(usernameValue === ''){
    setErrorFor(username, 'please, enter username ')
    
}else if {
    (usernameValue !== 'user_name')
    setErrorFor(username, 'please, enter valid username')
    
    
}else{
    setSuccessFor(username);
}
    
}