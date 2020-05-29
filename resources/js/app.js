// something kinda like this but not
//needs to look at dropdown and li id, compare, hide where not true

var userSelect = document.querySelector("#resource-filter");
userSelect.addEventListener("change", function () {
  console.log(userSelect.value);
  var element = [document.querySelectorAll("li#cardjs")];

  console.log(element);

  //somewhat hot mess below

  var i;

  for (i = 0; i < element.length; i++) {
    console.log(element[i]);

    if (element[i].classList.contains(userSelect.value)) {
      element[i].style.display = "";
    } else {
      element[i].style.display = "none";
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
