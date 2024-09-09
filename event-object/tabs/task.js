function onClick(e){
    let targetElem = e.target
    let indexTab = tabs.indexOf(targetElem)
    tabs.forEach((i) => {
        if (tabs.indexOf(i) !== indexTab) {
            i.classList.remove('tab_active')
            contents[tabs.indexOf(i)].classList.remove('tab__content_active')
        } else{
            targetElem.classList.add('tab_active')
            contents[indexTab].classList.add('tab__content_active')
        }
    })
}
   

  

const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = Array.from(document.querySelectorAll('.tab__content'))
tabs.forEach((tab) => { 
    tab.addEventListener('click', onClick)
})