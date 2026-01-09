function enterArchive() {
    const nickname = document.getElementById('nickname').value.trim();
    const errorBox = document.getElementById('gate-error');

    errorBox.textContent = '';

    if (!nickname) {
        errorBox.textContent = 'Ну ти хоч уведи щось, вампірське поріддя';
        return;
    }

    // 🔁 ТУТ буде твій API
    fetch('/api/check-nickname', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname })
    })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(data => {
            if (data.ok) {
                // 👉 УСПІХ
                window.location.href = 'archive.html';
            } else {
                errorBox.textContent = 'Згинь, нечиста';
            }
        })
        .catch(() => {
            errorBox.textContent = 'Помилка зʼєднання з архівом';
        });
}