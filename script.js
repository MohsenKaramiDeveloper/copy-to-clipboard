// start script


const copybtn = document.querySelector('button')
const textarea = document.querySelector('textarea')

copybtn.addEventListener('click', () =>{
    textarea.select()
    let textvalue = textarea.value

    navigator.clipboard.writeText(textvalue)
    copybtn.innerText = 'copied !'
    copybtn.style.backgroundColor = '#011140'


    // added by mohsen

    copybtn.style.color = '#434B58'
    
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    document.getElementById("demo").innerHTML = size;

    const d = new Date("2015-03-25");
    document.getElementById("demo").innerHTML = d;

    // end added mohsen
    

    setTimeout(() =>{
        copybtn.innerText = 'Copy'
        copybtn.style.backgroundColor = '#1E0BDB'
        copybtn.style.color = '#AB71AB'
        
    }, 2000)



    
})


// script done









