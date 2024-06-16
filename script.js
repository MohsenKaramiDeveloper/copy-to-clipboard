const copybtn = document.querySelector('button')
const textarea = document.querySelector('textarea')

copybtn.addEventListener('click', () =>{
    textarea.select()
    let textvalue = textarea.value

    navigator.clipboard.writeText(textvalue)
    copybtn.innerText = 'copied !'
    copybtn.style.backgroundColor = '#0c9cb0'

    setTimeout(() =>{
        copybtn.innerText = 'Copy'
        
    }, 2000)



    
})
