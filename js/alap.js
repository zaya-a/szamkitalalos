window.addEventListener("load",myInit,false);

function $ (id){
    return document.getElementById(id);
}

function myInit (){
    let ellenorzo = $("tippbtn");
    ellenorzo.addEventListener("click", ellenorzes, false);
    let ujjatek = $("ujjatek");
    ujjatek.addEventListener("click", reload, false);
}

let probaDb=0;
let random = Math.floor((Math.random()*1024)+1);
console.log(random);

function ellenorzes(){
    probaDb++;
    if($("tipp").value == random){
        $("eredmeny").innerHTML='<img src="Images/egyenlo.png" id="kepEgyenlo" alt="Egyenlő">';
        $("stat").innerText="Próbálkozásaid száma: "+probaDb;
        $("ujjatek").style.visibility="visible";
    }
    if($("tipp").value > random){
        $("eredmeny").innerHTML='<img src="Images/le.png" id="kep" alt="Kisebb">';
    }
    if($("tipp").value < random){
        $("eredmeny").innerHTML='<img src="Images/fel.png" id="kep" alt="Nagyobb">';
    }
}

function reload(){
    window.location.reload();
}