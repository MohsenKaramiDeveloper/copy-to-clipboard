// const copybtn = document.querySelector('button')
// const textarea = document.querySelector('textarea')

// copybtn.addEventListener('click', () =>{
//     textarea.select()
//     let textvalue = textarea.value

//     navigator.clipboard.writeText(textvalue)
//     copybtn.innerText = 'copied !'
//     copybtn.style.backgroundColor = '#011140'

//     copybtn.style.color = '#434B58'
    

//     setTimeout(() =>{
//         copybtn.innerText = 'Copy'
//         copybtn.style.backgroundColor = '#1E0BDB'
//         copybtn.style.color = '#AB71AB'
        
//     }, 2000)



    
// })




const copyBtn = document.querySelector('.copy-btn');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () => {
    textarea.select();
    document.execCommand('copy'); // Copy text to clipboard

    // Change button text and style
    copyBtn.innerText = 'Copied!';
    copyBtn.classList.add('clicked');

    // Reset button text and style after 2 seconds
    setTimeout(() => {
        copyBtn.innerText = 'Copy';
        copyBtn.classList.remove('clicked');
    }, 2000);
});




