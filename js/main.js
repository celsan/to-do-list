const myNodeList = document.getElementsByTagName("li") // [li, li, li, li, li ...].length === 5

function createClose(element){
    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    element.appendChild(span);
}

for (let i=0; i < myNodeList.length; i++) {
    createClose(myNodeList[i])
}

const close = document.getElementsByClassName("close");
for (let i=0; i <close.length; i++) {
    close[i].onclick = function (){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector("ul");
list.addEventListener("click" , function (ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
},false);

function newElement() {
    const li = document.createElement("li")
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    createClose(li)
    if (inputValue === "") {
        alert("Поле ввода не должно быть пустым...")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
}
