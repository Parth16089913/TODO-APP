let input = document.querySelector("input");
let addBtn = document.querySelector(".button-add");
let delBtn = document.querySelector(".button-delete-all");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
    const liNumber = document.querySelectorAll("ul div").length;

    if (liNumber < 10) {
        if (input.value.trim() === "") {
            console.log("nothing typed");
            input.value = "";
            return;
        } else {
            let chkDiv = document.createElement("div");
            chkDiv.className = "task-item";
            let chkInput = document.createElement("input");
            chkInput.type = "checkbox";
            chkInput.id = input.value;
            chkInput.classList.add("item-item");
            let chkLabel = document.createElement("label");
            chkLabel.htmlFor = input.value;
            chkLabel.innerText = input.value;
            chkLabel.classList.add("item-item");
            ul.appendChild(chkDiv);
            chkDiv.appendChild(chkInput);
            chkDiv.appendChild(chkLabel);
            input.value = "";
        }
    } else {
        alert("Maximum Items Limit reached");
        input.value = "";
    }
});
delBtn.addEventListener("click", () => {
    const liNumber = document.querySelectorAll("ul div").length;
    if (liNumber === 0) {
        // Do nothing if there are no items
    } else {
        if (confirm(`Are You Sure You Want To Delete ${liNumber} items`)) {
            document.querySelectorAll(".task-item").forEach(item => {
                item.remove(); 
            })
            }
            }
            })

ul.addEventListener('change', function(event) {
    if(event.target.matches('.item-item')) {
        if(event.target.checked) {
            let label = event.target.parentElement.querySelector('label');
            label.style.textDecoration = "line-through";
            setTimeout(() => {
                event.target.parentElement.remove();
            }, 500);
        }
    }
});
