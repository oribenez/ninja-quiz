const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const resultSection = document.querySelector('.result-section');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    
    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        } 
    });
    // show the result
    scrollTo(0,0);
    //resultSection.querySelector('span').textContent = score + '%';
    resultSection.classList.remove('d-none');
    
    //output
    let output = 0;
    const timer = setInterval(() => {
        resultSection.querySelector('span').textContent = output + '%';

        //break statement interval
    if (output === score) {
        clearInterval(timer);
    }
    output++;
}, 30);
});
