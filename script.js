const copybtn = document.querySelector('button')
const textarea = document.querySelector('textarea')

copybtn.addEventListener('click', () =>{
    textarea.select()
    let textvalue = textarea.value

    navigator.clipboard.writeText(textvalue)
    copybtn.innerText = 'copied !'

    setTimeout(() =>{
        copybtn.innerText = 'Copy'
        copybtn.style.backgroundColor = 'red'
    }, 2000)



    
})
