var line = document.querySelector("#line");
var lineClose = document.querySelector("#line-close");
var bar = document.querySelector(".side");
var flag = 0;

[line,lineClose].forEach(function(element){
    element.addEventListener("click", function(){
        if(flag==0){
            bar.style.display = "flex";
            line.style.display = "none";
            lineClose.style.display = "block";
            flag = 1;
        }else{
            bar.style.display = "none";
            lineClose.style.display = "none";
            line.style.display = "block";
            flag = 0;
        }
    });
});

// vanillaTilt.init(document.querySelectorAll(".card"),{
//     max: 25,
//     speed: 400,
//     glare: true,
//     "max-glare": 1,
// });