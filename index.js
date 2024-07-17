const newItemInput = document.getElementById("newItem");
const addButton = document.getElementById("addButton");
// const markPurchasedButton = document.getElementById("markPurchasedButton");
const clearListButton = document.getElementById("clearListButton");
const shoppingList = document.getElementById("shoppingList");
// const listItems = shoppingList.querySelectorAll("li");

addButton.addEventListener("click", () => {
  const newItem = newItemInput.value;
  if (newItem) {
    const listItem = document.createElement("li");
    const divItem = document.createElement("div");
    const markPurchasedButton = document.createElement("button");

    //here I created a list and add a style directly
    divItem.appendChild(listItem);
    markPurchasedButton.textContent = 'Purchased'
    markPurchasedButton.style.backgroundColor = 'red', markPurchasedButton.style.color = 'white';
    divItem.appendChild(markPurchasedButton);
    //! Style to the div of Items
    divItem.style.display = 'flex',divItem.style.flexDirection = 'row',
    divItem.style.justifyContent = 'space-between', divItem.style.margin = "4px";

    listItem.textContent = newItem;
    shoppingList.appendChild(divItem);

    newItemInput.value = ""; // Clear input after adding

    markPurchasedButton.addEventListener("click", function() {
        listItem.classList.toggle("purchased"); // Toggle purchased class
    });
  }
});


//! This method allow us to clear array of items
clearListButton.addEventListener("click", function() {
  shoppingList.innerHTML = ""; // Clear all list items
});