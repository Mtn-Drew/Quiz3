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

//hide everything but the intro page
function startPage(){
  console.log('Ran startPage');
  $('.nav-items').hide();
  $('.question-page').hide();
  $('.question-result').hide();
  $('.results-page').hide();
  $('.progress-bar').hide();
}

function beginQuestions(){
  console.log('Ran beginQuestions');
  //on click of start button
    // set up questions page
    $('#startButton').click(function() {
    $('.start-page').hide();
    $('.question-page').show();
    $('.nav-items').show();
    $('.progress-bar').show();
    $('.answer').hide();
});
  //on click of question button show answers
  $('#questionButton').click(function(){
    $('.answer').slideDown('slow');
  });
  //on click of answer run answer results
  $('.answer').click(function(){
    answerResults();
  });
}


function answerResults() {
  console.log('ran answerResults');
  //hide question and answers
  $('#questionButton').hide();
  $('.answer').hide();
  //if write answer


  //if wrong answer
}

// master function list
function beginQuiz() {
  console.log('ran beginQuiz');
  //set up initial page
  startPage();
  beginQuestions();  


  // hide the intro page
  // unhide the question page
  // $('#startButton').click(function() {


  // });

  //set question counter to 1

}

// render question html

// increment question number

// calculate score

// user submits answer

// quiz complete




// you got it right

// you got it wrong

// when the page loads, call beginQuiz
$(beginQuiz);