var com = Math.floor(Math.random() * 3)+1;
console.log(com);

var btn = document.getElementsByClassName("btn");
var ans = document.getElementById("score");
var winn = document.getElementById("win");
var body = document.body;


var user = 0;
btn[0].addEventListener("click",
    function(){
        var res = check(1);
        if(res == 0){
            winn.innerHTML = "TIE 🤝";
            body.style.color = "blue";
        }
        if(res == 1){
            winn.innerHTML = "YOU WIN THE MATCH 🎉";
            body.style.color = "Green";
        }
        if(res == -1){
            winn.innerHTML = "YOU LOSE THE MATCH 😞";
            body.style.color = "red";
        }

       
    }
);

btn[1].addEventListener("click",
    function(){
        var res = check(2);
        if(res == 0){
            winn.innerHTML = "TIE 🤝";
            ans.style.color = "blue";
        }
        if(res == 1){
            winn.innerHTML = "YOU WIN THE MATCH 🎉";
            ans.style.color = "Green";
        }
        if(res == -1){
            winn.innerHTML = "YOU LOSE THE MATCH 😞";
            ans.style.color = "red";
        }
    }
);

btn[2].addEventListener("click",
    function(){
        var res = check(3);
        if(res == 0){
            winn.innerHTML = "TIE 🤝";
            ans.style.color = "Blue";
        }
        if(res == 1){
            winn.innerHTML = "YOU WIN THE MATCH 🎉";
            ans.style.color = "Green";
        }
        if(res == -1){
            winn.innerHTML = "YOU LOSE THE MATCH 😞";
            ans.style.color = "red";
        }
    }
);


function check(user){

    for(var i=0; i<3; i++){
        btn[i].disabled = true;
    }

    if(com==user ){
        return 0;
    }

    if((user==1)&&(com==3) ||(user==2)&&(com==1) || (user==3)&&(com==2) ){
        return 1;
    }

    return -1;

} 
