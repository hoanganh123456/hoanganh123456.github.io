// JavaScript Document
function Quiz(questions){
	this.score = 1;
	this.questions = questions;
	this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function(){
	return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer){
	
	if(this.getQuestionIndex().correctAnswer(answer)) { // so sánh câu hỏi với đáp án sau đó tăng điểm lên
		this.score++;
	}
	this.questionIndex++;
	
}