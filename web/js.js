//COUNTDOWN, bude se opakovat kazdou sekundu
let countdown = setInterval(function() {

    //do kdy to je
    let deadline = new Date();
    deadline.setHours(24);
    deadline.setMinutes(0);
    deadline.setSeconds(0);
    deadline.setDate(5);
    deadline.setMonth(5);
    
    //dnesni den
    let today = new Date();

    //vypocitani kolik dni/hodin atd zbyva
    let diff = deadline - today;
    let h = Math.floor( (diff/(1000*60*60)) % 24 );
    let m = Math.floor( (diff/1000/60) % 60 );
    let s = Math.floor( (diff/1000) % 60 );
    let d = Math.floor(diff / (1000 * 3600 * 24));

    //vypise se to do html
    let string = d + " dní " + h + " hodin " + m + " minut " + s + " sekund ";
    document.getElementById("Countdown").innerHTML = string;
}, 1000);




//pri nacteni stranky se zapne funkce
document.addEventListener("DOMContentLoaded", function(event) {
    currentDay();
});

//vypsani dnesniho dne
function currentDay(){
    let today = new Date(); //ziskani dnesniho data
    let days = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]; //seznam dnu v tydnu
    let months = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpena", "září", "října", "listopadu", "prosinece"];


    let string = "Je " + days[today.getDay()] + " " + today.getDate() + ". " + months[today.getMonth()] + " " + today.getFullYear() + ".";
    document.getElementById("Today").innerHTML = string;
}




//REVEAL ANIMACE SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('actives');
        }
        else{
            reveals[i].classList.remove('actives');
        }
    }
}


//LOGIN BETA TESTU
function login(){
    let username = document.getElementById("lUser").value;
    let password = document.getElementById("lPass").value;


    //nejdrive se zkontroluje jestli je vubec neco zadane
    if(username != "" && password != ""){
        //kontrola shody hodnot v textBoxech
        if(username == "betatester" && password == "ČáryFuk2024"){
            document.getElementById("content-show").style.display = "block";
            document.getElementById("content-hide").style.display = "none";
        }
        //pokud se neshoduji tak to upozorni a presmeruje na error
        else{
            alert("Zadané hodnoty se neshodují s přístupovými údaji!");
            window.location.href = "error.html";
        }
    }
}