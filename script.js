document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Tambahkan class ke body untuk menyesuaikan latar belakang
    // Ini akan diterapkan saat halaman dimuat
    if (document.body.querySelector('.login-container')) {
        document.body.classList.add('login-body');
    } else if (document.body.querySelector('.profile-container')) {
        document.body.classList.add('profile-body');
    }


    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah form di-submit secara default

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Logika validasi sederhana (Anda bisa mengganti ini dengan validasi yang lebih kompleks)
            // Untuk percobaan, gunakan username 'test' dan password 'test'
            if (username === 'test' && password === 'test') {
                alert('Login Berhasil!');
                window.location.href = 'profile.html'; // Redirect ke halaman profil
            } else {
                alert('Username atau Password salah!');
            }
        });

        const resetButton = document.querySelector('.reset-btn');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                alert('Sesi telah direset (fungsi placeholder).');
                // Anda bisa menambahkan logika untuk mereset sesi atau form di sini
                loginForm.reset(); // Mengosongkan form
            });
        }
    }
});