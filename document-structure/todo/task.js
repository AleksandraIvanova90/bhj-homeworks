const button= document.querySelector('form')
const  tasksList = document.querySelector('.tasks__list')
let text = document.getElementById('task__input')
   

button.addEventListener('submit', function addTask(event){
    event.preventDefault()
    if (text.value !=="") {
        let divTask = document.createElement('div')
        divTask.className = 'task'
        let divTaskTitle = document.createElement('div')
        divTaskTitle.className = 'task__title'
        divTaskTitle.textContent = text.value
        let href = document.createElement('a')
        href.href = "#"
        href.textContent = 'x'
        href.className = "task__remove"
        divTask.appendChild(divTaskTitle)
        divTask.appendChild(href)
        tasksList.appendChild(divTask)
        text.value = ""
        const tasksRemove = Array.from(document.getElementsByClassName('task__remove'))
        tasksRemove.forEach((tR) =>{
            tR.addEventListener('click', (ev) => {
                ev.target.parentElement.remove()
            })
        })
    }
})
button.addEventListener('reset', (ev) =>{
ev.preventDefault()
})

