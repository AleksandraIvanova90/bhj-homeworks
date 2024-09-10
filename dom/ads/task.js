const rotators = Array.from(document.querySelectorAll('.rotator'))
console.log(rotators)
rotators.forEach ((rotator) => {
    const rotatorCaseArr = Array.from(rotator.children)
    console.log(rotatorCaseArr)
    let index = 0  
    let indexPrevious = 0
    let interval = setInterval(() => {
            rotatorCaseArr[indexPrevious].classList.remove('rotator__case_active')
            rotatorCaseArr[index].classList.toggle('rotator__case_active')
            indexPrevious = index
            index = Math.floor(Math.random() * rotatorCaseArr.length)
        }, 1000)
})

