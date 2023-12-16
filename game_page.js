player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player_q").innerHTML="Question Turn:  "+player1_name;
document.getElementById("player_a").innerHTML="Answer Turn:  "+player2_name;
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+"  :  ";
document.getElementById("player2_name").innerHTML=player2_name+"  :  ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
function Send() {
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log(word);
chr1=word.charAt(1);
console.log(chr1);
length2=Math.floor(word.length/2);
chr2=word.charAt(length2);
console.log(chr2);
length_1=word.length-1;
chr3=word.charAt(length_1);
console.log(chr3);
removechr1=word.replace(chr1,"_");
removechr2=removechr1.replace(chr2,"_");
removechr3=removechr2.replace(chr3,"_");
console.log(removechr3);
q1="<h4 id='word_display'>Q. "+removechr3+"</h4>";
inputBox="<br>Answer: <input type='text' id='checkBox'>";
checkButton="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=q1+inputBox+checkButton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}