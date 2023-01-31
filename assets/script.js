/************************************************************************
 Variables
 ***********************************************************************/
var encounterSection = document.getElementById("encounter-creator");
var addMonsterBtn = document.getElementById("add-monster-btn");
var addMonsterInput = document.getElementById("add-monster-input");
var monsterList = document.getElementById("monster-list");
var monsterTable = document.getElementById("table-body");

// Save Encounter Button
var createEncounterBtn = document.getElementById("create-encounter");

//Spotify Section & Buttons
var spotifyPlayer = document.getElementById("spotify-player");
var snowMusicBtn = document.getElementById("snow-music-btn");
var tavernMusicBtn = document.getElementById("tavern-music-btn");
var rainMusicBtn = document.getElementById("rain-music-btn");
var scaryMusicBtn = document.getElementById("scary-music-btn");
var campMusicBtn = document.getElementById("camp-music-btn");
var bossMusicBtn = document.getElementById("boss-music-btn");

/************************************************************************
 Functions
 ***********************************************************************/

// Function to populate options
function populateMonsters() {
  var requestApi = "https://www.dnd5eapi.co/api/monsters";
  // console.log(requestApi);

  fetch(requestApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      for (let i = 0; i < data.count; i++) {
        // console.log(data.results[i].name);
        var monsterList = document.createElement("option");
        monsterList.innerHTML = data.results[i].name;
        monsterList.value = data.results[i].index;
        addMonsterInput.appendChild(monsterList);
      }
    });
}

//Populate Monsters
populateMonsters();

function addMonster(event) {
  event.preventDefault();
  console.log(addMonsterInput.value);

  var requestApi =
    "https://www.dnd5eapi.co/api/monsters/" +
    addMonsterInput.value.toLowerCase().trim();

  console.log(requestApi);
  fetch(requestApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var monsterTableRow = document.createElement("tr");
      monsterTable.appendChild(monsterTableRow);

      var monsterTableHeader = document.createElement("th");
      monsterTableHeader.classList =
        "flex gap-2 px-6 py-4 font-normal text-gray-900";
      monsterTable.appendChild(monsterTableHeader);

      // Create Monster Img Div
      var monsterImgDiv = document.createElement("div");
      monsterImgDiv.classList = "relative h-10 w-10";
      monsterTableHeader.appendChild(monsterImgDiv);

      // Create Monster image
      var monsterImg = document.createElement("img");
      monsterImg.classList =
        "h-full w-full rounded-full object-cover object-center";
      monsterImg.setAttribute("src", "./assets/images/DnD_Hag.jpeg");
      monsterImgDiv.appendChild(monsterImg);

      // Create Monster Name Div
      var monsterNameDiv = document.createElement("div");
      monsterNameDiv.classList = "text-lg";
      monsterTableHeader.appendChild(monsterNameDiv);

      // Add Monster Name
      var monsterName = document.createElement("h3");
      monsterName.classList = "font-medium text-gray-700";
      monsterName = document.createTextNode(data.name);
      monsterNameDiv.appendChild(monsterName);

      // Add Monster Health
      var monsterHealthTd = document.createElement("td");
      monsterHealthTd.classList = "px-6 py-4";
      monsterTable.appendChild(monsterHealthTd);

      // Add Hit Points
      var monsterHealthSpan = document.createElement("span");
      monsterHealthSpan.classList =
        "inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-s font-semibold text-red-600";
      monsterHealthSpan.append(data.hit_points);
      monsterHealthTd.appendChild(monsterHealthSpan);

      // Add Monster Armor
      var monsterArmorTd = document.createElement("td");
      monsterArmorTd.classList = "px-6 py-4";
      monsterTable.appendChild(monsterArmorTd);

      // Add Hit Points
      var monsterArmorSpan = document.createElement("span");
      monsterArmorSpan.classList =
        "inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-s font-semibold text-gray-600";
      monsterArmorSpan.append(data.constitution);
      monsterArmorTd.appendChild(monsterArmorSpan);

      // Add Button to Delete
      var monsterBtnTd = document.createElement("td");
      monsterBtnTd.classList = "px-6 py-4";
      monsterTable.appendChild(monsterBtnTd);

      var monsterBtnDiv = document.createElement("div");
      monsterBtnDiv.classList = "flex justify-end gap-4";
      monsterBtnTd.appendChild(monsterBtnDiv);

      var monsterBtnMain = document.createElement("button");
      monsterBtnMain.classList =
        "delete-btn shadow bg-red-400 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";
      monsterBtnMain.textContent = "Delete";
      monsterBtnDiv.appendChild(monsterBtnMain);
    });
}

// Delete Monster Row
function deleteBtn(event) {
  event.preventDefault();
  if (event.target.matches(".delete-btn")) {
    console.log("Delete");
    monsterTable.remove();
  }
}
monsterTable.addEventListener("click", deleteBtn);

/************************************************************************
Spotify Buttons
 ***********************************************************************/

//Button Functions to change background image based on spotify choice
function changeBgSnow(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Winter.png)";
}

function changeBgTavern(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Tavern.jpg)";
}

function changeBgRain(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Raining.jpg)";
}

function changeBgScary(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Scary.png)";
}

function changeBgCamp(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Camp.jpg)";
}

function changeBgBoss(event) {
  event.preventDefault();
  spotifyPlayer.style.backgroundImage = "url(./assets/images/DnD_Boss.jpg)";
}

// Create Encounter
function createEncounter() {
  var encounterInfo = document.getElementById("encounter-textarea").value;
  var encounterInfoSection = document.getElementById("encounter-text");

  encounterInfoSection.innerHTML = encounterInfo;
  console.log(encounterInfo);

  var myTable = document.getElementById("monster-table");
  var monsterEncounterTable = document.getElementById(
    "encounter-section-table"
  );

  monsterEncounterTable.innerHTML = myTable.innerHTML;

  //Todo: Save Encounter to Local Storage
}

/************************************************************************
Calls
***********************************************************************/

// Add Monster Eventlistener
addMonsterBtn.addEventListener("click", addMonster);

// Create Encounter Eventlistener
createEncounterBtn.addEventListener("click", createEncounter);

//Spotify Button Event listeners
snowMusicBtn.addEventListener("click", changeBgSnow);
tavernMusicBtn.addEventListener("click", changeBgTavern);
rainMusicBtn.addEventListener("click", changeBgRain);
scaryMusicBtn.addEventListener("click", changeBgScary);
campMusicBtn.addEventListener("click", changeBgCamp);
bossMusicBtn.addEventListener("click", changeBgBoss);
