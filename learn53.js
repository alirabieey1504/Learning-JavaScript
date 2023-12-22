var num1=+prompt("enter number 1 :")
var num2=+prompt("enter number 2 :")

if(num2<num1){
    alert('khata adad dovom bozorg tar az avar ast')
}
else{
    var i=num1
    while(i<=num2){
        if(i%2==0){
            alert(i)
            i+=2
        }
        else{
         i++;
        }
                                    
    }

}
