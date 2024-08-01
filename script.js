let addpopup=document.getElementById("add-popup-btn")
let popupoverlay=document.querySelector(".popup-overlay")
let popupbox=document.querySelector(".popup-box")

addpopup.addEventListener('click',()=>{
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//select cancel button
let cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener('click',(event)=>{
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

//select container,add-book and 3 inputs

let container=document.querySelector(".container")
let addbook= document.getElementById("add-book")
let booktitle=document.getElementById("book-title-input")
let bookauthor=document.getElementById("book-author-input")
let bookdescription=document.getElementById("book-description-input")

addbook.addEventListener('click',(event)=>{
    event.preventDefault()
    let div=document.createElement('div')
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> <h5>${bookauthor.value}</h5> <p>${bookdescription.value}</p>
     <button  onclick="deletebook(event)">Delete</button>`
     
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
    


})

//let deletebtn=document.getElementById("delete-book-container")

// deletebtn.addEventListener('click',(event)=>{
//     console.log("hello")
//     event.target.parentElement.remove()
// })

function deletebook(event){
    event.target.parentElement.remove()
}
let deletebtn=document.getElementById("delete-book-container")
     deletebtn.addEventListener("click", (event)=>{
    event.target.parentElement.remove();
})



