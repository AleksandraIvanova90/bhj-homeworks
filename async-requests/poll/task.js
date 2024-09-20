const title = document.getElementById('poll__title')
const answers = document.getElementById('poll__answers')

let xhr =  new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()
xhr.addEventListener('readystatechange', () => {
    let indexAnswer
    let idQuestion
    if (xhr.readyState === xhr.DONE) {
        let question = JSON.parse(xhr.response)
        idQuestion = question.id
                
        title.textContent = question.data.title
        question.data.answers.forEach ((answer) => {
            answers.insertAdjacentHTML('beforeend', `
                <button class="poll__answer">
                    ${answer}
                </button>`)
        })
        let listButton = Array.from(answers.children)
        listButton.forEach( (button) => {
            button.addEventListener('click', (event) => {
                alert('Спасибо, ваш голос засчитан!')
                indexAnswer= listButton.indexOf(button)
                event.stopPropagation()
                
                const xhr2 = new XMLHttpRequest;
                xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr2.send(`vote=${idQuestion}&answer=${indexAnswer}` );
                xhr2.addEventListener('readystatechange', () => {
                    if (xhr2.readyState === xhr2.DONE) {
                        let statistics = Array.from(JSON.parse(xhr2.response).stat)
                        let allVoices = 0
                        let newDiv = document.createElement('div')
                        statistics.forEach((stat) => {
                            allVoices += stat.votes
                            console.log(stat.votes)
                        })
                        statistics.forEach((stat) => {
                            newDiv.insertAdjacentHTML('beforeend', `
                                <div>${stat.answer}: ${(stat.votes/allVoices*100).toFixed(2)}%</div>`)
                        })
                        answers.replaceWith(newDiv)
                    }
                        
                })
            })
                
        })
    }
})