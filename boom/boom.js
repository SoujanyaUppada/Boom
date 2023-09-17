let timerE1=document.getElementById("timer");
let difuseE1=document.getElementById("difuse");
let rand=document.getElementById("diffuse-id");
rand.textContent=Math.random().toString(16).substr(2, 8);
let booming=document.getElementById("bombimg");

let countdown=10
let intervalID=setInterval(function(){
    countdown = countdown - 1
    timerE1.textContent=countdown;
    if (countdown===0){
        timerE1.textContent="BOOM";
        document.getElementById("bombimg").src="https://cdn4.vectorstock.com/i/1000x1000/50/98/in-the-style-of-a-comic-explosion-the-atomic-bomb-vector-13335098.jpg";
        clearInterval(intervalID);
    
    }
    

},1000);

difuseE1.addEventListener("keydown", function(event) {
    let bombDiffuserText = difuseE1.value;
    if ( bombDiffuserText === rand.textContent && event.key === "Enter" && countdown !== 0) {
      document.getElementById("bombimg").src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2841465/910/607/m1/fpnw/wm1/10795-royalty-free-rf-clipart-illustration-happy-bomb-cartoon-mascot-character-jumping-with-open-arms-vector-illustration-isolated-on-white-background-.jpg?1497377845&s=652d9e4b851ef8cdb485041696f88358";
      timerE1.textContent = "You did it! Now you are Safe...";
      clearInterval(intervalID );
    }
  });

