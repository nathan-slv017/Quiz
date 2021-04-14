const quizData =[
    {
        question:"Em que ano ocorreu o atentado as torres gêmeas ?",
        a:"2000",
        b:"2001",
        c:"2012",
        d:"1964",
        correct: "b"
    },
    {
        question:"Quando foi a ultima vez em que o Brasil foi campeão mundial ?",
        a:"2002",
        b:"2006",
        c:"2010",
        d:"2014",
        correct: "a"
    },
    {
        question:"qual é a moeda atual da união europeia",
        a:"dolar",
        b:"peso",
        c:"real",
        d:"euro",
        correct: "d"
    },
    {
        question:"Qual é a empresa criadora do celular iphone",
        a:"apple",
        b:"sansung",
        c:"motorola",
        d:"huawei",
        correct: "a"
    }
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

console.log(submitBtn);

let currentQuiz = 0;
let score = 0;

loadQuiz()
function loadQuiz(){
        deselectAnswers()    
    const quizDataCorent = quizData[currentQuiz];

    questionEl.innerText = quizDataCorent.question;

    a_text.innerText = quizDataCorent.a;
    b_text.innerText = quizDataCorent.b;
    c_text.innerText = quizDataCorent.c;
    d_text.innerText = quizDataCorent.d;
};

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEls) =>{
        if(answerEls.checked){
            answer = answerEls.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEls) => {
        answerEls.checked = false
    })
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz ++;
        if(currentQuiz <quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `
           <h2> Você acertou ${score}/ ${quizData.length} perguntas </h2>

            <button onclick="location.reload()">Tentar novamente</button
            `
        }
    }
})


