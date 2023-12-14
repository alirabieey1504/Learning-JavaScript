var age = Number(prompt("please enter age :"))
var jens = Number(prompt("please enter jensiat mard 0 va zan 1"))
if(isNaN(age)||isNaN(jens))
{
    alert("meghdar vared shode motabar nist")
   
}
else{
    if(age<=18 ||jens===1){
        alert("khata")
    }
    else{
        alert("vorod be panel")
    }
}



