
let questionNumber = 0;
let score = 0;
let progress = 0;

//home button
function backToHome() {
  $('.home').click(function() {
    location.reload();
  });
}

//set up Start page by displaying correct elements
function setUpStartPage(){
  $('.start-page').show();
  $('.nav-items').hide();
  $('.question-page').hide();
  $('.question-result').hide();
  $('.results-page').hide();
  // show inital values
  $('.score').html('Score: '+score+'/0');
  $('.progress').html('Progress: '+progress+'%');
}

//set up Question page by displaying correct elements
function setUpQuestionPage() {
  $('.start-page').hide();
  $('.question-page').show();
  $('#questionButton').show();
  $('.nav-items').show();
  $('.question-result').hide();
}

//set up Question Result page by displaying correct elements
function setUpQuestionResultPage() {
  $('.question-page').hide();
  $('#questionButton').hide();
  $('.answer').hide();
  $('.question-result').show();
}

//set up Final Results page by displaying correct elements
function setUpFinalResultPage() {
  $('.results-page').show();
  $('.nav-items').hide();
  $('.question-result').hide();
}

//make the question html
function buildCurrentQuestion() {
  $('.question-page').append(
  `<form>  
  <button type="button" id="questionButton">${QUIZ[questionNumber].question}</br></button>
  <button type="submit" name="answer"  value="${QUIZ[questionNumber].answers[0]}" class="answer" id="answer-1">${QUIZ[questionNumber].answers[0]}</button>
  <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[1]}" class="answer" id="answer-2">${QUIZ[questionNumber].answers[1]}</button>
  <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[2]}" class="answer" id="answer-3">${QUIZ[questionNumber].answers[2]}</button>
  <button type="submit" name="answer" value="${QUIZ[questionNumber].answers[3]}" class="answer" id="answer-4">${QUIZ[questionNumber].answers[3]}</button>
  </form>`
  );
}

//display question page and wait for answer
function askQuestion() {
  //on click of question button show answers
  $('.question-page').show();
  $('.answer').hide();
  $('#questionButton').click(function(){
    $('.answer').slideDown('slow');
  });
  //on click of answer run answer results
  $('.answer').click(function(event){
    event.preventDefault();
    answerResults($(this).val()===`${QUIZ[questionNumber].correctAnswer}`);
  });
}

//display how many questions left; give finished message if no more questions
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

//display whether answer was right or wrong
function answerResults(isCorrect) {
  setUpQuestionResultPage();
  //if right answer, display 'you got it right' page
  //then increment question number and score and onto next question
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
  //if wrong answer, display 'you got it wrong' page
  //then increment question number and onto next question  
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

//on click of next button, increment question number, remove old question, and onto next question
function nextButton() {
  $('#next').click(function() {
  // increment current question number
  questionNumber++;
  //check if we are out of questions
  if (questionNumber<QUIZ.length) {
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

//reset quiz
function resetQuiz () {
  questionNumber = 0;
  score = 0;
  progress = 0;
  setUpStartPage();
}

//display final results
function finalResults() {
  setUpFinalResultPage();
  $('.results-page').append(`
  <h2 class="results-title">You Finished!</h2>
  <p class="results-message">Let's see how you did-</p>
  <p class="results-message">Out of ${QUIZ.length} questions,</br> you scored a ${score}</p>
  <button type="button" id="start-button">Click here to start again</button>`);
  //on click of button, reset quiz
  $('#start-button').click(function() {
  //remove old question
  $('.question-page').empty();
  $('.question-result').empty();
  //reset quiz
  resetQuiz();
  });
}

//on click of next button, ask next question
function nextQuestion() {
  $('.next-button').click(function() {
    setUpQuestionPage();
    buildCurrentQuestion();
    askQuestion();
    });
}

//start app with intro page and wait for click on button to start quiz
function beginQuiz() {
  setUpStartPage();
  nextQuestion();
}

$(beginQuiz);