const form = document.querySelector('form')
const  tasksList = document.querySelector('.tasks__list')
let text = document.getElementById('task__input')

form.addEventListener('submit', function addTask(event){
    event.preventDefault()
    if (text.value.trim().length == 0) {
        return false
    }
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${text.value}
          </div>
          <a href="#" class="task__remove">x</a>
        </div>
        `)
    text.value = ""
    tasksList.children[0].lastElementChild.addEventListener('click', (ev) => {
        ev.target.parentElement.remove()
        })
    })

form.addEventListener('reset', (ev) =>{
ev.preventDefault()
})

