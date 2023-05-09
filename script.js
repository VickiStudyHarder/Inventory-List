// script.js
const tabsContainer = document.querySelector(".tabs");
const list = document.getElementById("list");

let currentTab = null;
let currentItem = null;

function createTabs() {
  data.forEach((category) => {
    const tab = document.createElement("button");
    tab.textContent = category.name;
    tab.classList.add("tab");
    tab.id = category.name;
    tab.addEventListener("click", handleTabClick);
    tabsContainer.appendChild(tab);
  });
}

function handleTabClick(e) {
  if (currentTab) {
    currentTab.classList.remove("active");
    if (currentItem) {
      currentItem.classList.remove("active");
      currentItem = null;
    }
  }
  e.target.classList.add("active");
  currentTab = e.target;

  const category = data.find((cat) => cat.name === e.target.id);
  populateList(category.items);
}

function populateList(items) {
  list.innerHTML = "";

  const itemCount = document.createElement("p");
  itemCount.textContent = `List (${items.length})`;
  itemCount.classList.add("item-count");
  list.appendChild(itemCount);

  if (Array.isArray(items)) {
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      listItem.classList.add("list-item");
      listItem.addEventListener("click", handleItemClick);
      list.appendChild(listItem);
    });
  } else {
    console.error("Invalid items:", items);
  }
}

function handleItemClick(e) {
  if (currentItem) {
    currentItem.classList.remove("active");
  }
  e.target.classList.add("active");
  currentItem = e.target;
}

createTabs();
