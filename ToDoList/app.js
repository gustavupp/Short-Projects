//********SELECT ITEMS***********
const ALERT = document.querySelector(".alert");
const TODO_FORM = document.querySelector(".todo-form");
const INPUT_TEXT = document.getElementById("input-text");
const SUBMIT_BTN = document.querySelector(".submit-btn");
const INDIVIDUAL_ITEM = document.querySelector(".individual-item");
const TODO_ITEMS = document.querySelector(".todo-items");
const CLEAR_BTN = document.querySelector(".clear-btn");

//*********EVENT LISTENERS********
TODO_FORM.addEventListener("submit", addTodoItem);
CLEAR_BTN.addEventListener("click", clearAll);

//DEFAULT SETTINGS
let editMode = false;
let editElement;
let editID = "";

//*********FUNCTIONS************
//add items to the list
function addTodoItem(e){
    e.preventDefault();
    const INPUT_VALUE = INPUT_TEXT.value;
    const INPUT_VALUE_ID = new Date().getTime().toString(); //quick setup to create unique ID's
    
    //check the value passed through the form
    if (INPUT_VALUE && !editMode) {
        const NEW_INDIVIDUAL_ITEM = document.createElement("article"); //create an article
        NEW_INDIVIDUAL_ITEM.classList.add("individual-item"); //added the CSS styling to the new item
        const ATTRIBUTE = document.createAttribute("data-id"); //create a dataset atribute
        ATTRIBUTE.value = INPUT_VALUE_ID; //assign the INPUT_VALUE_ID to the attribute
        NEW_INDIVIDUAL_ITEM.setAttributeNode(ATTRIBUTE); //set ATTRIBUTE to NEW_INDIVIDUAL_ITEM

        //create child elements and append to NEW_INDIVIDUAL ITEM
        NEW_INDIVIDUAL_ITEM.innerHTML = 
        `<div class="title">${INPUT_VALUE}</div>
        <div class="btn-container">
            <button type="button" class="edit-btn icon">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn icon">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

        //THIS IS FOR THE DELETE AND EDIT BUTTON
        //select and add event listeners to buttons after they have been added to the DOM
        const DELETE_BTN = NEW_INDIVIDUAL_ITEM.querySelector(".delete-btn");
        const EDIT_BTN = NEW_INDIVIDUAL_ITEM.querySelector(".edit-btn");
        DELETE_BTN.addEventListener("click", deleTodoItem);
        EDIT_BTN.addEventListener("click", editTodoItem);

        //apend item to its parent
        TODO_ITEMS.appendChild(NEW_INDIVIDUAL_ITEM);

        //add to local storage
        addToLocalStorage(INPUT_VALUE_ID, INPUT_VALUE);

        NEW_INDIVIDUAL_ITEM.classList.add("show-container");
        CLEAR_BTN.classList.add("show-container");

        displayAlert(ALERT, "Item Added To The List", "green"); 
        setBackToDefault(); //setback to default

    } else if (INPUT_VALUE && editMode) {
        editElement.innerHTML = INPUT_TEXT.value; //assign input new value to the element you are editing
        editLocalStorage(editID); //update local storage
        SUBMIT_BTN.innerHTML = "Submit"; //change submit button innerHTML back to Submit
        displayAlert(ALERT, "Item Updated", "green");
        setBackToDefault(); //setback to default
    } else {
        displayAlert(ALERT, "Empty Value", "red");
    }
    setBackToDefault(); //setback to default
}

//display alert function. I added a node element as a parameter so we can resuse the function more broadly
function displayAlert(node, text, alertColor){
    node.textContent = text;
    node.classList.add(`alert-${alertColor}`);

    setTimeout(() => {
        node.textContent = "";
        node.classList.remove(`alert-${alertColor}`);
    }, 1000);
}

//setback to default
function setBackToDefault(){
    INPUT_TEXT.value = "";
    editMode = false;
    editID = "";
    SUBMIT_BTN.innerHTML = "Submit";
}

//clear all items
function clearAll(){
    const ALL_ITEMS = document.querySelectorAll(".individual-item");

    if (ALL_ITEMS.length > 0){
        ALL_ITEMS.forEach((item) => {
            TODO_ITEMS.removeChild(item);
        });
    }
    CLEAR_BTN.classList.remove("show-container");
    displayAlert(ALERT, "List Cleared!", "red");
    //localStorage.removeItem("ALL_ITEMS");
    setBackToDefault();
}

//delete item
function deleTodoItem(e){
    //grab the target button's parent parent
    const ITEM = e.currentTarget.parentElement.parentElement;
    const ITEM_ID = ITEM.dataset.id; //grab its id so we can delete it later from local storage

    TODO_ITEMS.removeChild(ITEM); //target the parent container and remove the child item

    //if there is nothin else in the list, remove clear button as well
    if (TODO_ITEMS.children.length === 0) CLEAR_BTN.classList.remove("show-container");
     
    displayAlert(ALERT, "Item Removed", "red");
    removeFromLocalStorage(ITEM_ID); //remove from local storage
    setBackToDefault();
}

//edit item
function editTodoItem(e){
    const EDIT_ELEMENT = e.currentTarget.parentElement.previousElementSibling; //grab the value of the item you are editing
    INPUT_TEXT.value = EDIT_ELEMENT.innerHTML; //assign the value to the input field
    SUBMIT_BTN.innerHTML = "Save"; //change submit button innerHTML to EDIT
    editMode = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
    editElement = EDIT_ELEMENT;
}

//*********LOCAL STORAGE********
//add to local storage
function addToLocalStorage(id, value){
    console.log("item added to local storage");
};

//remove from local storage
function removeFromLocalStorage(id){
    console.log("removed from local storage");
}

//update local storage
function editLocalStorage(id){
    console.log("local storage updated");
}
//*********SETUP ITEMS***********