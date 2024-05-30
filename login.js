document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {

                    window.location.href = 'books.html';
                } else {
                    alert('Email ou mot de passe incorrect.');
                }
            })
            .catch(error => console.error('Error logging in:', error));
    });
});
