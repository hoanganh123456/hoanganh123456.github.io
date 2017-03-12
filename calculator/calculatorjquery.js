// JavaScript Document
function addtoscreen(x){
	var  y = $('#display').val();
	$('#display').val(y+x)//hiện thị giá trị cần nhập
	if(x=='c'){
		$('#display').val("");
	}	
}

function answer(x){
	var x = $('#display').val();
	x = x.replace(/x/g, '*').replace(/÷/g, '/');
	x = eval(x);//thực hiện phép tính
	$('#display').val(x);
}
function backspace(){
	var number = $('#display').val();
	var len = number.length-1;
	var newNumber = number.substring(0,len);
	$('#display').val(newNumber);
}
function math_sqrt(){
	x = $('#display').val();
	x = Math.sqrt(x);
	$('#display').val(x);
}

function giaithua(){
	var x = $('#display').val();
	function gt(x){
	var kq = 1;
		for(var i=1;i<=x;i++){
			kq = kq*i;
		}
		return kq;
		}
	
	x = gt(x);
	$('#display').val(x);
}
var theme = 1;
function change(){
	switch (theme){
		case 1 :
		$('#calculator').css('background-color','#F99');
		theme++;
		break;
		case 2 :
		$('#calculator').css('background-color','#C6C');
		theme++;
		break;
		case 3 :
		$('#calculator').css('background-color','#63F');
		theme=1;
		break;
	}
}
