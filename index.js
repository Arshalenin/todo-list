formele=document.querySelector('.form')
inputEle=document.querySelector(".input")
ulEle=document.querySelector(".list")
let existinglist=JSON.parse(localStorage.getItem('list'))
if(existinglist)
{
    existinglist.forEach(ele=>{
        inputEle.value=ele.name
        todoList();
})
}

formele.addEventListener("submit",(event)=>
{
    event.preventDefault();
    todoList();
})


function todoList()
{
    const  LI=document.createElement('li')
    LI.innerText=inputEle.value;
    ulEle.appendChild(LI)
    inputEle.value="";
    const CHECK=document.createElement('div')
    CHECK.innerHTML=`<i class="fas fa-check-square"></i>`
    LI.appendChild(CHECK)
    const TRASH=document.createElement('div')
    TRASH.innerHTML=`<i class="fas fa-trash"></i>`
    LI.appendChild(TRASH)
    CHECK.addEventListener('click',()=>
    {
       LI.classList.toggle('checked')
       updateLocal()
    })
    TRASH.addEventListener('click',()=>
    {
       LI.remove()
       updateLocal()
    })
    updateLocal()
}

function updateLocal()
{
    const list=[]
    const LIeles=document.querySelectorAll('li')
    LIeles.forEach(ele=>{
        list.push(
            {
                name:ele.innerText,
                checked:ele.classList.contains('checked')
            })
    })
    localStorage.setItem('list',JSON.stringify(list))
}