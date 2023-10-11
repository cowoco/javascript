/**
 * 
 */
//2개의 숫자를 입력받아 두수를 사직연산 값을 출력하시오
var num1 =Number(prompt("1번째 숫자 입력","0"));
var num2 =Number(prompt("2번째 숫자 입력","0"));
document.write("<h1>두 숫자의 합은"+(num1+num2)+"<br></h1>");
document.write("두 숫자의 차는"+(num1-num2)+"<br>");
document.write("두 숫자의 곱은"+num1*num2+"<br>");
document.write(num1/num2+"<br>");


var sum= 0;
for(var i = 1; i<10; i++){
	 sum= sum+i;
}
document.write("1부터 10까지의 합"+sum+"<br>")