const score = document.querySelector('#score');
const startQuiz = document.querySelector("#start-quiz");
const audioBack = document.querySelector("#audio-back");
const audioErro = document.querySelector("#audio-erro");
const question1 = document.querySelector("#question-1");
const question2 = document.querySelector("#question-2");
const question3 = document.querySelector("#question-3");
const quizScore = document.querySelector('.quiz__score');
const audioCorrect = document.querySelector("#audio-correct");
const finishQuizButton = document.querySelector("#finish-quiz");


startQuiz.addEventListener('click', () => {
    startQuiz.classList.add('quiz__start--hidden')
    question1.classList.remove('quiz__question--hidden')
    audioBack.play()
    console.log("clicou!")
    })

    let totalScore = 0;

    question1.addEventListener('submit', (event)=>{
        event.preventDefault() 
        console.log('Questao Enviada')
        const  isCorrect = event.submitter.hasAttribute('data-correct')
        console.log('Marcou: ', isCorrect)

        if(isCorrect){
            event.submitter.classList.add('quiz__option--correct')
            totalScore = totalScore + 10
            audioCorrect.play()

        } else{
            event.submitter.classList.add('quiz__option--wrong') 
            audioErro.play()  
        }


            question1.querySelectorAll('.quiz__option').forEach(Option =>{
            Option.setAttribute('disabled', true)

            question2.classList.remove('quiz__question--hidden')

        })
    });

   question2.addEventListener('submit', (event)=>{
        event.preventDefault() 
        console.log('Questao Enviada')
        const  isCorrect = event.submitter.hasAttribute('data-correct')
        console.log('Marcou: ', isCorrect)

        if(isCorrect){
            event.submitter.classList.add('quiz__option--correct')
            totalScore = totalScore + 10
            audioCorrect.play()

        } else{
            event.submitter.classList.add('quiz__option--wrong')  
            audioErro.play() 
        }

            question2.querySelectorAll('.quiz__option').forEach(Option =>{
            Option.setAttribute('disabled', true)

            question3.classList.remove('quiz__question--hidden')

        })

    }); 
    
    question3.addEventListener('submit', (event)=>{
        event.preventDefault() 
        console.log('Questao Enviada')
        const  isCorrect = event.submitter.hasAttribute('data-correct')
        console.log('Marcou: ', isCorrect)

        
        if(isCorrect){
            event.submitter.classList.add('quiz__option--correct')
            totalScore = totalScore + 10
            audioCorrect.play()

        } else{
            event.submitter.classList.add('quiz__option--wrong') 
            audioErro.play()  
        }

            question3.querySelectorAll('.quiz__option').forEach(Option =>{
            Option.setAttribute('disabled', true)

        })

        score.textContent = totalScore
        quizScore.classList.remove('quiz__score--hidden')
        finishQuizButton.classList.remove('quiz__start--hidden')

    });
    finishQuizButton.addEventListener('click', () =>{
    window.location.reload()
    })