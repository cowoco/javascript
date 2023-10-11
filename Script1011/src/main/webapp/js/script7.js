/**
 * 
 */
var a = 10;
var b = 20;
var c = 10;
var d = "20";
var result;

result = (a==c);
document.write("a==c결과 : ",a==c,"<br>")//true
document.write("a==b결과 : ",a==b,"<br>")//flase
document.write("b==d결과 : ",b==d,"<br>")//true
document.write("b===d결과 : ",b===d,"<br>")//타입까지도 같은지 비교방법 == flase
