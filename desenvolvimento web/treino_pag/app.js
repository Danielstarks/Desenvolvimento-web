const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) =>{
    cursor.style.let = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    console.setAttribute('data-fronTop', (cursor.offsetTop - scrollY))

});

window.addEventListener('scroll', () => {
    const fronTop= parseInt(cursor.getAttribute('data-fronTop'));
    cursor.style.top = scrollY + 'px';
    console.log(scrolly) 
});

window.addEventListener('click', ()=>{
cursor.classList.add('click')
});
