const copybtn = document.querySelector('button')
const textarea = document.querySelector('textarea')

copybtn.addEventListener('click', () =>{
    textarea.select()
    let textvalue = textarea.value

    navigator.clipboard.writeText(textvalue)
    copybtn.innerText = 'copied !'

    // line 11
    // line12
    // line 13
    // line 14
    line 15

    
})
