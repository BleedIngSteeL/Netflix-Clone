// Get all elements with the class "FAQ__title" and store them in the "accordian" variable
let accordian = document.getElementsByClassName("FAQ__title");

// Loop through each element in the "accordian" variable
for (let i = 0; i < accordian.length; i++) {
  // Add a click event listener to each "FAQ__title" element
  accordian[i].addEventListener("click", function () {
    // Check if the second child of the clicked element has the class "fa-plus"
    if (this.childNodes[1].classList.contains("fa-plus")) {
      // If true, remove "fa-plus" and add "fa-times" classes to the second child
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      // If false, remove "fa-times" and add "fa-plus" classes to the second child
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    // Get the next sibling element of the clicked element
    let content = this.nextElementSibling;

    // Check if the style property "maxHeight" is set for the content
    if (content.style.maxHeight) {
      // If true, set "maxHeight" to null (collapse the content)
      content.style.maxHeight = null;
    } else {
      // If false, set "maxHeight" to the scroll height of the content (expand the content)
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
