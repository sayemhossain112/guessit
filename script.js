var randNum=0;

     randNum = Math.floor((Math.random() * 20) + 1);     console.log(randNum);
document.getElementById("guess-number").innerHTML = '?';

var res=0;
function checkguessing(){ 
     var input = document.getElementById("guessing-input").value;
 
    if(input == randNum)
    {
        document.getElementById("correct_number").innerHTML = "🏆 Correct Number ";
        res= res+ Number(input);
        var hi = document.getElementById("highest").innerHTML;
        // document.getElementById("guess-number").innerHTML = randNum;
        if(Number(hi)>res){
            document.getElementById("highest").innerHTML= hi;
        }
        else{
            document.getElementById("highest").innerHTML= res; 
            
        }
        randNum = Math.floor((Math.random() * 20) + 1);     console.log(randNum);
     }
    else{
        if(res>input){
            document.getElementById("correct_number").innerHTML = "😢 Too Low ";
        }
        else if(res<input){
            document.getElementById("correct_number").innerHTML = "😢 Too High ";
        }

        if(res-5<0)
        {
            res=0;
        }
        else{
            res= res- 5;
        }
     }
     document.getElementById("score").innerHTML = res;

}