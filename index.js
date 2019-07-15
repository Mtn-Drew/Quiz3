const QUIZ = [
  {
    question: 'At what skill level can you start training for a marathon?',
    answers: ['Olympic athelete', 'Any', 'Experienced runner of many years', 'Beginner to running'],
    correctAnswer: 'Any',
    answerExplaination: 'Training begins with a plan, and planning can start at any skill level.'
    },
  {
    question: 'How long is a marathon?',
    answers: ['26.2 miles', '13.1 miles', '40 miles', '10 miles'],
    correctAnswer: '26.2 miles',
    answerExplaination:'While originally about 40 kilometers, in 1921 the length for a marathon was formally standardized at 26.2 miles.'
    },
  {
    question: 'During training, after how many weeks of progressively longer runs should you take an "easy" week?',
    answers: ['3-4', '5-6', '2', 'Never'],
    correctAnswer: '3-4',
    answerExplaination:"An 'easy' or 'rest' week every 3-4 weeks gives your body time to rebuild."
    },
  {
    question: 'How long should you be able to run without stopping or walking before starting a marathon program?',
    answers: ['30 mins', '60 mins', '120 mins', '180 mins'],
    correctAnswer: '30 mins',
    answerExplaination:"Running for 30 minutes is all that's required to start your training.  The first step is getting to 30 minutes."
    },
  {
    question: 'In marathon training, how many long runs are there per week?',
    answers: ['1', '2', '5', '6'],
    correctAnswer: '1',
    answerExplaination:'While long runs are essential, more than 1 a week does not give your body time to rebuild.'
    },
  {
    question: 'In marathon training, what is the minimum number of runs per week?',
    answers: ['3', '4', '5', '7'],
    correctAnswer: '3',
    answerExplaination:'Training plans vary widely, but 3 runs per week should be the minimum for any marathon training plan.'
    },
  {
    question: 'How long is a typical marathon training program?',
    answers: ['12-16 weeks', '16-20 weeks', '8 weeks', '20+ weeks'],
    correctAnswer: '12-16 weeks',
    answerExplaination:"Beginner plans may be longer, and advanced plans shorter, but the typical training plan is 12-16 weeks."
    },
  {
    question: 'What is the most common mistake with beginners to marathon training?',
    answers: ['Run too fast', 'Run too slow', 'Buy too many shoes', 'Don\'t match outfit to shoes'],
    correctAnswer: 'Run too fast',
    answerExplaination:"Marathons are about endurance first, and speed second.  Start slow and build up."
    },
  {
    question: 'What is the best footwear for marathon training?',
    answers: ['Name brand running shoe with full arch support and orthodics (if necessary)', 'Minimalist shoe with little to no support', 'Barefoot', 'All the above'],
    correctAnswer: 'All the above',
    answerExplaination:"Every runner is different.  Find what works best for you."
    },
  {
    question: 'What is the only designation a marathoner should be ashamed of?',
    answers: ['Second place (the first one to lose)', 'Finished in last place', 'DNF (did not finish)', 'DNS (did not start)'],
    correctAnswer: 'DNS (did not start)',
    answerExplaination:"The hardest part is getting yourself to the start line.  It requires planning, training, and resolve."
    }
];

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let questionNumber = 0;
let score = 0;
let progress = 0;

//home button
function backToHome() {
  $('.home').click(function() {
    location.reload();
});
}
//hide everything but the intro page
function startPage(){
  console.log('Ran startPage');
  //set up page by displaying correct elements
  $('.nav-items').hide();
  $('.progress-bar').hide();
  //$('.question-page').hide();
  // set inital values
  $('.score').html('Score: '+score+'/0');
  $('.progress').html('Progress: '+progress+'%');
}

function setUpQuestionPage() {
  console.log('ran setUpQuestion');
  $('.start-page').hide();
  $('.question-page').show();
  $('#questionButton').show();
  $('.nav-items').show();
  $('.progress-bar').show();
  $('.question-result').hide();
}

function setUpQuestionResultPage() {
  console.log('ran setUpQuestionResultPage');
  $('.question-page').hide();
}

function buildCurrentQuestion() {
  console.log('ran buildCurrentQuestion');
  console.log('current question number is ' + questionNumber);
  console.log('quiz length is ' + QUIZ.length);
    
      //make the question (still hidden)
      $('.question-page').append(
      `<button type="button" id="questionButton">${QUIZ[questionNumber].question}</br></button>
      <button type="submit" name="answer"  value="${QUIZ[questionNumber].answers[0]}" class="answer" id="answer-1">${QUIZ[questionNumber].answers[0]}</button>
      <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[1]}" class="answer" id="answer-2">${QUIZ[questionNumber].answers[1]}</button>
      <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[2]}" class="answer" id="answer-3">${QUIZ[questionNumber].answers[2]}</button>
      <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[3]}" class="answer" id="answer-4">${QUIZ[questionNumber].answers[3]}</button>
      </form>`
      );
}

function askQuestion() {
  console.log('ran askQuestion');
  setUpQuestionPage();

  //on click of question button show answers
  $('.question-page').show();
  $('.answer').hide();
  $('#questionButton').click(function(){
    $('.answer').slideDown('slow');
  });
//on click of answer run answer results
$('.answer').click(function(event){
  event.preventDefault();
  let tempVal = $(this).val();
  let answer = `${QUIZ[questionNumber].correctAnswer}`;
  console.log('val is ' + tempVal);
  console.log('correct answer is - '+ answer);

  answerResults(tempVal===answer);
});
}

function firstQuestion() {
  console.log('Ran firstQuestion');
  buildCurrentQuestion();

  // wait for click
  $('#startButton').click(function() {
    nextQuestion();
    });
  }

function howManyQuestionsLeft(){
  if (questionNumber < QUIZ.length-1) {
  $('.question-result').append(
    `<div class="display-box">
    <p>Your score is now : ${score}/${questionNumber+1}</p>
    <p>Keep pushing!  Only ${QUIZ.length-questionNumber-1} more questions to go!</p>
    </div>
    <button type="button" id ='next' class='next-button'>Next</button>`); 
  } else {
    $('.question-result').append(
      `<div class="display-box">
      <p>You made it to the finish!</p>
      <p>Great Job!!</p>
      </div>
      <button type="button" id ='next' class='next-button'>Click here for your results</button>` );
  }
}

function answerResults(isCorrect) {
  console.log('ran answerResults');
  console.log(isCorrect);

  setUpQuestionResultPage();
  //hide question and answers
  $('#questionButton').hide();
  $('.answer').hide();
  $('.question-result').show();
  //if write answer, display 'you got it right' page
  //then increment question number and onto next question
  if (isCorrect) {
    score++;
    $('.question-result').append(
   `<div class="correct-answer">
    <h2>Correct!</h2>
    <p>${QUIZ[questionNumber].answerExplaination}<p>`);
    
    howManyQuestionsLeft();

    $('.score').html('Score : '+score+'/'+(questionNumber+1));
    $('.progress').html('Progress: '+((questionNumber+1)/QUIZ.length)*100+'%');
  } else {
    $('.question-result').append(
    `<h2>Incorrect</h2>
      <p>Sorry, the correct answer was: </p>
      <div class="display-correct-answer">${QUIZ[questionNumber].correctAnswer}</div>
      <p>${QUIZ[questionNumber].answerExplaination}<p>`);

      howManyQuestionsLeft();

      $('.score').html('Score : '+score+'/'+(questionNumber+1));
      $('.progress').html('Progress: '+((questionNumber+1)/QUIZ.length)*100+'%');
  }
  nextButton();
}

function nextButton() {
  console.log('ran nextButton');
  $('#next').click(function() {
  // increment current question number
  questionNumber++;
  console.log('current question number is now ' + questionNumber);

  if (questionNumber<10){
    console.log('go to next question');
    //remove old question
    $('.question-page').empty();
    $('.question-result').empty();
    buildCurrentQuestion();
    askQuestion();
  } else {
    finalResults();
  }
});
}

  function listOfQuestions() {
    console.log('ran listOfQuestions');
    $('.next-button').click(function() {
      // check if quiz is over then display results
      if (questionNumber > QUIZ.length) { 
        finalResults();
      // if not over, ask next question
      } else {
        //set up question page
        setUpQuestionPage();
        buildCurrentQuestion();
        askQuestion();
      };
    });
 }
function finalResults() {
  console.log('ran finalResults');
  $('.results-page').toggleClass('hide');
  $('.question-result').remove();
  $('.results-page').append(`
  <h2 class="results-title">You Finished!</h2>
  <p class="results-message">Let's see how you did-</p>
  <p class="results-message">Out of ${QUIZ.length} questions,</br> you scored a ${score}</p>
  <button type="button" id="start-button">Click here to start again</button>`);
  $('#start-button').click(function() {
    console.log('lets start again');
    location.reload();
  });
}

// master function list
function beginQuiz() {
  console.log('ran beginQuiz');
  startPage();
  listOfQuestions();
}

$(beginQuiz);