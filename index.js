const newItemInput = document.getElementById("newItem");
const addButton = document.getElementById("addButton");
const markPurchasedButton = document.getElementById("markPurchasedButton");
const clearListButton = document.getElementById("clearListButton");
const shoppingList = document.getElementById("shoppingList");
const listItems = shoppingList.querySelectorAll("li");

addButton.addEventListener("click", () => {
  const newItem = newItemInput.value;
  if (newItem) {
    const listItem = document.createElement("li");
    listItem.textContent = newItem;
    shoppingList.appendChild(listItem);
    newItemInput.value = ""; // Clear input after adding
  }
});

markPurchasedButton.addEventListener("click", function() {
  const listItems = shoppingList.querySelectorAll("li");
  for (const item of listItems) {
    item.classList.toggle("purchased"); // Toggle purchased class
  }
});

clearListButton.addEventListener("click", function() {
  shoppingList.innerHTML = ""; // Clear all list items
});