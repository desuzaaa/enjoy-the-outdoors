const parksTbody = document.querySelector("#parksTbody");

const statesDropdown = document.querySelector("#statesDropdown");

const parkTypeDropdown = document.querySelector("#parkTypeDropdown");

function getStates() {
  for (const state of locationsArray) {
    let option = document.createElement("option");
    option.value = state;
    option.innerText = state;
    statesDropdown.appendChild(option);
  }
}

getStates();

function loadParks() {
  for (const park of nationalParksArray) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName;

    let td2 = tr.insertCell();
    td2.innerText = park.Address;

    let td3 = tr.insertCell();
    td3.innerText = park.City;

    let td4 = tr.insertCell();
    td4.innerText = park.State;

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A";

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    if (park.Visit) {
      td8.innerText = park.Visit;
    } else {
      td8.innerText = "N/A";
    }
  }
}
loadParks();

function filterByState() {
  let sortedParks = statesDropdown.value;
  let filteredStates = nationalParksArray.filter((park) => park.State === sortedParks);
  parksTbody.innerHTML = "";

  for (const park of filteredStates) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName;

    let td2 = tr.insertCell();
    td2.innerText = park.Address;

    let td3 = tr.insertCell();
    td3.innerText = park.City;

    let td4 = tr.insertCell();
    td4.innerText = park.State;

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A"; //&&(and), ||(or), ! or !!(not)

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A"; //Turnary (variable ? variable : different Varaible)

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    td8.innerText = park.Visit || "N/A";
  }

  
}

function getParks() {
  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.innerText = park;
    parkTypeDropdown.appendChild(option);
  }
}

getParks();

function filterByPark() {
  let sortedType = parkTypeDropdown.value;
  let filteredParks = parkTypeData.filter((park) => park.type === sortedType);

  parksTbody.innerHTML = "";

  for (const park of filteredParks) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName;

    let td2 = tr.insertCell();
    td2.innerText = park.Address;

    let td3 = tr.insertCell();
    td3.innerText = park.City;

    let td4 = tr.insertCell();
    td4.innerText = park.State;

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A";

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    td8.innerText = park.Visit || "N/A";
  }
}
