// select of Menu icon
let menuIcon=document.querySelector('#menuIcon');
// select of mainlist
let mainlist=document.querySelector('#mainlist');
menuIcon.addEventListener('click',()=>{
        mainlist.style.position='fixed';
        mainlist.style.right='0px';
        mainlist.style.transition='1s';
});


// menucut select

let menuCut=document.querySelector('#menuCut');
menuCut.addEventListener('click',()=> {
        mainlist.style.right='-50vw';
})





