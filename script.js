//Selecting the input box through ID


const input_box= document.getElementById('input-btn');
const list_containar=document.getElementById('list-containar');

//Adding click Listner to Button


//Appending List item Through Add Button using if else 
function addTask(){
    if(input_box.value === ''){
        alert("Write Something")
    }
else {
let li=document.createElement("li");
li.innerHTML=input_box.value;
list_containar.appendChild(li);

let Button=document.createElement("Button");
Button.innerHTML="Delete";
li.appendChild(Button);

}

input_box.value='';
savedata();

}

list_containar.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem('data', list_containar.innerHTML);

}

function showTask(){
    list_containar.innerHTML= localStorage.getItem("data");
}


showTask();
