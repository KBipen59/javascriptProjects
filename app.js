const formInput = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')


let groceries = []
submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    const grocery = formInput.value
    
    //const retriving the existing array from localstorage
    const existingGroceryList = localStorage.getItem('groceryLists')
    if(existingGroceryList){
        groceries = JSON.parse(existingGroceryList)  
    }
    if(formInput.value){
        groceries.push(grocery)
        forUi()
    }else{
        alert('cccc')
    }
    
    
    //saving the array into the localStorage.creats the dataset name as groceryList in localstorage
    localStorage.setItem('groceryLists', JSON.stringify(groceries))
    console.log(groceries)
    
    formInput.value= ''
})


//function for updating the lists into the ui
function forUi (){
    const listDiv = document.querySelector('.grocery-list')
    let items = groceries.map((grocery)=>{
        return`<article class="grocery-item">
                    <p class="title">${grocery}</p>
                    <div class="btn-container">
                        <button class="edit-btn" type="button">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn" type="button">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </article>`
    })
    listDiv.innerHTML = items.join('')
}



//load the existing lists in localstorage when the browser load
window.addEventListener('DOMContentLoaded', function (){
    const existingGroceryList = localStorage.getItem('groceryLists')
    console.log('helllo')
    if(existingGroceryList){
        groceries = JSON.parse(existingGroceryList)  
        forUi()
    }
})
