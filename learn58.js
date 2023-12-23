
var arr=[];
var sum=0;
for(var i=0;number!=-1;i++){
    var number=+prompt(`enter number ${i} :`)
    if(number===-1){
        arr.shift(-1)
    }else if(number<0){
        alert('khata meghdar mojaz nist')
        break
    }else{
        arr.push(number)
        sum+=arr[i]
        var avrage=sum/arr.length;
        console.log(avrage)
        
    }
 
}

