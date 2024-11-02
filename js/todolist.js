// ========================== DOMs
// === list adding dom
let events         = document.querySelector(".event")
let listAddInput   = document.querySelector(".listAddInput")
// === list dom
let todoList       = document.querySelector(".todo_list")
// === counter dom
let done = document.querySelector(".done")
let all  = document.querySelector(".all") 

// =============== list adding function
let Add = ()=>{
    if(listAddInput.value == ''){
        events.style = "border: 1px solid red;"
    }else{
        events.style = "border: none;"
        // ======= making HTML Elements
        let singleToDoList = document.createElement("div")
        let circle         = document.createElement("div")
        let listInput      = document.createElement("input")
        let editButton      = document.createElement("button")
        let deleteButton      = document.createElement("button")

        // ======= making childs
        todoList.appendChild(singleToDoList)
        singleToDoList.appendChild(circle)
        singleToDoList.appendChild(listInput)
        singleToDoList.appendChild(editButton)
        singleToDoList.appendChild(deleteButton)

        // ======= giving class name
        singleToDoList.classList.add("singleToDoList")
        circle.classList.add("circle")
        editButton.classList.add("editButton")
        // ======= giving elements content
        editButton.innerHTML   = "Edit" + '<i class="fa-solid fa-pen-to-square"></i>'
        deleteButton.innerHTML = "Delete" + '<i class="fa-solid fa-delete-left"></i>'
        // ======= adding attrs
        listInput.setAttribute('readonly','readonly')
        // ======= maing the function
        listInput.value    = listAddInput.value
        listAddInput.value = ''
        all.innerHTML++

        // =========== edit function 
        editButton.addEventListener('click' , ()=>{
            if(editButton.innerHTML == "Edit" + '<i class="fa-solid fa-pen-to-square"></i>'){
                editButton.innerHTML = "save" + '<i class="fa-regular fa-floppy-disk"></i>'
                editButton.style     = 'background-color: lime; color: white;'
                listInput.removeAttribute('readonly','readonly')
            }else{
                if(listInput.value == ""){
                    listInput.removeAttribute('readonly','readonly')
                }else{
                    editButton.innerHTML = "Edit" + '<i class="fa-solid fa-pen-to-square"></i>'
                    editButton.style     = 'background-color: yellow; color: #000;'
                    listInput.setAttribute('readonly','readonly')
                }
            }
            
        })
        // =========== done function 
        circle.addEventListener('click' , ()=>{
            if(circle.innerHTML == ''){
                circle.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
                listInput.style  = 'text-decoration: line-through; color:gray;'
                done.innerHTML++
            }else{
                circle.innerHTML = ''
                listInput.style  = 'text-decoration: none; color:#000;'
                done.innerHTML--
            }
        })
        // ========== delete function 
        deleteButton.addEventListener('click' , ()=>{
            singleToDoList.remove()
            all.innerHTML--
            if(circle.innerHTML == '<i class="fa-solid fa-circle-check"></i>'){
                done.innerHTML--
            }
        })
    }
}
// ====== adding Enter Key 
let enterKey = (item)=>{
    if(item.key == "Enter"){
        Add()
    }
}



