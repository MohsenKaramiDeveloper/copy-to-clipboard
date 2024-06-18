const copybtn = document.querySelector('button')
const textarea = document.querySelector('textarea')

copybtn.addEventListener('click', () =>{
    textarea.select()
    let textvalue = textarea.value

    navigator.clipboard.writeText(textvalue)
    copybtn.innerText = 'copied !'
    copybtn.style.backgroundColor = '#011140'

    setTimeout(() =>{
        copybtn.innerText = 'Copy'
        copybtn.style.backgroundColor = '#AB71AB'
        
    }, 2000)



    
})



