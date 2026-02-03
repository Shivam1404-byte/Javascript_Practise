foo()

function foo(){
    console.log("Nope")
}

func()  // this will show a Reference Error

const func = function (){
    console.log("OK")
}

/**
 * Function scope is declared at the top by the javascript interpreter
 * if we declare the fucntion with the const and let it will become there temporal zone which will show a referenceError 
 */