const ul=document.getElementsByTagName("ul")[0];
const add=document.getElementById("add");
const tx=document.getElementById("tx");
const li=document.getElementsByTagName("li");
add.className="btn btn-success";



for(let i=0;i<li.length;i++){
    adaugaButoane(li[i]);
}
li[0].children[0].disabled=true;
li[li.length-1].children[1].disabled=true;

function adaugaButoane(p1){
    let up=document.createElement("button");
    up.className="up btn btn-primary";
    up.textContent="Up";
    p1.appendChild(up);

    let down=document.createElement("button");
    down.className="down btn btn-secondary";
    down.textContent="Down";
    p1.appendChild(down);

    let del=document.createElement("button");
    del.className="del btn btn-danger";
    del.textContent="Delete";
    p1.appendChild(del);
}
add.addEventListener("click",()=>{
    let nou=document.createElement("li");
    nou.textContent=tx.value;
    adaugaButoane(nou);
    ul.appendChild(nou);
    disabled();
});

ul.addEventListener("click",(event)=>{
    if(event.target.className==="up btn btn-primary"){
      let li=event.target.parentNode;
      let ul=li.parentNode;
      let prev=li.previousElementSibling;
      ul.insertBefore(li,prev);
    }else if(event.target.className==="down btn btn-secondary"){
        let li=event.target.parentNode;
      let ul=li.parentNode;
      let next=li.nextElementSibling;
      ul.insertBefore(next,li);
    }else if(event.target.className==="del btn btn-danger"){
        let li=event.target.parentNode;
      let ul=li.parentNode;
      ul.removeChild(li);
    }
    disabled();
    
});
function disabled(){
    let li=document.getElementsByTagName("li");
    for(let i=0;i<li.length;i++){
       li[i].children[0].disabled=false;
       li[i].children[1].disabled=false;
       li[0].children[0].disabled=true;
       li[li.length-1].children[1].disabled=true;  
    }
}