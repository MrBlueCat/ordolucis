function enterArchive() {
    const nickname = document.getElementById('nickname').value.trim();
    const errorBox = document.getElementById('gate-error');

    errorBox.textContent = '';

    if (!nickname) {
        errorBox.textContent = 'Ну ти хоч уведи щось, вампірське поріддя';
        return;
    }

    // 🔁 ТУТ буде твій API
   fetch(`https://ordolucis.runasp.net/Checker/checkNickname?name=${nickname}`, {
    method: 'GET'
})
        .then(res => {
            if (!res.ok) throw new Error();
            return res.text();
        })
        .then(data => {
        if (data.result === 'loud') {
            // спеціальна умова для loud
            errorBox.textContent = 'Shout loud into the cosmos';
        } else {
            // інша строка — зберігаємо як токен і йдемо на сторінку
            localStorage.setItem('auth_token', data.result);
            window.location.href = 'archive.html';
        }
    })
        .catch(() => {
            errorBox.textContent = 'Помилка зʼєднання з архівом';
        });

}



