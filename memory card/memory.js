// JavaScript Document
var cards = ['anh1','anh2','anh3','anh4','anh5','anh6']; 
var current = null;//lưu quân bài người dùng lật lên
//hàm đảo vị trí
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);//math.room có giá trị chạy từ 0 đến 1
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}
function flip(card){
	$(card).css('pointer-events', 'none');
    $(card).toggleClass('flipped');
	
    if (!current) {
        current = $(card);    
    } else {
        $('.card').css('pointer-events', 'none');
		//kiểm tra lá bài lật đúng hay sai
        if (current.attr('data-name') != $(card).attr('data-name')) {//sai
            setTimeout(function(){
				document.getElementById('sai').play();
              	 current.toggleClass('flipped');
                $(card).toggleClass('flipped');
                current = null;//gán về null để chọn tiếp lá tiếp theo
                $('.card').css('pointer-events', 'auto');
            },700);
        } else {//đúng
            setTimeout(function(){   
				document.getElementById('dung').play();         
                current.css('opacity','0');
                $(card).css('opacity','0');
                current = null;
                $('.card').css('pointer-events', 'auto');
            },700);
		}
	}
		}
		
//hiện lá bài ra trình duyệt		
$(function() {
	cards = cards.concat(cards);//nhân đôi lá bài
	 cards = shuffle(cards);//đảo vị trí
var html='';
for(var i = 0 ; i<cards.length;i++){
	html +='<div class="card" data-name=" ' + cards[i]+ ' " onclick="flip(this)">'+ 
	'<img class="back" src="img/back.jpg">'+'<img class="front" src="img/'+ cards[i] +'.jpg"></div>'  ;
}
$('.wrap').html(html);
});
