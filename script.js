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



const copybtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

copybtn.addEventListener('click', () => {
    textarea.select();
    let textvalue = textarea.value;

    navigator.clipboard.writeText(textvalue)
        .then(() => {
            copybtn.innerText = 'copied !';
            copybtn.classList.add('button-animation'); // Add animation class
            copybtn.style.backgroundColor = '#011140';
            copybtn.style.color = '#434B58';

            setTimeout(() => {
                copybtn.innerText = 'Copy';
                copybtn.style.backgroundColor = '#1E0BDB';
                copybtn.style.color = '#AB71AB';
                copybtn.classList.remove('button-animation'); // Remove animation class
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});




