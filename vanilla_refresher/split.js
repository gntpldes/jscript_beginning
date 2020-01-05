let message = "I love javascript"; 

let a = function(){ return message;} 

console.log(`The message is ${message} `); 

let love = "love"; 

if(message.indexOf(love) > -1){
  let newMessage = message.split(love); 
  console.log(newMessage); 
}

