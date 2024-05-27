let btns = document.getElementsByClassName('helper');
for(let index=0;index<btns.length;index++)
    {
        btns[index].addEventListener('click',()=>{
            let rote = btns[index].children[0].children[0];
            console.log(btns);
            rote.classList.add('rotate')
            setTimeout(()=>{
                rote.classList.remove("rotate");
                rote.classList.add('rm');
            },2500);
        });
    }