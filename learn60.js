var user = []
var number = +prompt("chand nafar bashan? ", 3)
var i=1;
do{
    var username= prompt("Enter your name if you want to register:")
    var userfamily= prompt("Enter your family if you want to register:")
    var userage= +prompt("Enter your age if you want to register:")
    var userEmail= prompt("Enter your email if you want to register:")
    
        if (username.length < 3 || username.length > 10) {
            alert("khata")
            
            username = prompt("try Enter your name if you want to register:")
        } else if (userfamily.length < 3 || userfamily.length > 15) {
            alert("khata")
            userfamily = prompt("try Enter your family if you want to register:")
        }else if(isNaN(userage)||userage.length>3){
            alert("khata")
            userage = prompt("try Enter your age if you want to register:")
        }
        else{
           var newuser={
                    id: i,
                    name:username,
                    family:userfamily,
                    age:userage,
                    email:userEmail
                }
            
            user.push(newuser)
        }
        i++;
}while(i<=number)

console.log(user)


