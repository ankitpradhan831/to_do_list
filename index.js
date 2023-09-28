console.log("to do list app");

let title = document.getElementById("title");
let desc = document.getElementById("description");

let addList = document.getElementsByClassName("btn")[0];
let clearList = document.getElementsByClassName("btn")[1];
let deleteListItem = document.getElementsByClassName("item-btn");

let listContainer = document.getElementsByClassName("list-container");
let listItem = document.getElementsByClassName("list-item");
let hrLine = document.getElementsByTagName("hr");

let count = 4;
let index = 1;

//events listening
// adding new items to the list
addList.addEventListener("click", function () {
  if (index > 10) {
    alert("You can add only 10 list items...!!");
  }
  listItem[count].innerText = index;
  listItem[count + 1].innerText = title.value;
  listItem[count + 2].innerText = desc.value;

  listContainer[index].style.display = "flex";
  hrLine[index].style.display = "block";

  title.value = title.style.maskType;
  desc.value = desc.style.maskType;

  count = count + 4;
  index++;
});

// removing the whole list items
clearList.addEventListener("click", function () {
  location.reload();
});

// removing specific list item
for (let i = 0; i < 10; i++) {
  deleteListItem[i].addEventListener("click", function () {
    listContainer[i + 1].style.display = "none";
    hrLine[i + 1].style.display = "none";
  });
}
