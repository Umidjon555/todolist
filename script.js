const input=document.getElementById("input");
const button=document.getElementById("submit");
const ul=document.querySelector("ul");
const emoji = String.fromCodePoint(128204)

//Check for input  length
function isEmpty(){
    if(input.value.length > 0){
        return true;
    }
    return false;
}

//Separation of concern. And Dont Repeat your code.
//Function for adding text
function addText(){
    
        //ES6 use let
        let li=document.createElement("li");
        //Ver good code. 
        li.appendChild(document.createTextNode(`${emoji} ${input.value}`));
        ul.appendChild(li);
        input.value= "";
}

//function to add text when the button clicked
function add_After_Click(){
    if(isEmpty()){
        addText();
    }
}

//function to add text when enter clicked
function add_after_enter(event){
    if(isEmpty() && event.code === "Enter"){
        addText();
    }
}

//Adding after button clicked
button.addEventListener("click", add_After_Click);

//Adding after enter clicked
input.addEventListener("keypress", add_after_enter);
