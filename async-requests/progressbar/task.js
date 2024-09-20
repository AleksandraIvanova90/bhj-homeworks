let formData = document.getElementById('form')
const prog = document.querySelector('progress')
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.upload.onprogress = function(event) {
        let progress = (event.loaded / event.total)
        prog.value = progress
    }
    
    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload')
    const form = new FormData(formData)
    xhr.send(form)
})
