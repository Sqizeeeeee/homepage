document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.question-row [data-question]').forEach(questionBlock => {
        const feedback = questionBlock.querySelector('.feedback');
        const buttons = questionBlock.querySelectorAll('.answer');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // 🔄 Сброс состояния перед новым кликом
                buttons.forEach(btn => {
                    btn.classList.remove('correct', 'incorrect');
                });
                feedback.textContent = '';
                feedback.style.color = '';

                // ✅ Правильный ответ
                if (this.dataset.correct === "true") {
                    this.classList.add('correct');
                    feedback.textContent = "Correct!";
                    feedback.style.color = "green";

                    // ⏳ Удаляем подсветку и текст через 3 секунды
                    setTimeout(() => {
                        this.classList.remove('correct');
                        feedback.textContent = '';
                        feedback.style.color = '';
                    }, 1200);

                } else {
                    // ❌ Неправильный ответ
                    this.classList.add('incorrect');
                    feedback.textContent = "Incorrect!";
                    feedback.style.color = "red";
                }
            });
        });
    });
});
