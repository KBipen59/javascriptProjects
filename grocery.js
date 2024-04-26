// selecting items
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

//edit option
let editElement;
let editFlag = false
let editID = "";

// ********* Event Listner **********
// submit form
form.addEventListener('submit',addItem)


// *************Functions************
function addItem(e) {
    e.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value !== '' && editFlag ===false){
        const element = document.createElement('article')
        // add class
        element.classList.add('grocery-item')
        // add id
        const attr = document.createAttribute('data-id')
        attr.value = id
        element.setAttributeNode(attr)
        // element.

    }else if(value !== '' && editFlag ===true){
        console.log('editing')
    }else{
        displayAlert('please enter value', 'danger')
    }
}

// display Alert
function displayAlert(text, action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(function() {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    },1000)
}

