let imgBox = document.querySelector('.imgBox')
let QrImage = document.querySelector('.Qr-image')
let QrText = document.querySelector('.qrText')
let form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    if (QrText.value.length > 0) {
        QrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrText.value}}`
        imgBox.classList.add('show-img')
    }
    if(QrText.value === ''){
        alert('enter text or URL')
    }
})
