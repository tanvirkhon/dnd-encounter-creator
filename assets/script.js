/************************************************************************
 Variables
 ***********************************************************************/
var mainDiv = document.getElementById("main-div");
var listMonsters = document.getElementById("list-monsters");

/************************************************************************
 Functions
 ***********************************************************************/
function getApi() {
  var requestApi = "https://www.dnd5eapi.co/api/monsters";

  fetch(requestApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //   for (var i = 0; i < data.count; i++) {
      //     var listItem = document.createElement("li");

      //     listItem.textContent = data.results[i].name;
      //     listMonsters.appendChild(listItem);
      //   }
    });
}

/************************************************************************
Calls
 ***********************************************************************/
getApi();
