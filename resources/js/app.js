// something kinda like this but not
//needs to look at dropdown and li id, compare, hide where not true

var userInput = document.getElementById("#resource-filter");
userInput.addEventListener("change", function () {
  var filterResources = RESOURCES.filter(function (card) {
    return card().indexOf(userInput.value) !== -1;
  });
  render_(filterResources);
});
