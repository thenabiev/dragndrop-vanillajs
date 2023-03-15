let items=document.querySelectorAll(".item");
let box=document.querySelectorAll('.box');



function dragStart(){
    setTimeout(()=>(this.className='none'), 0)
    console.log(this,'start');
}
function dragEnd(){
    setTimeout(()=>(this.className='item'), 0)
    alert("Seçilən şəkil qutuya yerləşdirilməyib")
    
}

function dragOver(e){
    e.preventDefault()
    setTimeout(()=>(this.className='box over'))
}
function dragEnter(){
    console.log("Enter");
}
function dragLeave(){
    setTimeout(()=>(this.className='box'))

}
function dragDrop(){
    let img=document.querySelector("div.none > img")
    console.log("Drop");
}

for (let i=0; i<items.length; i++){
    items[i].addEventListener('dragstart', dragStart);
    items[i].addEventListener('dragend', dragEnd);
}

for (let j=0; j<box.length; j++){
    box[j].addEventListener('dragover', dragOver);
    box[j].addEventListener('dragenter', dragEnter);
    box[j].addEventListener('dragleave', dragLeave);
    box[j].addEventListener('drop', dragDrop);
}