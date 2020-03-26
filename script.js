// Write your JavaScript code here!
//To Do: Create a handler

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevelInput.value === ""|| cargoMassInput.value ==="") {
         alert("All fields are required!");
         
      } else if ( (typeof pilotNameInput.value) !== "string" || (typeof copilotNameInput.value) !== "string" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ) {
         alert("Make sure to enter valid information for each field!");   
      } 
       
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelLevelStatus = document.getElementById("fuelStatus");
      let cargoMassStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      
      let faultyItems = document.getElementById("faultyItems");
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelLevelStatus.innerHTML = `There is not enough fuel for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoMassStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = "green";
      }      
   });  
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
         let div = document.getElementById("missionTarget");          
               div.innerHTML = `
                  <ol id = "orderList">
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src="${json[0].image}">
               `;           
         let orderList = document.getElementById("orderList");
         orderList.style.textAlign = "center"; 
       });
   });
});


