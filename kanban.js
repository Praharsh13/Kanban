
//Need a persisrtence storage of each board so data will not
// go at time 

function saveTask(){
    const boardIds=["to-do-board","progress-board","done-board"]

    const data={}
    boardIds.forEach((id)=>{
        const boardBody=document.querySelector(`#${id}`)
       // console.log(boardBody)
        if(boardBody){
            const task=[]
            boardBody.querySelectorAll(".item").forEach((item)=>{
                const taskText=item.querySelector("span").innerText
                task.push(taskText)
            })

            data[id]=task;
            console.log(data)

        }
    })
    //console.log(data)  
    localStorage.setItem("kanbanTask",JSON.stringify(data))
}

//get data and make it visible again

function loadTasks(){
    const taskData=localStorage.getItem("kanbanTask");
    if(!taskData) return;
    const data=JSON.parse(taskData);

    Object.keys(data).forEach((id)=>{
        const boardBody=document.querySelector(`#${id}`)
       // console.log(boardBody)
        if(boardBody){
            boardBody.innerHTML=""
            data[id].forEach((task)=>{
                const taskCard=document.createElement("div")
                taskCard.classList.add("item")
                taskCard.setAttribute("draggable",true)

                const bodyValue=document.createElement("span")
                bodyValue.innerText=task

                const deleteBtn=document.createElement("button")
                deleteBtn.classList.add("delete-btn")
                deleteBtn.innerHTML="X"

                taskCard.appendChild(bodyValue)
                taskCard.appendChild(deleteBtn)

                boardBody.appendChild(taskCard)

                attachDragEvents(taskCard)


            })
        }
    })
}



const addButton=document.querySelector(".add-task");
//const addButton=addButtons[0];



const toDoboard=document.getElementById("to-do-board");
//To drag the event 
function attachDragEvents(target){
    target.addEventListener('dragstart',()=>{
        target.classList.add('flying')
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying')
        saveTask()
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

    saveTask()


})

//Delete button working

const cardBody=document.querySelector('.board-body');
cardBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-btn")){
        const taskCard=e.target.closest(".item")
        console.log(taskCard)
        if(taskCard){
            taskCard.remove()
            saveTask()
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
    board.addEventListener('dragover',(e)=>{
        //const flyingEvent=document.querySelector(".flying")
        //board.appendChild(flyingEvent)
        e.preventDefault();
    })


board.addEventListener('drop', (e) => {
    e.preventDefault();
    // Get the currently dragged element
    const draggedItem = document.querySelector('.flying');
    if (!draggedItem) return;
    
    // If the drop target is another item, insert the dragged item before it,
    // otherwise append it to the board.
    if (e.target.classList.contains('item')) {
      board.insertBefore(draggedItem, e.target);
    } else {
      board.appendChild(draggedItem);
      //saveTask()
    }
    saveTask()
  });
});

document.addEventListener("DOMContentLoaded", loadTasks);
