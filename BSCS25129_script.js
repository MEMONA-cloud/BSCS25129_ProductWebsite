
window.onload = function welcome() 
{
  alert("Welcome to MONA BAKES!");
};

document.getElementById("year").innerHTML = new Date() .getFullYear (); 

function checkstock (id)
{
   if (id=='in stock')
{
    alert("Product is in stock");
}
else 
{
    alert("Product is not in stock");
}
}

function FORMFORVALIDATION()
{
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("message").value;
    if (name==""|| email==""||message=="") {
        alert("KINDLY FILL THE FORM");
        return false;
    }
    alert("Your form is submitted!")
    return true;
}



function sendmessage()
{

let input=document.getElementById("user-input").value.toLowerCase().trim();
let chatlog = document.getElementById("chat_log");
if(input == "") return ;

let  usermsg = document.createElement("p");
usermsg.textContent="You: "+input;
chatlog.appendChild(usermsg);

 let botreply = getBotResponse(input);
 let botmsg = document.createElement("p");


botmsg.textContent="BOT: "+botreply;
chatlog.appendChild(botmsg);
chatlog.scrollTop = chatlog.scrollHeight;


document.getElementById("user-input").value ="";
}


function getBotResponse(input)
{
    if (input.includes("hello")||input.includes("hi")) 
    {
        return "Hello! How are you and How can I help you?";
    }
    else if (input.includes("how are you")) 
    {
        return "I am fine, thank you.";
    }
     else if (input.includes("product")) 
    {
    return "You can check our product by clicking on the products page.";
    }
    else{
        return "Sorry, I don't understand?";
    }
}
