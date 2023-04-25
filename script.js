// Get all tab buttons and tab content
const tabButtons = document.querySelectorAll(".tab button");
const tabContents = document.querySelectorAll(".tabcontent");

// Hide all tab content
tabContents.forEach((tabContent) => {
  tabContent.style.display = "none";
});
// Deselect all tabs
tabButtons.forEach((tabButton) => {
  tabButton.classList.remove("selected");
});

// Add event listenrer to each tab button
tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Deselect all tabs except the clicked tab
    tabButtons.forEach((otherButton) => {
      if (otherButton !== tabButton) {
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
