const greeting = function(name) {
return "Hi, ${name}"
}

// Arrow function  - explicit return

const newGreeting = function(name) =>  {
    return "Hi, ${name}"
    }
    
// Arrow function  - implicit return

const newGreetingImplicit= name=>  "Hi, ${name}"
const newGreetingImplicitWithTwo= (name, lastName) =>  "Hi, IM ${name}  $(LastName)"

//lexical binding

const fictionalCharacter = {
    name: "Uncle Ben",
    MessageWithTraditionalFunction: function (message) {
        console.log("${this.name} say: ${message}")
    },
    MessageWithArrowFunction: (message) ==> {
        console.log("${this.name} say: ${message}")
    },

}

fictionalCharacter.MessageWithTraditionalFunction("with re power comes great responsibility.")
fictionalCharacter.MessageWithArrowFunction("Beware of Doctor ")

