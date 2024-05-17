let btns = document.getElementsByClassName("clicked");
console.log(btns);
for(let i=0;i<btns.length;i++)
    {
        btns[i].addEventListener("click",()=>{
            btns[i].innerText="followed";   
        });
        btns[i].addEventListener('dblclick',()=>{
            btns[i].innerText="follow";
        });
    }