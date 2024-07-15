let toDoAdd = document.querySelector("#toDoAdd")
let toDoClear = document.querySelector("#toDoClear")
let todo = document.querySelector("#todo")
let todotext = document.querySelector("#todotext")
toDoAdd.addEventListener("click" , ()=>{
    let paraqraf = document.createElement("p")
    paraqraf.classList.add('paragraf')
    paraqraf.innerHTML=(todo.value)
    todotext.appendChild(paraqraf)
    todo.value = ""
    paraqraf.addEventListener("dblclick", () =>{
        
        todotext.removeChild(paraqraf)
    })
    paraqraf.addEventListener("click",()=>{
      paraqraf.style.textDecoration = "line-through"
    })
    toDoClear.addEventListener("click", ()=>{
        todotext.remove() 
    })
})