// Get all tab buttons and tab content
const tabButtons = document.querySelectorAll(".tab button");
const tabContents = document.querySelectorAll(".tabcontent");

// Hide all tab content and deselect all tabs
tabContents.forEach((tabContent) => {
  tabContent.style.display = "none";
});
tabButtons.forEach((button) => {
  button.classList.remove("selected");
});

// Add event listener to each tab button
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // if click on the button do the following
    // Deselect all tabs except the clicked tab
    tabButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("selected");
      }
    });

    // Hide all tab content
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    // Show the clicked tab content and select the clicked tab
    const tabContent = document.querySelector(`#tab${index + 1}`);
    tabContent.style.display = "block";
    button.classList.add("selected");

    // Show the list of items for the selected tab
    const items = tabContent.querySelectorAll(".item");
    items.forEach((item) => {
      item.style.display = "block";
    });
  });
});

// Hide all items
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.style.display = "none";
});

// Add event listener to each item
items.forEach((item) => {
  item.addEventListener("click", (evt) => {
    // Deselect all items except the clicked item
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("selected");
      }
    });

    // Toggle the selected state of the clicked item
    item.classList.toggle("selected");
  });
});
