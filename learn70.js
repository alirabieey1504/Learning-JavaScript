var scores=[20,1,16,18,3,15,2,5,19]
   var filterscore= scores.filter(function(score){
        return score>18
    })
    console.log(filterscore);


    var usernames=["ali","amir","aragh","aft"]
    var filteruser=usernames.filter(function(username){        
         return username.length>3 
    
    })

    console.log(filteruser)