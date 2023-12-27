var datas=[
    {id:1,username:"alirabiee1397",password:"asp.netcore1402"},
    {id:2,username:"alirabieey1400",password:"alirab6245"},
    {id:3,username:"alidevops1504",password:"ashkanjavid3254"}
]
alert("if forget password :")
var user=prompt("please enter username :")
var isinuser=datas.some(function(data){
    return data.username==user
})
if(isinuser){
    var showpass=datas.find(function(pass){
           return user==pass.username
    })
    console.log('is in your password :',showpass.password);

}else{
    console.log("The username or password is incorrect");
}