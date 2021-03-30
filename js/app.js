const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Remove border from other tabs
const removeBorder = () => {
  tabItems.forEach(item => item.classList.remove("tab-border"));
};

// To remove show class from other content
const hideContent = () => {
  tabContentItems.forEach(item => item.classList.remove("show"));
};

// Add border to selected item. Since normal function is used , this refers to the item clicked
//  if e.target is used it will add class to the element clicked, icon , text , div etc
// and not exactly the tab-item
function selectItem() {
  removeBorder();
  hideContent();
  this.classList.add("tab-border");

  // get content item. this.id will have the id

  // tab item has id tab-1, tab-2 , tab-3 and content has tab-1-contnet , tab-2-content , tab-3-content
  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add("show");
}

// add listener to each tab item
tabItems.forEach(item => item.addEventListener("click", selectItem));
