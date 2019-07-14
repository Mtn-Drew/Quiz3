const QUIZ = [
  {
    question: 'At what skill level can you start training for a marathon?',
    answers: ['Olympic athelete', 'Any', 'Experienced runner of many years', 'Beginner to running'],
    correctAnswer: 'Any',
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
    answers: ['3-4', '5-6', '2', 'Never'],
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
    <p>Only ${QUIZ.length-questionNumber-1} more to go!</p>
    <button type="button" id ='next' class='next-button'>Next</button>
    `);
    score++;
    $('.score').html('Score : '+score+'/'+(questionNumber+1));
    $('.progress').html('Progress: '+((questionNumber+1)/QUIZ.length)*100+'%');
  } else {
    $('.question-result').append(
    `<h2>Incorrect</h2>
      <p>Sorry, the correct answer was: </p>
      <div class="display-correct-answer">${QUIZ[questionNumber].correctAnswer}</div>
      <p>Keep pushing!  Only ${QUIZ.length-questionNumber-1} more to go!</p>
      <button type="button" id='next' class='next-button'>Next</button>
      `);
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
  <h2>You Finished!</h2>
  <p>Let's see how you did-</p>
  <p>Out of ${QUIZ.length} questions, you scored a ${score}</p>
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