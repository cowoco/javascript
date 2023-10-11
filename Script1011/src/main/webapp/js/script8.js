/**
 * 
 */
var input=Number(prompt(" 신장을 입력 해주세요"));
var weight =Number(prompt(" 몸무게를 입력 해주세요"));


var height = input/100;
var result= weight / (height*height)

//result출력


//if비교 if ,else if ,else if ,else

if(result>=25){
	document.write("<h1>결과 : ",result,"비만입니다.<br></h1>")
}else if(result>=23.0){
	document.write("<h1>과체중","<br></h1>")
}else if(result>=18.4){
	document.write("<h1>정상","<br></h1>")
}else{
	document.write("저체중","<br>")
}
document.write(result)


