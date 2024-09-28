

document.querySelectorAll('.box').forEach(box=>{

    const button=box.querySelector('.button');
    
    button.addEventListener('mousedown',()=>{
        button.classList.add('active');
    })

    button.addEventListener('mouseup',()=>{
        button.classList.remove('active');
        box.classList.toggle('xl:top-0');
    })

});


const copy = () =>{
    const copyAlert=document.querySelector('.copyAlert');
    navigator.clipboard.writeText('francunhaduarte@gmail.com');
    console.log('asd');
    copyAlert.classList.remove('hidden');
    setTimeout(() => {
        copyAlert.classList.add('hidden');
    }, 3000);
    
}