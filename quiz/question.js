// JavaScript Document
function Question(text,choices,answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}//nhập câu hỏi
Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}//lấy đáp án