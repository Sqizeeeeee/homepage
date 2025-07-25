document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.question-row [data-question]').forEach(questionBlock => {
        const feedback = questionBlock.querySelector('.feedback');
        const buttons = questionBlock.querySelectorAll('.answer');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(btn => {
                    btn.classList.remove('correct', 'incorrect');
                });
                feedback.textContent = '';
                feedback.style.color = '';

                if (this.dataset.correct === "true") {
                    this.classList.add('correct');
                    feedback.textContent = "Correct!";
                    feedback.style.color = "green";


                    setTimeout(() => {
                        this.classList.remove('correct');
                        feedback.textContent = '';
                        feedback.style.color = '';
                    }, 1200);

                } else {

                    this.classList.add('incorrect');
                    feedback.textContent = "Incorrect!";
                    feedback.style.color = "red";
                }
            });
        });
    });
});
