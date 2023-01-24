/************************************************************************
 Variables
 ***********************************************************************/
var encounterSection = document.getElementById("encounter-creator");
var monsterCard = document.querySelector(".monster-card");
var monsterImg = document.querySelector(".monster-img");
var monsterTitle = document.querySelector(".monster-title");
var monsterInfo = document.querySelector(".monster-info");
var cardButton = document.querySelector(".card-button");

var addMonsterBtn = document.getElementById("add-monster-btn");
var addMonsterInput = document.getElementById("add-monster-input");
var monsterList = document.getElementById("monster-list");

/************************************************************************
 Functions
 ***********************************************************************/

function addMonster(event) {
  event.preventDefault();
  console.log(addMonsterInput.value);

  var requestApi =
    "https://www.dnd5eapi.co/api/monsters/" + addMonsterInput.value;

  console.log(requestApi);
  fetch(requestApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var monsterCheck = document.createElement("input");
      var monsterLabel = document.createTextNode(data.index);

      monsterCheck.type = "checkbox";
      monsterList.appendChild(monsterCheck);
      monsterList.appendChild(monsterLabel);
    });
}

/************************************************************************
Calls
 ***********************************************************************/

addMonsterBtn.addEventListener("click", addMonster);
