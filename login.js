document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // step-3: get password
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    console.log(email);
    console.log(password);
    if(email === 'refatbubt@gmail.com' && password === 'refat1234'){
        location.href = 'bank.html'
    }
    else{
        alert('kaj hobena . aita sodho amar baaper bank');
    }
})