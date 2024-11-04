import * as env from './env';
const loginForm = document.querySelector('.login_formulario');

function authLogin(username, password, remember_me = false) {
    const login = async () => {
        return await fetch(`${env.API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password,
            }),
        });
        
    }
    login().then((response) => {
        if (!response.ok) {
            const error = document.querySelector('.error');
            error.textContent = response.error;
            error.style.display = 'block';
            return;
        }
        if (remember_me) {
            localStorage.setItem('token', response.access_token);
        } else {
            sessionStorage.setItem('token', response.access_token);
        }
        // window.location.href = '/';
        console.log(response);
        
    }).catch((error) => {
        console.error(error);
    });
}

    

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember_me = document.getElementById('remember_me').checked;
    authLogin(username, password, remember_me);
});