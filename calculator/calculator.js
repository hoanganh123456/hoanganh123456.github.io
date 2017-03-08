// JavaScript Document
var box = document.getElementById("display");

function addtoscreen(x){
	box.value+=x;//hiện thị giá trị cần nhập
	if(x=='c'){
		box.value='';
	}
}
function answer(x){
	x = box.value;
	x = x.replace(/x/g, '*').replace(/÷/g, '/');
	x = eval(x);//thực hiện phép tính
	box.value = x;
	
}
function backspace(){
	var number=box.value;
	var len = number.length-1;
	var newNumber = number.substring(0,len);
	box.value=newNumber;
}
function math_sqrt(x){
	x = box.value;
	x = Math.sqrt(x);
	box.value = x;
}
function giaithua(){
	function gt(x){
	var kq = 1;
		for(var i=1;i<=x;i++){
			kq = kq*i;
		}
		return kq;
		}
	x = box.value ;
	x = gt(x)
	box.value=x;
}