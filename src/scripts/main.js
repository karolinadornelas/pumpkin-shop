function TypingND() {
    const messages = [
        "bem",
        "feliz",
        "saudavel",
        "satisfeito",
        "animado",
        "euforico",
        "contente",
    ];

    let index = 0;
    let typedText = '';
    let typingSpan = document.getElementById('type-span');

    function typeText() {
        if (typedText.length < messages[index].length) {
            typedText = messages[index].slice(0, typedText.length + 1);
            typingSpan.textContent = typedText; // Atualiza o texto no span
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                index = (index + 1) % messages.length;
                typedText = '';
                typeText();
            }, 2000);
        }
    }

    typeText();
}

TypingND();