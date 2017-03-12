// JavaScript Document
function populate(){
	if(quiz.isEnded()){
			showScores();//kết thúc các câu hỏi hiện điểm
		}
	else{
		//hiển thị câu hỏi
		var element = document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;
		
		//hiển thị lựa chọn
		var choices =quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		 showProgress();
	}
}
function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){//hiển thị số câu hỏi Question x of y
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element=document.getElementById("progress");
	element.innerHTML = " Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
function showScores(){
	
	var element = document.getElementById("quiz");
	if(quiz.score>=5){
		window.location.href="congratulation.html";
	}
	else{
		var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml +="<h2 id='score'> Your scores: "  + quiz.score + "</h2>"+"<a id='button' href='index.html'> Trở về " + "</a>";
		element.innerHTML = gameOverHtml;
		
		
	}
	
		
}
var questions = [
	new  Question("Ca sĩ nào hát bài Nơi này có anh ?",["Trung Quân Ido","HKT","Sơn tùng MTP","Phan Đình Tùng"],"Sơn tùng MTP"), 
	new  Question("Sơn Tùng MTP sinh năm bao nhiêu ?",["1992","1994","1996","2001"],"1994"),
	new  Question("Sơn Tùng MTP quê ở đâu ?",["Hà Nội","Thái Bình","Hà Tình","Hồ Chí Minh"],"Thái Bình"),
	new  Question("Sơn Tùng MTP cao bao nhiêu ?",["1m80","1m52","1m60","1m70"],"1m70"),
	new  Question("Sơn Tùng MTP tên thật là gì ?",["Thịnh","Phúc","Tùng","Trang"],"Tùng")
];
var quiz = new Quiz(questions);
populate();
