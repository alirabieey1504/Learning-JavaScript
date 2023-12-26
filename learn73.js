//todolist
var todo = [
    { id: 1, name: "Task1", condition: true },
    { id: 2, name: "Task2", condition: false },
    { id: 3, name: "Task3", condition: false }

]
var exobject;
var condi;
var menunumber = +prompt("pleas enter number\n1.add todo :\n2.remove todo :\n3.change condition todo :")
if (menunumber === 1) {
    var receive = prompt("please enter name todo :")
    var isinrecive = todo.some(function (list) {
        if (list.name === receive) {
            console.log("in name ghablan estefade shode!")
            return true
        }

    })
    if (!isinrecive) {
        var cosn = prompt("true / false")
        if (cosn) { } else if (!cosn) { }
        else {
            console.log("yaft nashod")
            cons = false
        }
        var object = {
            id: 4,
            name: receive,
            condition: cosn
        }
        todo.push(object)
    }
    console.log(todo);
    console.log("success")

} else if (menunumber === 2) {
    var receive = prompt("please enter name todo :")
    var isinrecive = todo.some(function (list) {
        if (list.name === receive) {
            exobject = list
            return true
        }

    })
    if (isinrecive) {
     
        var object=todo.indexOf(exobject)
        todo.splice(object, 1)
        console.log(todo);
        
    }else{
        console.log("yaft nashode!");
        console.log(todo);
        
    }


} else if (menunumber === 3) {
        var receive = prompt("please enter name todo :")
        var isinrecive = todo.some(function (list) {
            if (list.name === receive) {
                exobject = list
                return true
            }
        })
        if (isinrecive) {
            var oof=todo.indexOf(exobject)
            todo[oof].condition = true
        

        } else {
            console.log("in object yaft nashod !");
        }
        console.log(todo);
    
} else {
    console.log("khata yaft nashod");
}