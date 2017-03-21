var Question = function( questionText, possibleAnswers, correctAnswer ) {
    this.questionText = questionText;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.askQuestion = function() {
    console.log( this.questionText );
    for( var i = 0; i < this.possibleAnswers.length; i++ ) {
        console.log( i + '. ' + this.possibleAnswers[i] );        
    }
}

Question.prototype.checkIfCorrect = function( userAnswer ) {
    if( userAnswer === this.correctAnswer ) {
        console.log( 'Correct!!' );
        return true;
    } else {
        console.log( 'Wrong... the answer was ' + this.correctAnswer );
        return false;
    }
}

var q1 = new Question( 'Who is the greatest hockey player?', ['Gretzky','Yzerman','Lemieux'], 1);
var q2 = new Question( 'Who is not one of Conan\'s great loves?', ['Sonja','Belit','Yvette'], 2);
var q3 = new Question( 'What kind of bear is best?', ['Brown','Arctic','Berenstain'], 0);
var q4 = new Question( 'Who is the best dog?', ['Simon','Ribsy','Wilson'], 0 );
var q5 = new Question( 'Bats are blind, true or false?', ['True', 'False'], 1 );
var q6 = new Question( 'Which one is not that good?', ['The Sopranos','The Wire','Breaking Bad'], 2);

var questions = [q1,q2,q3,q4,q5,q6];
var userAnswer = '';
var score = 0;

function roll() {
    return Math.floor(Math.random() * questions.length);
}

function displayScore() {
    console.log( 'Your score is ' + score );
}

function getUserAnswer() {
    var answer = prompt( 'type ur answer' );
    if( answer === 'exit' ) {
        return answer;
    } else {
        return parseInt( answer );
    }
}

while( userAnswer !== 'exit' ) {
    var diceRoll = roll();
    questions[diceRoll].askQuestion();
    userAnswer = getUserAnswer();
    if( questions[diceRoll].checkIfCorrect( userAnswer ) ) {
        score ++;
    }
    displayScore();
}




