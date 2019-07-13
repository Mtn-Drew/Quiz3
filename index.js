const QUIZ = [
  {
    question: 'At what skill level can you start training for a marathon?',
    answers: ['any', 'olympic athelete', 'experienced runner of many years', 'beginner to running'],
    correctAnswer: 'any',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'How long is a marathon?',
    answers: ['26.2 miles', '13.1 miles', '40 miles', '10 miles'],
    correctAnswer: '26.2 miles',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'During training, after how many weeks of progressively longer runs should you take an "easy" or "rest" week?',
    answers: ['3-4', '5-6', '2', 'never'],
    correctAnswer: '3-4',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'How long should you be able to run at an easy pace without stopping or walking before starting a marathon program?',
    answers: ['30 mins', '60 mins', '120 mins', '180 mins'],
    correctAnswer: '30 mins',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'In marathon training, how many long runs are there per week?',
    answers: ['1', '2', '5', '6'],
    correctAnswer: '1',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'In marathon training, what is the minimum number of runs per week?',
    answers: ['3', '4', '5', '7'],
    correctAnswer: '3',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'How long is a typical marathon training program?',
    answers: ['12-16 weeks', '16-20 weeks', '8 weeks', '20+ weeks'],
    correctAnswer: '12-16 weeks',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'What is the most common mistake with beginners to marathon training?',
    answers: ['Run too fast', 'Run too slow', 'Buy too many shoes', 'Don\'t match outfit to shoes'],
    correctAnswer: 'Run too fast',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'What is the best footwear for marathon training?',
    answers: ['Name brand running shoe with full arch support and orthodics (if necessary)', 'Minimalist shoe with little to no support', 'Barefoot', 'All the above'],
    correctAnswer: 'All the above',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    },
  {
    question: 'What is the only designation a marathoner should be ashamed of?',
    answers: ['Second place (the first one to lose)', 'Finished in last place', 'DNF (did not finish)', 'DNS (did not start)'],
    correctAnswer: 'DNS (did not start)',
    backgroundImage: 'imageLink',
    progressImage: 'imageLink'
    }
];

let currentQuestion = 0;

//hide everything but the intro page
function startPage(){
  console.log('Ran startPage');
  //set up page by displaying correct elements
  $('.nav-items').hide();
  $('.progress-bar').hide();
  $('.question-page').hide();
}

function setUpQuestionPage() {
  console.log('ran setUpQuestion');
  $('.start-page').hide();
  $('.question-page').show();
  $('#question-button').show();
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
  console.log('current question number is ' + currentQuestion);
  console.log('quiz length is ' + QUIZ.length);
    if (currentQuestion < QUIZ.length) {
      //make the question (still hidden)
      $('.question-page').append(
      `<button type="button" id="questionButton">${QUIZ[currentQuestion].question}</button>
      <button type="submit" name="answer"  value="${QUIZ[currentQuestion].answers[0]}" class="answer" id="answer-1">${QUIZ[currentQuestion].answers[0]}</button>
      <button type="submit" name="answer" value="${QUIZ[currentQuestion].answers[1]}" class="answer" id="answer-2">${QUIZ[currentQuestion].answers[1]}</button>
      <button type="submit" name="answer" value="${QUIZ[currentQuestion].answers[2]}" class="answer" id="answer-3">${QUIZ[currentQuestion].answers[2]}</button>
      <button type="submit" name="answer" value="${QUIZ[currentQuestion].answers[3]}" class="answer" id="answer-4">${QUIZ[currentQuestion].answers[3]}</button>
      </form>`
      );
      }; //else final results page
}

function nextQuestion() {
  console.log('ran nextQuestion');
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
  let answer = `${QUIZ[currentQuestion].correctAnswer}`;
  console.log('val is ' + tempVal);
  console.log('correct answer is - '+ answer);

  //if this answer equals the correctAnswer
  // run correctAnswer()
  // else run wrongAnswer
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
    $('.question-result').append(
   `<div class="correct-answer">
    <h2>Correct!</h2>
    <p>Your score is now :</p>
    <p>Only X more to go!</p>
    <button type="button" id = 'next'>Next</button>
    `);
  } else {
    $('.question-result').append(
    `<h2>Incorrect</h2>
      <p>Sorry, the correct answer was: </p>
      <div class="display-correct-answer">Lorem ipsum dolor sit amet.</div>
      <p>Keep pushing!  Only X more to go!</p>
      <button type="button" id='next'>Next</button>
      `);
  }
  nextButton();
}

function nextButton() {
  console.log('ran nextButton');
  $('#next').click(function() {
  // increment current question number
  ++currentQuestion;
  console.log('current question number is now ' + currentQuestion);
  if (currentQuestion<10){
    console.log('go to next question');
    nextQuestion();
  } else {
    finalResutls();
  }
});
}
  // check if quiz is done and send to finals page or next questions


// dummies
  function listOfQuestions() {
    console.log('ran listOfQuestions');
    if (currentQuestion===0) {
      firstQuestion();
    } else {
      nextQuestion();
    }
}
function displayResults() {
  console.log('ran displayResults');
  //if 
}

// master function list
function beginQuiz() {
  console.log('ran beginQuiz');
  startPage();
  listOfQuestions();
  displayResults();
}


$(beginQuiz);