

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

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if(scrollPosition >= 40){
        header.classList.remove('after:opacity-0');
    }else{
        header.classList.add('after:opacity-0');
    }

})

