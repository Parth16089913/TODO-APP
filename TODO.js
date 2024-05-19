let input = document.querySelector("input")
let addBtn = document.querySelector(".button-add")
let delBtn = document.querySelector(".button-delete-all")
let ul = document.querySelector("ul")
addBtn.addEventListener("click",function (){
    const liNumber = document.querySelectorAll("ul div").length;

    if (liNumber < 10) {
        if (input.value === "") {
            console.log("nothing typed")
            return
        }if (input.value === " "){
            console.log("space typed")
            return
        }
        else {
        
        let chkDiv = document.createElement("div")
        chkDiv.className = "task-item"
        let chkInput = document.createElement("input")
        chkInput.type = "checkbox"
        chkInput.id = input.value
        let chkLabel = document.createElement("label")
        chkLabel.htmlFor = input.value;
        chkLabel.innerText = input.value
        ul.appendChild(chkDiv)
        chkDiv.appendChild(chkInput)
        chkDiv.appendChild(chkLabel)
        input.value = ""
    }
    } else {
        alert("Maximum Items Limit reached")
        input.value= ""
    }
    
 
})
 