const addButtons=document.getElementsByClassName("add-task");
const addButton=addButtons[0];



const toDoboard=document.getElementById("to-do-board");
//To drag the event 
function attachDragEvents(target){
    target.addEventListener('dragstart',()=>{
        target.classList.add('flying')
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying')
    })
}

//Adding task by clicking on the button

addButton.addEventListener('click',()=>{
    const input= prompt('What is the task ?')
    if(!input) return;
    // append in todobody
    const todobody=document.querySelector(".board-body")

    const taskCard=document.createElement("div");
    taskCard.classList.add('item')//set the class name
    taskCard.setAttribute('draggable',true)
    const bodyValue=document.createElement('span');
    bodyValue.innerText=input

    //Delete button
    const deleteBtn= document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML="X"
    taskCard.appendChild(bodyValue);
    taskCard.appendChild(deleteBtn)

    todobody.appendChild(taskCard);
    attachDragEvents(taskCard)
    toDoboard.appendChild(todobody)


})

//Delete button working

const cardBody=document.querySelector('.board-body');
cardBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-btn")){
        const taskCard=e.target.closest(".item")
        console.log(taskCard)
        if(taskCard){
            taskCard.remove()
        }
    }
})
// const deleteButtons=document.querySelectorAll(".delete-btn")
// console.log(deleteButtons)
// deleteButtons.forEach(btn => {
//     btn.addEventListener('click',()=>{
//       const taskCard=document.querySelector(".item")
//       taskCard.remove();
//     })
    
//});
const allBoard=document.querySelectorAll('.board-body');
const allItem=document.querySelectorAll('.item');

allItem.forEach((item)=>{attachDragEvents(item)})


allBoard.forEach((board)=>{
    board.addEventListener('dragover',()=>{
        const flyingEvent=document.querySelector(".flying")
        board.appendChild(flyingEvent)
    })
})

