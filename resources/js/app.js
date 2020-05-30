// something kinda like this but not
//needs to look at dropdown and li id, compare, hide where not true

var userSelect = document.querySelector("#resource-filter");
userSelect.addEventListener("change", function () {
  console.log(userSelect.value);
  // var element = [document.querySelectorAll("li")];
  var elements = Array.prototype.slice.call(document.querySelectorAll("li"));

  console.log(elements);

  //somewhat hot mess below

  var i;

  for (i = 0; i < elements.length; i++) {
    console.log(elements[i]);

    if (elements.indexOf(userSelect.value) !== -1) {
      elements[i].style.display = "";
    } else {
      elements[i].style.display = "none";
    }
  }
});

//abandoned below

// if (document.getElementsByClassName("lessonplans") == userSelect.value) {
//   element.classList.add("selectstyle");
// } else if (
//   document.getElementsByClassName("professionaldev") == userSelect.value
// ) {
//   element.classList.add("selectstyle");
// } else if (
//   document.getElementsByClassName("nationalorgs") == userSelect.value
// ) {
//   element.classList.add("selectstyle");
// } else if (
//   document.getElementsByClassName("regionalorgs") == userSelect.value
// ) {
//   element.classList.add("selectstyle");
// } else {
//   //show all?
// }
// });
