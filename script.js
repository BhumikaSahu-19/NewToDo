let input = document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector("#list")


let AddTask=()=>{
    if(input.value === '')
    {
        alert("You have to write Something")
    }
    else
    {
        let li = document.createElement("li")
        li.innerText = input.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input.value=""
}


list.addEventListener("click" , function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove()
    }
} , false);